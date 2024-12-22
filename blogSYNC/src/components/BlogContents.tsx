import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Blog } from "../types";
import { Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BlogContents = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch<Blog>("http://localhost:8000/blogs/" + id);
  const navigate = useNavigate();

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + blog?.id, {
      method: "DELETE",
    })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

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
            <button
              aria-label={`Delete ${blog.title} blog`}
              onClick={handleDelete}
            >
              <Trash2 size={13} />
            </button>
          </article>
        )}
      </h2>
    </div>
  );
};

export default BlogContents;
