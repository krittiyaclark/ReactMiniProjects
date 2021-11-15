const Task = ({ task, onDelete }) => {
  return (
    <div className={`task ${task.reminder ? "reminder" : ""}`}>
      <h3>
        {task.text}
        <span
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        >
          X
        </span>
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
