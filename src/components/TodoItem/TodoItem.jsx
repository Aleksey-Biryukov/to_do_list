import { TaskContext } from "../../context/TaskContext";
import styles from "./styles.module.css";
import { useContext } from "react";
function TodoItem({ task }) {
  const { deleteTask, toggleCompleteTask } = useContext(TaskContext);
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
