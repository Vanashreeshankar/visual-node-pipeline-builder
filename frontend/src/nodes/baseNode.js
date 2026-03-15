import { Handle, Position } from "reactflow";

export default function BaseNode({ title, children, type }) {
  return (
    <div className={`node-card ${type}`}>

      <div className="node-title">
        {title}
      </div>

      <div className="node-content">
        {children}
      </div>

      <Handle
        type="target"
        position={Position.Left}
        style={{
          background: "#38bdf8",
          width: 10,
          height: 10,
          boxShadow: "0 0 8px #38bdf8"
        }}
      />

      <Handle
        type="source"
        position={Position.Right}
        style={{
          background: "#38bdf8",
          width: 10,
          height: 10,
          boxShadow: "0 0 8px #38bdf8"
        }}
      />

    </div>
  );
}