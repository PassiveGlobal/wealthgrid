import { useState } from "react"
import { useForm } from "react-hook-form"
import { useQuery } from "@tanstack/react-query"
import { supabase } from "@/integrations/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ConnectBankAccount } from "@/components/ConnectBankAccount"
import { useToast } from "@/components/ui/use-toast"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const depositFormSchema = z.object({
  amount: z.coerce.number().min(1, "Amount must be greater than 0"),
  bank_account_id: z.string().uuid("Please select a bank account"),
})

type DepositFormValues = z.infer<typeof depositFormSchema>

export function DepositForm() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const { data: bankAccounts } = useQuery({
    queryKey: ['bankAccounts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('bank_accounts')
        .select('*')
      if (error) throw error
      return data
    },
  })

  const form = useForm<DepositFormValues>({
    resolver: zodResolver(depositFormSchema),
    defaultValues: {
      amount: 0,
      bank_account_id: "",
    },
  })

  async function onSubmit(data: DepositFormValues) {
    try {
      setIsLoading(true)
      
      const { error } = await supabase.functions.invoke(
        'create-deposit-session',
        {
          body: { 
            amount: data.amount,
            bank_account_id: data.bank_account_id,
          },
        }
      )

      if (error) throw error

      toast({
        title: "Deposit initiated",
        description: "Your deposit is being processed. You'll be notified once it's complete.",
      })

      form.reset()
    } catch (error) {
      console.error('Error:', error)
      toast({
        title: "Error",
        description: "Failed to initiate deposit. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      {!bankAccounts?.length ? (
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">
            Connect a bank account to make deposits
          </p>
          <ConnectBankAccount />
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="bank_account_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bank Account</FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a bank account" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {bankAccounts.map((account) => (
                        <SelectItem key={account.id} value={account.id}>
                          {account.bank_name} (*{account.account_mask})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount (USD)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter amount"
                      type="number"
                      step="0.01"
                      min="0"
                      {...field}
                      onChange={(e) => field.onChange(e.target.valueAsNumber)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Processing..." : "Deposit Funds"}
            </Button>
          </form>
        </Form>
      )}
    </div>
  )
}