import { useContext } from "react";
import AuthContext from "../store/auth-context";
import "./Home.css";

const Home = (props) => {
  const logout = () => {
    props.onLogout();
  };
  const ctx = useContext(AuthContext);

  return (
    <div className='container'>
      <div className='header'>
        <h2>A Typical Page</h2>
        <ul>
          {ctx.isLoggedIn && (
            <li>
              <a href='/'>Users</a>
            </li>
          )}
          {ctx.isLoggedIn && (
            <li>
              <a href='/'>Admin</a>
            </li>
          )}
          {ctx.isLoggedIn && (
            <li>
              <button className='home-button' onClick={logout}>
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
      <div className='welcome-modal'>
        <h1>Welcome back..!</h1>
      </div>
    </div>
  );
};
export default Home;
