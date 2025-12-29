import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import styles from "./styles.module.css";

function TodoAddForm({ tasks, setTasks, refInputNewtask }) {
  const [inputTask, setInputTask] = useState("");

  function changeInputTsak(event) {
    setInputTask(event.target.value);
    // console.log(tasks);
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
