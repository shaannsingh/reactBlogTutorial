import { Link } from "react-router-dom";
import { Blog } from "../types";
import { Trash2 } from "lucide-react";

interface BlogListProps {
  blogs: Blog[];
  heading: string;
}

const BlogList = ({ blogs, heading }: BlogListProps) => {
  return (
    <div className="blog-list">
      <h2>{heading}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>by {blog.author}</p>
          </Link>
          <button aria-label={`Delete ${blog.title} blog`}>
            <Trash2 size={12} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
