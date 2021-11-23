import { useRef } from "react";
import "./NewTask.css";
import useHttp from "../../Hooks/use-Http";

const NewTask = (props) => {
  const taskRef = useRef("");

  const { error, sendRequest: addRequest } = useHttp();

  const submitHandler = async (event) => {
    event.preventDefault();
    const task = taskRef.current.value;

    const applyData = (data) => {
      props.onAddTask({ id: data.name, task: task });
    };

    addRequest(
      {
        url: "https://reactproject-6f524-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        body: { text: task },
        headers: {
          "Content-Type": "application/json",
        },
      },
      applyData
    );
  };
  return (
    <form className='task_new' onSubmit={submitHandler}>
      <input type='text' ref={taskRef}></input>
      <button>Add Task</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default NewTask;
