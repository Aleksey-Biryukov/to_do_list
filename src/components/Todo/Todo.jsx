import { useEffect, useRef } from "react";
import TodoAddForm from "../TodoAddForm/TodoAddForm";
import TodoList from "../TodoList/TodoList";
import TaskInfo from "../TaskInfo/TaskInfo";
import styles from "./styles.module.css";
import useLocalStorage from "../../hooks/useLocalStorage";

function Todo() {
  const toggleCompleteTask = (taskId, isDone) => {
    const completedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, isDone: !isDone } : task
    );
    setTasks(completedTasks);
  };

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const refInputNewtask = useRef(null);

  useEffect(() => {
    refInputNewtask.current.focus();
  });

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Список Задач</h1>
        <TodoAddForm
          tasks={tasks}
          setTasks={setTasks}
          refInputNewtask={refInputNewtask}
        />
        <TaskInfo tasks={tasks} setTasks={setTasks} />
        {tasks.length !== 0 ? (
          <TodoList
            tasks={tasks}
            setTasks={setTasks}
            toggleCompleteTask={toggleCompleteTask}
            deleteTask={deleteTask}
          />
        ) : (
          <p>Список задач пуст</p>
        )}
      </div>
    </div>
  );
}

export default Todo;
