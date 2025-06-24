"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */

import type { Workflow } from "@/lib/generated/prisma";
import { CreateFlowNode } from "@/lib/workflow/CreateFlowNode";
import { TaskType } from "@/types/task";
import {
  Background,
  BackgroundVariant,
  Controls,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import NodeComponent from "./nodes/NodeComponent";

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

const nodeTypes = {
  ZyflowNode: NodeComponent,
};

const snapGrid: [number, number] = [50, 50];
const fitViewOptions = { padding: 1 };

const initialFlowNode = CreateFlowNode(TaskType.LAUNCH_BROWSER);

function FlowEditor({ workflow }: { workflow: Workflow }) {
  const [nodes, _setNodes, onNodesChange] = useNodesState([initialFlowNode]);
  const [edges, _setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <main className="h-full w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        snapToGrid
        snapGrid={snapGrid}
        fitView
        fitViewOptions={fitViewOptions}
      >
        <Controls position="top-left" fitViewOptions={fitViewOptions} />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </main>
  );
}

export default FlowEditor;
