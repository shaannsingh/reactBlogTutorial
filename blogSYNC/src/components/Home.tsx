import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import { Blog } from "../types";

const HomePage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isPending, setIsPending] = useState<boolean>(true);

  const handleDelete = (id: number) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, 1000);
  }, []);

  return (
    <div className="homepage">
      {isPending && <div>Loading...</div>}
      {blogs && (
        <BlogList blogs={blogs} heading="All" handleDelete={handleDelete} />
      )}
    </div>
  );
};

export default HomePage;
