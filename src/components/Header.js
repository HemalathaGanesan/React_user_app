import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className='header'>
      <nav>
        <ul>
          <li>
            <NavLink to='/welcome'>Welcome</NavLink>
          </li>
          <li>
            <NavLink to='/products'>Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
