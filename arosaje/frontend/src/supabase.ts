import {createClient} from "@supabase/supabase-js"

const supabaseUrl = 'https://ojfxahufwkabovyuctxr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qZnhhaHVmd2thYm92eXVjdHhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ2NjkzMjUsImV4cCI6MjAwMDI0NTMyNX0.Bkry1bt5XJSsarEpgfA0QxG5yKEhVZDlxvll3dRVcNk'

// process.env.SUPABASE_KEY ? process.env.SUPABASE_KEY : ''

export const supabase = createClient(supabaseUrl, supabaseKey)