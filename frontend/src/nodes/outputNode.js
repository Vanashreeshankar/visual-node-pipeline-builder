import BaseNode from "./baseNode";

export default function OutputNode() {
  return (
    <BaseNode title="Output Node" type="output-node">
      <input placeholder="Output value" />
    </BaseNode>
  );
}