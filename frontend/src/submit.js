import { useStore } from "./store";
import { useState } from "react";

export const SubmitButton = () => {

  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const [result, setResult] = useState(null);

  const handleSubmit = () => {

    const numNodes = nodes.length;
    const numEdges = edges.length;

    // Simple DAG validation
    const isDAG = numEdges <= numNodes - 1;

    setResult({
      nodes: numNodes,
      edges: numEdges,
      dag: isDAG
    });
  };

  return (
    <>

      {/* Submit Button */}
      <div
        style={{
          position: "fixed",
          bottom: "30px",
          left: "0",
          right: "0",
          display: "flex",
          justifyContent: "center",
          zIndex: 1000
        }}
      >
        <button className="submit-btn" onClick={handleSubmit}>
          Submit 
        </button>
      </div>

      {/* Pipeline Summary Panel */}
      {result && (
        <div
          style={{
            position: "fixed",
            top: "120px",
            right: "30px",
            background: "#020617",
            border: "1px solid #334155",
            padding: "20px",
            borderRadius: "12px",
            width: "220px",
            zIndex: 1000,
            boxShadow: "0 10px 30px rgba(0,0,0,0.6)"
          }}
        >
          <h3
            style={{
              marginBottom: "10px",
              color: "#38bdf8"
            }}
          >
            Pipeline Summary
          </h3>

          <hr
            style={{
              borderColor: "#1e293b",
              marginBottom: "10px"
            }}
          />

          <p>Nodes: {result.nodes}</p>

          <p>Edges: {result.edges}</p>

          <p>
            Is DAG:
            <span
              style={{
                color: result.dag ? "#22c55e" : "#ef4444",
                marginLeft: "6px",
                fontWeight: "600"
              }}
            >
              {result.dag ? "true" : "false"}
            </span>
          </p>

        </div>
      )}

    </>
  );
};