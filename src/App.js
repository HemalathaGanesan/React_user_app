import React, { useState, useEffect, Fragment } from "react";
import UserInput from "./Components/UserInput";
import UserList from "./Components/UserList";
import LoginPage from "./Components/Login/LoginPage";
import Home from "./Components/Home/Home";
import AuthContext from "./Components/store/auth-context";
function App() {
  //.........USER PAGE CODES
  //   const [users, setUsersState] = useState([]);
  //   const addUserHandler = (userObj) => {
  //     setUsersState((prevState) => {
  //       return [
  //         ...prevState,
  //         {
  //           name: userObj.username,
  //           age: userObj.age,
  //           id: Math.random().toString(),
  //         },
  //       ];
  //     });
  //     console.log(users);
  //   };
  //   return (
  //     <Fragment>
  //        <UserInput onAddUser={addUserHandler} />
  //       <UserList userlist={users}/>
  //     </Fragment>
  //   );

  ///.......LOGIN PAGE CODES ARE BELOW
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const getStoredLoggedInfo = localStorage.getItem("loggedIn");
    if (getStoredLoggedInfo === "1") setIsLoggedIn(1);
  }, []);

  const loginHandler = (props) => {
    if (props != null) setIsLoggedIn(true);

    localStorage.setItem("loggedIn", "1");
  };

  const logoutHandler = () => {
    localStorage.removeItem("loggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn }}>
      {!isLoggedIn && <LoginPage onLogin={loginHandler} />}
      {isLoggedIn && <Home onLogout={logoutHandler} />}
    </AuthContext.Provider>
  );
}

export default App;
