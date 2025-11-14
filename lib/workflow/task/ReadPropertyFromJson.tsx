import {
  FileJson2Icon,
  type LucideProps,
  MousePointerClick,
  TextIcon,
} from "lucide-react";
import { TaskParamType, TaskType } from "@/types/task";
import type { WorkflowTask } from "@/types/workflow";

export const ReadPropertyFromJsonTask = {
  type: TaskType.READ_PROPERTY_FROM_JSON,
  label: "Read property from JSON",
  icon: (props) => <FileJson2Icon className="stroke-orange-400" {...props} />,
  isEntryPoint: false,
  credits: 1,
  inputs: [
    {
      name: "JSON",
      type: TaskParamType.STRING,
      required: true,
    },
    {
      name: "Property Name",
      type: TaskParamType.STRING,
      required: true,
    },
  ] as const,
  outputs: [
    {
      name: "Property Value",
      type: TaskParamType.STRING,
    },
  ] as const,
} satisfies WorkflowTask;
