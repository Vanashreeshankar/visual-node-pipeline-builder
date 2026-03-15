import BaseNode from "./baseNode";

export default function LLMNode() {
  return (
    <BaseNode title="LLM Node" type="llm-node">
      <select>
        <option>GPT-3.5</option>
        <option>GPT-4</option>
      </select>
    </BaseNode>
  );
}