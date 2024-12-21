import { createClient } from '@supabase/supabase-js';

// Since we're using Lovable's Supabase integration, these values are automatically injected
const supabaseUrl = 'https://xgzjwlbfuqjqvtqsembg.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhnemp3bGJmdXFqcXZ0cXNlbWJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc0ODg0MDAsImV4cCI6MjAyMzA2NDQwMH0.HfNtNyVk-xbc9DYuELh6YuTZZkXKZqQj_lm51JOXGjI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);