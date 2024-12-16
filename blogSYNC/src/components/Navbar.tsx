const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Blog</h1>
      <div className="links">
        <a href="/" className="home-link">
          Home
        </a>
        <a href="/create" className="new-blog-link">
          New
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
