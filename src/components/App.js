import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [categories, setCategories] = useState(CATEGORIES);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredTasks, setFilteredTasks] = useState(TASKS);

  function handleCategorySelect(category) {
    setSelectedCategory(category);
  }

  function onTaskFormSubmit(newTask) {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);

    if (selectedCategory !== "All") {
      setTasks([...filteredTasks, newTask]);
    }
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        handleCategorySelect={handleCategorySelect}
      />
      <NewTaskForm categories={categories} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;