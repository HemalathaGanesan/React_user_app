import "./Task.css";

const Task = (props) => {
  const task = props.tasks.map((task) => {
    return <li key={task.id}> {task.task}</li>;
  });
  return <ul className='task_list'>{task}</ul>;
};

export default Task;
