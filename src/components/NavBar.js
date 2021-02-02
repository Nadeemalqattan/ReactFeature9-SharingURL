// Styling
import { ThemeButton, Logo, NavProduct } from "../styles";

import logo from "./images/dark-logo.png";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand">
      <NavProduct className="navbar-brand" to="/">
        <Logo src={logo} alt="logo" />
      </NavProduct>
      <div className="navbar-nav ml-auto">
        <NavProduct
          to="/"
          className="nav-item"
          style={{ padding: "0.25em 1em" }}
        >
          Home
        </NavProduct>
        <NavProduct
          to="/products"
          className="nav-item"
          style={{ padding: "0.25em 1em" }}
        >
          Products
        </NavProduct>

        <ThemeButton className="nav-item" onClick={props.toggleTheme}>
          {props.currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </div>
    </nav>
  );
};

export default NavBar;
