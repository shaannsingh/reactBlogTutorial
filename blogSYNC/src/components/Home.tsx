import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import { Blog } from "../types";

const HomePage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([
    { title: "Hi", body: "This is blog 1", author: "Shaan", id: 1 },
    { title: "Who Am I", body: "This is blog 2", author: "Malcolm", id: 2 },
    { title: "What I Like", body: "This is blog 3", author: "Kanye", id: 3 },
  ]);

  const handleDelete = (id: number) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="homepage">
      <BlogList blogs={blogs} heading="All" handleDelete={handleDelete} />
    </div>
  );
};

export default HomePage;
