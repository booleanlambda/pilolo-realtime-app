import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
