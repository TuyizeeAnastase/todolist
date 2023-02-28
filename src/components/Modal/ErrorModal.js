import classes from "../../styles/errorModel.module.css"

const ErrorModal = (props) => {
    return (
      <div>
        <div className={classes.backdrop} onClick={props.confirmModal} />
        <div className={classes.modal}>
          <header className={classes.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={classes.content}>
            <p>{props.message}</p>
          </div>
          <footer className={classes.actions}>
            <button onClick={props.confirmModal}>Okay</button>
          </footer>
        </div>
      </div>
    );
  };
  
  export default ErrorModal;