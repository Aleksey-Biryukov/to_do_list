import { createPortal } from "react-dom";
import styles from "./styles.module.css";
import { useRef } from "react";
function Modal({ isOpen, setTasks, toggleIsopen }) {
  function deletAllTasks() {
    setTasks([]);
    toggleIsopen();
  }
  const refModal = useRef(null);

  function closeModalWindow(event) {
    if (event.target === refModal.current) {
      toggleIsopen();
    }
  }
  const portalModal = document.getElementById("modal");
  if (!isOpen) return null;
  return createPortal(
    <div className={styles.container} ref={refModal} onClick={closeModalWindow}>
      <div className={styles.containerModal}>
        <p className={styles.text}>Удалить все задачи?</p>
        <div className={styles.buttonContainer}>
          <button className={styles.btn} onClick={deletAllTasks}>
            ДА
          </button>
          <button className={styles.btn} onClick={toggleIsopen}>
            НЕТ
          </button>
        </div>
      </div>
    </div>,
    portalModal
  );
}

export default Modal;
