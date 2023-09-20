import { NavLink } from "react-router-dom";
import Button from "../Buttons/Button";
import "../Navbar/Nav.css";
const Nav = () => {
  return (
    <nav className="py-7 px-32">
      <div className="logo">
        <p className="text-3xl">
          get<span>linked</span>
        </p>
      </div>

      <div className="links text-base">
        <ul className="mr-24">
          <NavLink to="/" activeClassName="active" className="link">Overview</NavLink>
          <NavLink to="/timeline" activeClassName="active" className="link">Timeline</NavLink>
          <NavLink to="/faqs" activeClassName="active" className="link">FAQs</NavLink>
          <NavLink to="/contact" activeClassName="active" className="link">Contact</NavLink>
        </ul>
        <Button name="Register" />
      </div>
    </nav>
  );
};

export default Nav;
