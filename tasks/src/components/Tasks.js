import Task from "./Task";

const Tasks = ({ tasks }) => {
  console.log(tasks);
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </>
  );
};

export default Tasks;
