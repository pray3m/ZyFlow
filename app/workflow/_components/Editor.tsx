import type { Workflow } from "@/lib/generated/prisma";
import React from "react";
import FlowEditor from "./FlowEditor";

function Editor({ workflow }: { workflow: Workflow }) {
  return (
    <div className="flex flex-col h-full w-full overflow-hidden">
      <section className="flex h-full overflow-auto">
        <FlowEditor workflow={workflow} />
      </section>
    </div>
  );
}

export default Editor;
