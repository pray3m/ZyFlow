import { getCreditsPack, type PackId } from "@/types/billing";
import "server-only";
import type Stripe from "stripe";
import prisma from "../prisma";

export async function HandleCheckoutSessionCompleted(
  event: Stripe.Checkout.Session
) {
  if (!event.metadata) {
    throw new Error("missing metadata");
  }

  const { userId, packId } = event.metadata;
  if (!userId) {
    throw new Error("missing user id");
  }

  if (!packId) {
    throw new Error("missing pack id");
  }

  const purchasedPack = getCreditsPack(packId as PackId);

  if (!purchasedPack) {
    throw new Error("purchased pack not found");
  }

  await prisma.userBalance.upsert({
    where: { userId },
    create: {
      userId,
      credits: purchasedPack.credits,
    },
    update: {
      credits: {
        increment: purchasedPack.credits,
      },
    },
  });

  await prisma.userPurchase.create({
    data: {
      userId,
      stripeId: event.id,
      description: `${purchasedPack.name} - ${purchasedPack.credits} credits`,
      amount: event.amount_total || 0,
      currency: event.currency!,
    },
  });
}
