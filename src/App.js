import { useState,Fragment } from "react";
import UserInput from "./Components/UserInput";
import UserList from "./Components/UserList";
function App() {
  const [users, setUsersState] = useState([]);

  const addUserHandler = (userObj) => {
    setUsersState((prevState) => {
      return [
        ...prevState,
        { name: userObj.username, age: userObj.age, id: Math.random().toString() },
      ];
    });
    console.log(users)
  };
  return (
    <Fragment>
      <UserInput onAddUser={addUserHandler} />
      <UserList userlist={users}/>
    </Fragment>
  );
}

export default App;
