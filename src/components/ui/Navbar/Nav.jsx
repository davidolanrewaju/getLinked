import { NavLink } from "react-router-dom";
import "../Navbar/Nav.css";
const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <p>
          get<span>linked</span>
        </p>
      </div>

      <div className="links">
        <ul className="pr-40">
          <NavLink to="/" className="link">Overview</NavLink>
          <NavLink to="/timeline" className="link">Timeline</NavLink>
          <NavLink to="/faqs" className="link">FAQs</NavLink>
          <NavLink to="/contact" className="link">Contact</NavLink>
        </ul>
        <button>
          <NavLink to="/register" className="link">Register</NavLink>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
