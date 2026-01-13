import styles from "./styles.module.css";
import TodoItem from "../TodoItem/TodoItem";
function TodoList({ tasks }) {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {tasks.map((task) => (
          <TodoItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
