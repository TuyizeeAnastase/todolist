import classes from "../../styles/addForm.module.css";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const AddForm = ({ setShowModal, addTask }) => {
  const [date, setDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [value, onChange] = useState(new Date());
  const [endValue, onEndChange] = useState(new Date());
  const [task, setTask] = useState("");
  const [error, setError] = useState(null);

  const taskHandler = (e) => {
    setTask(e.target.value);
  };

  const addTaskHandler = (e) => {
    e.preventDefault();
    if (task.trim().length === 0) {
      setError("Please input task Title");
      return 0;
    }
    addTask(task, date, endDate, value, endValue);
    setTask("");
    setShowModal(false);
  };
  return (
    <>
      <div className={classes.backdrop}>
        <div className={classes.modal}>
          <h1>Add new Task</h1>
          {error && <p className={classes.errorHeader}>{error}</p>}
          <form onSubmit={addTaskHandler} className={classes.add_form}>
            <input
              type="text"
              placeholder="Task"
              autoFocus
              value={task}
              className={classes.text_input}
              onChange={taskHandler}
            />
            <p>Start Date & Time</p>
            <div className={classes.pickers}>
              <DatePicker
                selected={date}
                value={date}
                onChange={(date) => setDate(date)}
                className={classes.datePicker}
              />
              <input
                className={classes.timePicker}
                type="time"
                onChange={onChange}
              />
            </div>
            <p>End Date & Time</p>
            <div className={classes.pickers}>
              <DatePicker
                selected={endDate}
                value={endDate}
                onChange={(endDate) => setEndDate(endDate)}
                className={classes.datePicker}
              />
              <input
                className={classes.timePicker}
                type="time"
                onChange={onEndChange}
              />
            </div>
            <div>
              <button type="submit" className={classes.button}>
                Save Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
