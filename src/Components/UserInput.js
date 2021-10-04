import { useState } from "react";
import "./UserInput.css";
import ErrorModal from "./ErrorModal";

const UserInput = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [isError, setError] = useState();

  const userNameHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({ title: "invalid error", message: "enter user name and age" });
      return;
    }

    if (age < 1) {
      setError({ title: "invalid error", message: "age greater than>0" });
      return;
    }

    const userObj = {
      username: username,
      age: age,
    };

    props.onAddUser(userObj);
    setUsername("");
    setAge("");
  };

  const errorHandler = () => {
    setError(false);
  };

  return (
    <div>
      {isError ? (
        <ErrorModal
          title={isError.title}
          message={isError.message}
          onClickProps={errorHandler}
        />
      ) : (
        <form className="userInput" onSubmit={submitHandler}>
          <div className="userControl">
            <label>UserName</label>
            <input type="text" value={username} onChange={userNameHandler} />
          </div>
          <div className="userControl">
            <label>Age(Years)</label>
            <input type="number" value={age} onChange={ageHandler} />
          </div>
          <div className="addUser">
            <button type="submit">AddUser</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default UserInput;
