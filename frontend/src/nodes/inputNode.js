// inputNode.js

import BaseNode from "./baseNode";

export default function InputNode() {
  return (
    <BaseNode title="Input Node" type="input-node">
      <input
        type="text"
        placeholder="Enter value"
        style={{ width: "100%" }}
      />
    </BaseNode>
  );
}