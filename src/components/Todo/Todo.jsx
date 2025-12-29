import { useEffect, useRef, useState } from "react";
import TodoAddForm from "../TodoAddForm/TodoAddForm";
import TodoList from "../TodoList/TodoList";
import TaskInfo from "../TaskInfo/TaskInfo";
import styles from "./styles.module.css";
// import useLocalStorage from "../../hooks/useToggle";

function Todo() {
  const [tasks, setTasks] = useState(getValueToLocalStorage("tasks", []));
  function getValueToLocalStorage(key, initialvalue) {
    try {
      const dataLocalStorage = JSON.parse(localStorage.getItem(key));
      return Array.isArray(dataLocalStorage) ? dataLocalStorage : initialvalue;
    } catch (error) {
      console.error("Ошибка получения данных", error);
      return initialvalue;
    }
  }
  function setValueToLocalStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Ошибка записи данных в localStorage", error);
    }
  }
  useEffect(() => {
    setValueToLocalStorage("tasks", tasks);
  }, [tasks]);

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
          <TodoList tasks={tasks} setTasks={setTasks} />
        ) : (
          <p>Список задач пуст</p>
        )}
      </div>
    </div>
  );
}

export default Todo;
