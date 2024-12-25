CREATE OR REPLACE FUNCTION increment_balance(user_id UUID, increment_amount NUMERIC)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE profiles
  SET balance = balance + increment_amount
  WHERE id = user_id;
END;
$$;