import styles from "./styles.module.css";
import TodoItem from "../TodoItem/TodoItem";
function TodoList({ tasks, setTasks }) {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <TodoItem tasks={tasks} setTasks={setTasks} />
      </ul>
    </div>
  );
}

export default TodoList;
