import { Blog } from "../types";
import { Trash2 } from "lucide-react";

interface BlogListProps {
  blogs: Blog[];
  heading: string;
  handleDelete: (id: number) => void;
}

const BlogList = ({ blogs, heading, handleDelete }: BlogListProps) => {
  return (
    <div className="blog-list">
      <h2>{heading}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>by {blog.author}</p>
          <button
            onClick={() => handleDelete(blog.id)}
            aria-label={`Delete ${blog.title} blog`}
          >
            <Trash2 size={12} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
