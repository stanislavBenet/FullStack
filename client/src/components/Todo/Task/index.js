import React from "react";

const Task = (props) => {
  const { task, handleDelete, handleIsDone } = props;
  return (
    <li>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => handleIsDone(task.id)}
      />
      {task.body}
      <button onClick={() => handleDelete(task.id)}>X</button>
    </li>
  );
};

export default Task;
