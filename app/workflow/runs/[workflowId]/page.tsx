import { InboxIcon } from "lucide-react";
import { Suspense } from "react";
import { getWorkflowExecutions } from "@/actions/workflows/getWorkflowExecutions";
import { Spinner } from "@/components/ui/spinner";
import { waitFor } from "@/lib/helper/waitFor";
import Topbar from "../../_components/topbar/Topbar";
import ExecutionsTable from "./_components/ExecutionsTable";

export default async function ExecutionsPage({
  params,
}: {
  params: Promise<{ workflowId: string }>;
}) {
  const { workflowId } = await params;
  return (
    <div className="h-full w-full overflow-auto">
      <Topbar
        workflowId={workflowId}
        hideButtons
        title="All Runs"
        subtitle="List of all your worklfow runs."
      />
      <Suspense
        fallback={
          <div className="flex h-full w-full items-center justify-center">
            <Spinner className="stroke-primary size-8" />
          </div>
        }
      >
        <ExecutionsTableWrapper workflowId={workflowId} />
      </Suspense>
    </div>
  );
}

async function ExecutionsTableWrapper({ workflowId }: { workflowId: string }) {
  waitFor(400);
  const executions = await getWorkflowExecutions(workflowId);
  if (!executions) return <div>No data</div>;

  if (executions.length === 0) {
    return (
      <div className="container w-full py-6">
        <div className="flex items-center flex-col gap-2 justify-center h-full w-full">
          <div className="rounded-full bg-accent w-20 h-20 flex items-center justify-center">
            <InboxIcon size={40} className="stroke-primary" />
          </div>
          <div className="flex flex-col gap-1 text-center">
            <p className="font-bold">
              No runs have been triggered yet for this workflow.
            </p>
            <p className="text-sm text-muted-foreground">
              You can trigger a new run in the editor page.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-6 w-full">
      <ExecutionsTable workflowId={workflowId} initialData={executions} />
    </div>
  );
}
