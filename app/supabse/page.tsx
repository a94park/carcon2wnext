import { createClient } from "@/utils/supabase/server";

export default async function db() {
  const supabase = await createClient();
  const { data: users, error } = await supabase
    .from("users")
    .select("*, employer(*), job_seekers(*), job_posting(*), application(*)");
  if (error) {
    console.error(error);
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }

  return <pre>{JSON.stringify(users, null, 2)}</pre>;
}
