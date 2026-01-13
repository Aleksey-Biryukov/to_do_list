import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import styles from "./styles.module.css";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
function TodoAddForm({ tasks, setTasks }) {
  const [inputTask, setInputTask] = useState("");

  const { refInputNewtask } = useContext(TaskContext);

  function changeInputTsak(event) {
    setInputTask(event.target.value);
  }

  function addTask() {
    if (inputTask.trim()) {
      const newTask = { id: uuidv4(), title: inputTask, isDone: false };
      setTasks([...tasks, newTask]);
    }
    setInputTask("");
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Новая задача"
        value={inputTask}
        onChange={changeInputTsak}
        className={styles.input}
        ref={refInputNewtask}
      />
      <button className={styles.btn} onClick={addTask}>
        Добавить
      </button>
    </div>
  );
}

export default TodoAddForm;
