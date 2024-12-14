import { Blog } from "../types";

interface BlogListProps {
  header: string;
  blogs: Blog[];
}

const BlogList = (props: BlogListProps) => {
  const { blogs, header } = props;

  return (
    <div className="blog-list">
      <h2>{header}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
