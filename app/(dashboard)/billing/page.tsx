import { ArrowLeftRightIcon, CoinsIcon } from "lucide-react";
import { Suspense } from "react";
import { GetCreditsUsageInPeriod } from "@/actions/analytics/GetCreditsUsageInPeriod";
import { GetUserPurchaseHistory } from "@/actions/billing/GetUserPurchaseHistory";
import { GetAvailableCredits } from "@/actions/billing/getAvailableCredits";
import ReactCountupWrapper from "@/components/ReactCountupWrapper";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import type { Period } from "@/types/analytics";
import CreditsPurchase from "./_components/CreditsPurchase";
import CreditsUsageChart from "./_components/CreditsUsageChart";
import InvoiceBtn from "./_components/InvoiceBtn";

export default function BillingPage() {
  return (
    <div className="mx-auto space-y-8 p-4">
      <h1 className="text-3xl font-bold">Billing</h1>

      <Suspense fallback={<Skeleton className="h-[166px] w-full" />}>
        <BalanceCard />
      </Suspense>
      <CreditsPurchase />
      <Suspense fallback={<Skeleton className="h-[300px] w-full" />}>
        <CreditUsageCard />
      </Suspense>
      <Suspense fallback={<Skeleton className="h-[300px] w-full" />}>
        <TransactionHistoryCard />
      </Suspense>
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

async function CreditUsageCard() {
  const period: Period = {
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  };
  const data = await GetCreditsUsageInPeriod(period);
  return (
    <CreditsUsageChart
      data={data}
      title="Credits consumed"
      description="Daily credit consumed in current month."
    />
  );
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

async function TransactionHistoryCard() {
  const purchases = await GetUserPurchaseHistory();
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold flex items-center gap-2">
          <ArrowLeftRightIcon className="h-6 w-6 text-primary" /> Transaction
          History
        </CardTitle>
        <CardDescription>
          View your transaction history and download invoices.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {purchases.length === 0 && (
          <p className="text-muted-foreground ">No transactions yet.</p>
        )}
        {purchases.map((purchase) => (
          <div
            key={purchase.id}
            className="flex justify-between items-center py-3 border-b last:border-b-0"
          >
            <div>
              <p className="font-medium">{formatDate(purchase.date)}</p>
              <p className="text-sm text-muted-foreground">
                {purchase.description}
              </p>
            </div>

            <div className="text-right">
              <p className="font-medium">
                {formatAmount(purchase.amount, purchase.currency)}
              </p>
              <InvoiceBtn id={purchase.id} />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function formatAmount(amount: number, currency: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount / 100);
}
