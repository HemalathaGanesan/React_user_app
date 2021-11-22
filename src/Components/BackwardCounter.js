import useCounter from "../Hooks/use-counter";

const BackwardCounter = () => {
  const counter = useCounter(false);
  return <span>{counter}</span>;
};

export default BackwardCounter;
