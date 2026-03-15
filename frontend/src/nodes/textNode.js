import { useState } from "react";
import { Handle, Position } from "reactflow";
import BaseNode from "./baseNode";

export default function TextNode() {

  const [text, setText] = useState("");

  const variables = text.match(/{{(.*?)}}/g) || [];

  return (
    <BaseNode title="Text Node" type="text-node">

      <textarea
        placeholder="Enter text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          e.target.style.height = "auto";
          e.target.style.height = e.target.scrollHeight + "px";
        }

        }
        className="node-textarea"
      />

      {variables.map((variable, index) => {

        const cleanName = variable.replace(/[{}]/g, "");

        return (
          <Handle
            key={index}
            type="target"
            position={Position.Left}
            id={cleanName}
            style={{
              top: 60 + index * 24,
              background: "#38bdf8",
              width: 10,
              height: 10,
              boxShadow: "0 0 8px #38bdf8"
            }}
          />
        );
      })}

    </BaseNode>
  );
}