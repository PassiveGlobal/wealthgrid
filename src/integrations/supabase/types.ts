export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      bank_accounts: {
        Row: {
          account_mask: string
          account_type: string
          bank_name: string
          created_at: string
          id: string
          plaid_access_token: string
          updated_at: string
          user_id: string
        }
        Insert: {
          account_mask: string
          account_type: string
          bank_name: string
          created_at?: string
          id?: string
          plaid_access_token: string
          updated_at?: string
          user_id: string
        }
        Update: {
          account_mask?: string
          account_type?: string
          bank_name?: string
          created_at?: string
          id?: string
          plaid_access_token?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "bank_accounts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string
          id: string
          message: string
          read: boolean | null
          title: string
          type: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          message: string
          read?: boolean | null
          title: string
          type: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          message?: string
          read?: boolean | null
          title?: string
          type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      portfolio_history: {
        Row: {
          created_at: string
          id: string
          month: string
          user_id: string
          value: number
          year: number
        }
        Insert: {
          created_at?: string
          id?: string
          month: string
          user_id: string
          value: number
          year: number
        }
        Update: {
          created_at?: string
          id?: string
          month?: string
          user_id?: string
          value?: number
          year?: number
        }
        Relationships: [
          {
            foreignKeyName: "portfolio_history_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          active_investments: number | null
          balance: number
          created_at: string
          full_name: string | null
          id: string
          total_loss: number | null
          total_profit: number | null
          two_factor_enabled: boolean | null
          updated_at: string
          withdrawal_pin: string | null
        }
        Insert: {
          active_investments?: number | null
          balance?: number
          created_at?: string
          full_name?: string | null
          id: string
          total_loss?: number | null
          total_profit?: number | null
          two_factor_enabled?: boolean | null
          updated_at?: string
          withdrawal_pin?: string | null
        }
        Update: {
          active_investments?: number | null
          balance?: number
          created_at?: string
          full_name?: string | null
          id?: string
          total_loss?: number | null
          total_profit?: number | null
          two_factor_enabled?: boolean | null
          updated_at?: string
          withdrawal_pin?: string | null
        }
        Relationships: []
      }
      strategies: {
        Row: {
          allocation_percentage: number
          created_at: string
          description: string | null
          id: string
          name: string
          performance_metrics: Json | null
          risk_level: string
          status: string
          stop_loss: number | null
          target_profit: number | null
          type: string
          updated_at: string
          user_id: string
        }
        Insert: {
          allocation_percentage?: number
          created_at?: string
          description?: string | null
          id?: string
          name: string
          performance_metrics?: Json | null
          risk_level: string
          status?: string
          stop_loss?: number | null
          target_profit?: number | null
          type: string
          updated_at?: string
          user_id: string
        }
        Update: {
          allocation_percentage?: number
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          performance_metrics?: Json | null
          risk_level?: string
          status?: string
          stop_loss?: number | null
          target_profit?: number | null
          type?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "strategies_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      transactions: {
        Row: {
          amount: number
          bank_account_id: string | null
          created_at: string
          currency: string
          id: string
          metadata: Json | null
          payment_method: string
          plaid_transaction_id: string | null
          status: string
          stripe_payment_intent_id: string | null
          type: string
          updated_at: string
          user_id: string
        }
        Insert: {
          amount: number
          bank_account_id?: string | null
          created_at?: string
          currency: string
          id?: string
          metadata?: Json | null
          payment_method: string
          plaid_transaction_id?: string | null
          status: string
          stripe_payment_intent_id?: string | null
          type: string
          updated_at?: string
          user_id: string
        }
        Update: {
          amount?: number
          bank_account_id?: string | null
          created_at?: string
          currency?: string
          id?: string
          metadata?: Json | null
          payment_method?: string
          plaid_transaction_id?: string | null
          status?: string
          stripe_payment_intent_id?: string | null
          type?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "transactions_bank_account_id_fkey"
            columns: ["bank_account_id"]
            isOneToOne: false
            referencedRelation: "bank_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      transaction_status: "pending" | "completed" | "failed" | "cancelled"
      transaction_type: "deposit" | "withdrawal" | "transfer"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
