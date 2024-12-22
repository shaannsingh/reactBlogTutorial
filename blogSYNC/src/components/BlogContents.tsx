import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Blog } from "../types";

const BlogContents = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch<Blog>("http://localhost:8000/blogs/" + id);

  return (
    <div className="blog-details">
      <h2>{isPending && <div>Loading...</div>}</h2>
      <h2>{error && <div>{error}</div>}</h2>
      <h2>
        {blog && (
          <article>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <div>{blog.body}</div>
          </article>
        )}
      </h2>
    </div>
  );
};

export default BlogContents;
