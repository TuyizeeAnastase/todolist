import classes from "../styles/toDoList.module.css";
import headerClasses from "../styles/header.module.css";
import { AddForm } from "./Form/AddForm";
import { useState } from "react";

export const Header = ({addTask }) => {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
      <header className={headerClasses.header}>
        <div className={classes.content_container}>
          <div className={headerClasses.header__content}>
            <div className={headerClasses.header__title}>
              <h1>To Do List App</h1>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className={`${headerClasses.button} ${headerClasses.button_link}`}
            >
              Add To Do
            </button>
          </div>
        </div>
      </header>
      {showModal && (
        <>
          <AddForm addTask={addTask} setShowModal={setShowModal} />
        </>
      )}
    </>
  );
};
