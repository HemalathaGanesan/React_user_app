import useCounter from "../Hooks/use-counter";

const ForwardCounter = () => {
  const counter = useCounter();
  return <span>{counter}</span>;
};

export default ForwardCounter;
