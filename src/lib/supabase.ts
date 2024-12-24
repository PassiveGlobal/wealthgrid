import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://whbqsangwovfavuwxzau.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndoYnFzYW5nd292ZmF2dXd4emF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ3NzA4NDUsImV4cCI6MjA1MDM0Njg0NX0.Qf9if99MUzX7wUaW7beBnb17IjFvpVUcNvT1WmrsFww';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);