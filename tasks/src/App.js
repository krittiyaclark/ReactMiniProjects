import { useEffect, useState } from "react";

import Headers from "./components/Header";
import "./App.css";
import Tasks from "./components/Tasks";

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
    const data = response.json();

    console.log(data);
    return data;
  };
  return (
    <div className="container">
      <Headers>Task</Headers>
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
