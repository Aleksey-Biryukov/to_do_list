import styles from "./styles.module.css";
function TodoItem({ tasks, setTasks }) {
  function toggleComplete(taskId, isDone) {
    const completedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, isDone: !isDone } : task
    );
    setTasks(completedTasks);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  if (!Array.isArray(tasks) || tasks.length === 0) return null;
  return (
    <>
      {tasks.map((task) => (
        <li key={task.id} className={styles.item}>
          <div className={styles.forcheck}>
            <input
              className={styles.checkbox}
              type="checkbox"
              checked={task.isDone}
              onChange={() => toggleComplete(task.id, task.isDone)}
            />
            <p className={task.isDone ? styles.textIsDone : styles.text}>
              {task.title}
            </p>
          </div>

          <button
            className={styles.btn}
            onClick={() => deleteTask(task.id)}
          ></button>
        </li>
      ))}
    </>
  );
}

export default TodoItem;
