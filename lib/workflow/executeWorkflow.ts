"server only";

import { revalidatePath } from "next/cache";
import { WorkflowExecutionStatus } from "@/types/workflow";
import prisma from "../prisma";

export async function ExecuteWorkflow(executionId: string) {
  const execution = await prisma.workflowExecution.findUnique({
    where: { id: executionId },
    include: { workflow: true, phases: true },
  });

  if (!execution) {
    throw new Error("execution not found");
  }

  // todo: setup execution environment
  const environment = { phases: {} };

  await initializeWorkflowExecution(executionId, execution.workflowId);

  //todo: initialize phases status

  const executionPhase = false;
  for (const phase of execution.phases) {
    // TODO: execute phase
  }

  //todo: finalize execution
  //TODO: clean up environment

  revalidatePath("/workflow/runs");
}

async function initializeWorkflowExecution(
  executionId: string,
  workflowId: string
) {
  await prisma.workflowExecution.update({
    where: {
      id: executionId,
    },
    data: {
      startedAt: new Date(),
      status: WorkflowExecutionStatus.RUNNING,
    },
  });

  await prisma.workflow.update({
    where: {
      id: workflowId,
    },
    data: {
      lastRunAt: new Date(),
      lastRunStatus: WorkflowExecutionStatus.RUNNING,
      lastRunId: executionId,
    },
  });
}
