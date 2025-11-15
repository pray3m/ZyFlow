import { CoinsIcon } from "lucide-react";
import { Suspense } from "react";
import { GetAvailableCredits } from "@/actions/billing/getAvailableCredits";
import ReactCountupWrapper from "@/components/ReactCountupWrapper";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import CreditsPurchase from "./_components/CreditsPurchase";

export default function BillingPage() {
  return (
    <div className="mx-auto space-y-8 p-4">
      <h1 className="text-3xl font-bold">Billing</h1>

      <Suspense fallback={<Skeleton className="h-[166px] w-full" />}>
        <BalanceCard />
      </Suspense>
      <CreditsPurchase />
    </div>
  );
}

async function BalanceCard() {
  const userBalance = await GetAvailableCredits();

  return (
    <Card className=" overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-background border-primary/20 shadow-lg flex justify-between flex-col">
      <CardContent className="p-6 relative items-center">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-1">
              Available Credits
            </h3>
            <p className="text-4xl font-bold text-primary">
              <ReactCountupWrapper value={userBalance} />
            </p>
          </div>
          <CoinsIcon
            size={140}
            className="absolute right-0 bottom-0 opacity-20 text-primary"
          />
        </div>
      </CardContent>

      <CardFooter>
        When your credits balance reaches zero, your workflows will stop
        working.
      </CardFooter>
    </Card>
  );
}
