"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

export async function DeleteWorkflow(id: string) {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("unauthenticated");
  }

  await prisma.workflow.delete({
    where: {
      id,
      userId,
    },
  });
  revalidatePath("/workflows");
}
