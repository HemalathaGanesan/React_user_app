import { useState } from "react";
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
    <div>
      <UserInput onAddUser={addUserHandler} />
      <UserList userlist={users}/>
    </div>
  );
}

export default App;
