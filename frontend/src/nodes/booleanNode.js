import BaseNode from "./baseNode";

export default function BooleanNode() {
    return (
      <BaseNode title="Boolean Node" type="boolean-node">
        <select>
          <option>true</option>
          <option>false</option>
        </select>
      </BaseNode>
    );
  }