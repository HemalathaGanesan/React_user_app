import { useState, useEffect, Fragment } from "react";
import ForwardCounter from "./Components/ForwardCounter";
import BackwardCounter from "./Components/BackwardCounter";
import "./Components/counter.css";
import NewTask from "./Components/NewTask/NewTask";
import Task from "./Components/Task/Task";
import useHttp from "./Hooks/use-Http";
import SimpleInput from "./Components/Form/SimpleInput";

function App() {
  const [tasks, setTask] = useState([]);
  const { error, sendRequest } = useHttp();

  // useEffect(() => {
  //   const transformData = (taskObj) => {
  //     console.log(taskObj);
  //     let taskList = [];
  //     for (const key in taskObj) {
  //       taskList.push({
  //         id: key,
  //         task: taskObj[key].text,
  //       });
  //     }
  //     setTask(taskList);
  //   };
  //   sendRequest(
  //     {
  //       url: "https://reactproject-6f524-default-rtdb.firebaseio.com/tasks.json",
  //     },
  //     transformData
  //   );
  // }, [sendRequest]);

  // const addTaskHandler = (task) => {
  //   setTask((pretask) => pretask.concat(task));
  // };

  return (
    <Fragment>
      {/* <div className='counter'>
        <ForwardCounter />
      </div>
      <div className='counter'>
        <BackwardCounter />
      </div>
      <div>
        <NewTask onAddTask={addTaskHandler} />
      </div>
      <div>
        <Task tasks={tasks} />
      </div> */}

      <SimpleInput />
    </Fragment>
  );
}

export default App;
