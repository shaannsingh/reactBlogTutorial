const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>blog</h1>
      <div className="links">
        <a href="/">home</a>
        <a
          href="/create"
          style={{
            color: "white",
            backgroundColor: "#42a8c9",
            borderRadius: "8px",
          }}
        >
          new
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
