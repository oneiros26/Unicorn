import React, { useState } from "react";
import ConfirmButton from "./ConfirmButton";
import DeleteButton from "./DeleteButton";
import GenericButton from "./GenericButton";
import Checkbox from "./Checkbox";

function TodoList() {
  const [tasks, setTasks] = useState([
    "Count +5",
    "Reset count",
    "Set color to #abc123",
  ]);
  const [newTask, setNewTask] = useState("");
  const [checkedBoxes, setCheckedBoxes] = useState([]);

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function delTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  //   function toggleCheck(index) {

  //   }

  return (
    <section className="flex flex-col justify-between items-center h-64 gap-2">
      <h2 className="text-4xl font-bold">Todo List</h2>
      <ol className="w-full h-full mb-2 overflow-y-scroll overflow-x-hidden">
        {tasks.map((task, index) => (
          <li key={index} className="flex gap-2 items-center justify-between">
            <p className="text-lg">{task}</p>
            <div className="flex gap-1">
              <GenericButton onClick={() => moveTaskUp(index)}>
                &#11165;
              </GenericButton>
              <GenericButton onClick={() => moveTaskDown(index)}>
                &#11167;
              </GenericButton>
              <DeleteButton onClick={() => delTask(index)} />
              {/* <Checkbox onClick={() => toggleCheck(index)} /> */}
            </div>
          </li>
        ))}
      </ol>
      <div className="flex gap-2">
        <input
          id="task-input"
          className="border-solid border-2 border-gray-500 px-1 rounded-xs"
          type="text"
          placeholder="Enter new task.."
          value={newTask}
          onChange={handleInputChange}
          maxLength={20}
        ></input>
        <ConfirmButton onClick={addTask} />
      </div>
    </section>
  );
}

export default TodoList;
