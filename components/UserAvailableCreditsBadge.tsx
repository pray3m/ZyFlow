"use client";

import { useQuery } from "@tanstack/react-query";
import { CoinsIcon } from "lucide-react";
import Link from "next/link";
import { GetAvailableCredits } from "@/actions/billing/getAvailableCredits";
import { cn } from "@/lib/utils";
import ReactCountupWrapper from "./ReactCountupWrapper";
import { buttonVariants } from "./ui/button";
import { Spinner } from "./ui/spinner";

function UserAvailableCreditsBadge() {
  const query = useQuery({
    queryKey: ["user-available-credits"],
    queryFn: () => GetAvailableCredits(),
    refetchInterval: 30 * 1000, //30Seconds
  });
  return (
    <Link
      href={"/billing"}
      className={cn(
        "w-full space-x-2 items-center",
        buttonVariants({ variant: "outline" })
      )}
    >
      <CoinsIcon size={20} className="text-primary" />
      <span>
        {query.isLoading && <Spinner />}
        {!query.isLoading && query.data && (
          <ReactCountupWrapper value={query.data} />
        )}
        {!query.isLoading && !query.data && "—"}
      </span>
    </Link>
  );
}

export default UserAvailableCreditsBadge;
