import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [author, setAuthor] = useState<string>("");

  return (
    <div className="create">
      <h2>Create a New Blog</h2>
      <form>
        <label>Blog Title:</label>
        <input
          placeholder="Add your title here"
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body:</label>
        <textarea
          placeholder="Write your blog here"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label>Blog author:</label>
        <select
          title="Author name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Mario">Mario</option>
          <option value="Luigi">Luigi</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
