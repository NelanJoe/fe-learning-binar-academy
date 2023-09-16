import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1.2rem",
          marginBottom: "2rem",
        }}
      >
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              textDecoration: isActive ? "underline" : "",
              color: isActive ? "pink" : "grey",
            };
          }}
        >
          Home
        </NavLink>
        <div>
          <NavLink
            style={({ isActive }) => {
              return {
                textDecoration: isActive ? "underline" : "",
                color: isActive ? "pink" : "grey",
              };
            }}
            to="/comparison"
          >
            Comparison
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
