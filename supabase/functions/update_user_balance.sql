CREATE OR REPLACE FUNCTION update_user_balance(p_user_id UUID, p_amount NUMERIC)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE profiles
  SET balance = balance + p_amount
  WHERE id = p_user_id;
END;
$$;