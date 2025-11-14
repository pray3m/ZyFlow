"use server";

import { auth } from "@clerk/nextjs/server";
import { eachDayOfInterval, format } from "date-fns";
import { success } from "zod";
import { PeriodToDateRange } from "@/lib/helper/dates";
import prisma from "@/lib/prisma";
import type { Period } from "@/types/analytics";
import { WorkflowExecutionStatus } from "@/types/workflow";

const { COMPLETED, FAILED } = WorkflowExecutionStatus;

type Stats = Record<
  string,
  {
    success: number;
    failed: number;
  }
>;

export async function GetWorkflowExecutionStats(period: Period) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("unauthenticated");
  }

  const dateRange = PeriodToDateRange(period);

  const executions = await prisma.workflowExecution.findMany({
    where: {
      userId,
      startedAt: {
        gte: dateRange.startDate,
        lte: dateRange.endDate,
      },
      status: {
        in: [COMPLETED, FAILED],
      },
    },
  });

  const dateFormat = "yyyy-MM-dd";

  const stats: Stats = eachDayOfInterval({
    start: dateRange.startDate,
    end: dateRange.endDate,
  })
    .map((date) => format(date, dateFormat))
    .reduce((acc, date) => {
      acc[date] = {
        success: 0,
        failed: 0,
      };
      return acc;
    }, {} as any);

  //   [
  //     "2024-08-01": {
  //         success: 22,
  //         failed:4
  //     }
  //   ]

  executions.forEach((execution) => {
    const date = format(execution.startedAt!, dateFormat);
    if (execution.status === WorkflowExecutionStatus.COMPLETED) {
      stats[date].success += 1;
    }

    if (execution.status === WorkflowExecutionStatus.FAILED) {
      stats[date].failed += 1;
    }
  });

  return stats;
}
