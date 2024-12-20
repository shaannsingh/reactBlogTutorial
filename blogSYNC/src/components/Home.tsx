import BlogList from "./BlogList";
import useFetch from "../hooks/useFetch";

const HomePage = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="homepage">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} heading="All" />}
    </div>
  );
};

export default HomePage;
