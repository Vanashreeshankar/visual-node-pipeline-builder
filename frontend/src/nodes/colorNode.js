import BaseNode from "./baseNode";

export default function ColorNode() {
  return (
    <BaseNode title="Color Node" type="color-node">
      <input type="color" style={{ width: "100%" }} />
    </BaseNode>
  );
}