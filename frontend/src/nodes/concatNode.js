import BaseNode from "./baseNode";

export default function ConcatNode() {
  return (
    <BaseNode title="Concat Node" type="concat-node">
      <input type="text" placeholder="Text A" />
      <input type="text" placeholder="Text B" />
    </BaseNode>
  );
}