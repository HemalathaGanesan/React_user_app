import "./Home.css";

const Home = (props) => {
  const logout = () => {
    props.onLogout();
  };

  return (
    <div className='container'>
      <div className='header'>
        <h2>A Typical Page</h2>
        <ul>
          <li>
            <a href='/'>Users</a>
          </li>
          <li>
            <a href='/'>Admin</a>
          </li>
          <li>
            <button className='home-button' onClick={logout}>
              Logout
            </button>
          </li>
        </ul>
      </div>
      <div className='welcome-modal'>
        <h1>Welcome back..!</h1>
      </div>
    </div>
  );
};
export default Home;
