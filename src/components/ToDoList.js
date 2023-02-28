import React, { useState } from "react";
import classes from "../styles/toDoList.module.css";
import { Header } from "./Header";

export const ToDoList = () => {
  const [list, setList] = useState([]);
  const addTask = (task, date, endDate, value, endValue) => {
    setList((previousValue) => {
      return [
        ...previousValue,
        {
          task: task,
          date: date,
          endDate: endDate,
          value: value,
          endValue: endValue,
          id: Math.random().toString(),
        },
      ];
    });
  };
  return (
    <>
      <Header addTask={addTask} />
      <div className={classes.content_container}>
        <div className={classes.list_header}>
          <div>Task</div>
          <div>Start Date & Time</div>
          <div>End Date & Time</div>
        </div>
        <div className={classes.list_body}>
        {list.length === 0 && (
            <div className="list-item list-item--message">
              <span>No List to do</span>
            </div>
          )}
          {list.map((task) => (
            <div className={classes.list_item}>
              <div className={classes.list_item__title}>{task.task}</div>
              <div className={classes.list_item__title}>
                <span>{task.date.toLocaleString().split(",")[0]}</span>
                <span>{task.value.toLocaleTimeString()}</span>
              </div>
              <div className={classes.list_item__title}>
                <span>{task.endDate.toLocaleString().split(",")[0]}</span>
                <span>{task.endValue.toLocaleTimeString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
