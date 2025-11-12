import { ReactFlowProvider } from "@xyflow/react";
import { FlowValidationContextProvider } from "@/components/context/FlowValidationContext";
import type { Workflow } from "@/lib/generated/prisma";
import { WorkflowStatus } from "@/types/workflow";
import FlowEditor from "./FlowEditor";
import TaskMenu from "./TaskMenu";
import Topbar from "./topbar/Topbar";

function Editor({ workflow }: { workflow: Workflow }) {
  return (
    <FlowValidationContextProvider>
      <ReactFlowProvider>
        <div className="flex flex-col h-full w-full overflow-hidden">
          <Topbar
            title="Workflow editor"
            subtitle={workflow.name}
            workflowId={workflow.id}
            isPublished={workflow.status === WorkflowStatus.PUBLISHED}
          />
          <section className="flex h-full overflow-auto">
            <TaskMenu />
            <FlowEditor workflow={workflow} />
          </section>
        </div>
      </ReactFlowProvider>
    </FlowValidationContextProvider>
  );
}

export default Editor;
