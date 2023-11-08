import React, {useState} from "react";
import Task from "./Task";

function TaskList({tasks, setTasks}) {
  let keyCount = 0

  function deleteTask(taskText) {
  const updatedTasks = tasks.filter((task) => task.text !== taskText);
  setTasks(updatedTasks);
  }

  return (
    <div className="tasks">
      {tasks.map((task) => {
        keyCount++
        return (
          <Task text={task.text} category={task.category} key={keyCount} onDelete={() => deleteTask(task.text)}/>
        )
      })}
    </div>
  );
}

export default TaskList;
