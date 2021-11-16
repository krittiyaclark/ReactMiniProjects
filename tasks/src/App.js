import { useEffect, useState } from "react";

import Headers from "./components/Header";
import "./App.css";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks();
      setTasks(taskFromServer);
    };
    getTasks();
  }, []);

  // Fetch Tasks
  const fetchTasks = async () => {
    const response = await fetch("http://localhost:5000/tasks");
    const data = await response.json();

    console.log(data);
    return data;
  };

  // Add Tasks
  const addTask = async (task) => {
    const response = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await response.json();
    setTasks([...tasks, data]);
  };

  // Delete Tasks
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    console.log("toggle");
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Headers>Task</Headers>
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      <AddTask onAdd={addTask} />
    </div>
  );
}

export default App;
