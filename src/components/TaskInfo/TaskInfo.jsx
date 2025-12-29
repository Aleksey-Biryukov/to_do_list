import Modal from "../Modal/Modal";
import styles from "./styles.module.css";
import useToggle from "../../hooks/useToggle";
function TaskInfo({ tasks, setTasks }) {
  const tasksCompleted = [...tasks].filter((task) => task.isDone === true);

  const [isOpen, toggleIsopen] = useToggle(false);

  return (
    <div className={styles.container}>
      <p className={styles.text}>
        Выполнено : {tasksCompleted.length} Из : {tasks.length}
      </p>
      <button className={styles.btn} onClick={toggleIsopen}>
        Удалить все
      </button>
      <Modal isOpen={isOpen} setTasks={setTasks} toggleIsopen={toggleIsopen} />
    </div>
  );
}

export default TaskInfo;
