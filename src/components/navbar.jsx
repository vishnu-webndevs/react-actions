import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Web & Devs</div>
      <ul className="navbar-menu">
        <li><Link to="/">Home</Link></li>
        <li><a href="#services">Services</a></li>
        <li><Link to="/about">About</Link></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};
export default Navbar;