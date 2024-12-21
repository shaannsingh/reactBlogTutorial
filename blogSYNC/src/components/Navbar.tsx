import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Blog</h1>
      <div className="links">
        <Link to="/" className="home-link">
          Home
        </Link>
        <Link to="/create" className="new-blog-link">
          New
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
