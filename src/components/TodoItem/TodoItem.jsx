import styles from "./styles.module.css";
function TodoItem({ task, deleteTask, toggleCompleteTask }) {
  return (
    <>
      <li className={styles.item}>
        <div className={styles.forcheck}>
          <input
            className={styles.checkbox}
            type="checkbox"
            checked={task.isDone}
            onChange={() => toggleCompleteTask(task.id, task.isDone)}
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
    </>
  );
}

export default TodoItem;
