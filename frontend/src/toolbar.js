// toolbar.js

import { DraggableNode } from "./draggableNode";

import {
  ArrowUpCircle,
  Brain,
  FileOutput,
  Type,
  Palette,
  Sigma,
  GitMerge,
  ToggleLeft,
  Timer
} from "lucide-react";

export const PipelineToolbar = () => {

  return (
    <div className="toolbar-container">

      <DraggableNode type="customInput" label="Input" icon={ArrowUpCircle} />

      <DraggableNode type="llm" label="LLM" icon={Brain} />

      <DraggableNode type="customOutput" label="Output" icon={FileOutput} />

      <DraggableNode type="text" label="Text" icon={Type} />

      <DraggableNode type="color" label="Color" icon={Palette} />

      <DraggableNode type="math" label="Math" icon={Sigma} />

      <DraggableNode type="concat" label="Concat" icon={GitMerge} />

      <DraggableNode type="boolean" label="Boolean" icon={ToggleLeft} />

      <DraggableNode type="timer" label="Timer" icon={Timer} />

    </div>
  );
};