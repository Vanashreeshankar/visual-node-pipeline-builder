import BaseNode from "./baseNode";

export default function MathNode() {
  return (
    <BaseNode title="Math Node" type="math-node">

      <div className="node-stack">

        <input
          className="nodrag"
          type="number"
          placeholder="Number A"
        />

        <input
          className="nodrag"
          type="number"
          placeholder="Number B"
        />

      </div>

    </BaseNode>
  );
}