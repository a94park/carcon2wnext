"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function login(formData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/account");
}

export async function signup(formData) {
  const supabase = await createClient();

  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
    full_name: formData.get("full_name"),
    user_type: formData.get("user_type"),
    username: formData.get("username"),
  };

  const { error } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options: { data: { full_name: data.full_name, user_type: data.user_type, username: data.username } },
  });

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}
