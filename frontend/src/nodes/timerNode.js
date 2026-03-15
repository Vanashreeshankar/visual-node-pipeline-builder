import BaseNode from "./baseNode";

export default function TimerNode() {
    return (
      <BaseNode title="Timer Node" type="timer-node">
        <input type="number" placeholder="Seconds" />
      </BaseNode>
    );
  }