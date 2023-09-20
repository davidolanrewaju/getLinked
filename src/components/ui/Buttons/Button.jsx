import { NavLink } from "react-router-dom";

const Button = (value) => {
  return (
    <>
      <NavLink to="/register" className="link btn px-11 py-3.5 rounded">
        {value.name}
      </NavLink>
    </>
  );
};

export default Button;
