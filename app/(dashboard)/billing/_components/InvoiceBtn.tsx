"use client";
import { useMutation } from "@tanstack/react-query";
import { Loader2Icon } from "lucide-react";
import { toast } from "sonner";
import { DownloadInvoice } from "@/actions/billing/downloadInvoice";
import { Button } from "@/components/ui/button";

function InvoiceBtn({ id }: { id: string }) {
  const mutation = useMutation({
    mutationFn: DownloadInvoice,
    onSuccess: (data) => (window.location.href = data as string),
    onError: () => {
      toast.error("something went wrong...");
    },
  });
  return (
    <Button
      variant={"ghost"}
      size={"sm"}
      className="text-sm gap-2 text-muted-foreground px-2 py-2"
      disabled={mutation.isPending}
      onClick={() => mutation.mutate(id)}
    >
      Invoice
      {mutation.isPending && <Loader2Icon className="h-4 w-4 animate-spin" />}
    </Button>
  );
}
export default InvoiceBtn;
