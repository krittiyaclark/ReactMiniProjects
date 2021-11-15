import Task from "./Task";

const Tasks = ({ tasks, onDelete }) => {
  console.log(tasks);
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Tasks;
