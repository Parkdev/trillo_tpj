"use server";

import { z } from "zod";

import { db } from "@/lib/db";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type State = {
  errors?: {
    title?: string[];
  };
  message?: string | null;
};

const CreateBoard = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
});

export async function create(prevState: State, formData: FormData) {
  const validatedFields = CreateBoard.safeParse({
    title: formData.get("title"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing fields",
    };
  }

  const { title } = validatedFields.data;

  try {
    await db.board.create({
      data: {
        title,
      },
    });
  } catch (error) {
    return {
      message: "Database Error",
    };
  }

  revalidatePath("organization/org_2cUDkHhAtBXtfzlCmB8WhFT3M5l");
  redirect("org_2cUDkHhAtBXtfzlCmB8WhFT3M5l");
  return null;
}
