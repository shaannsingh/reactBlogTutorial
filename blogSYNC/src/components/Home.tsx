import { useState } from "react";
import BlogList from "./BlogList";
import { Blog } from "../types";

const HomePage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([
    { title: "hi", body: "This is blog 1", author: "shaan", id: 1 },
    { title: "who am i", body: "This is blog 2", author: "malcolm", id: 2 },
    { title: "what i like", body: "This is blog 3", author: "kanye", id: 3 },
  ]);

  return (
    <div className="homepage">
      <BlogList blogs={blogs} header="all blogs" />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "malcolm")}
        header="malcolm's blogs"
      />
    </div>
  );
};

export default HomePage;
