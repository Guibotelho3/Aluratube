import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://wwadcatbxyynmjigxfbk.supabase.co";
const PUBLIC_KEY ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3YWRjYXRieHl5bm1qaWd4ZmJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxOTEyOTUsImV4cCI6MTk4Mzc2NzI5NX0.uFawLEkNijHn0YA-UkXYOfyElHaC2-lgP6VrDBKOz1A";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);
export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}