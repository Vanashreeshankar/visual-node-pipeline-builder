// draggableNode.js

export const DraggableNode = ({ type, label, icon: Icon }) => {

  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };

    event.target.style.cursor = "grabbing";

    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );

    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={`toolbar-node ${type}`}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      draggable
    >
      {Icon && <Icon size={16} className="toolbar-icon" />}
      <span className="toolbar-label">{label}</span>
    </div>
  );
};