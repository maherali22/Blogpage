import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBlog } from "./Blogslice";
import { useNavigate } from "react-router-dom";

function CreatePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSave = () => {
    dispatch(
      addBlog({
        id: Date.now(),
        title,
        content,
      })
    );
    navigate("/");
  };

  return (
    <div>
      <h1>Create Blog</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        id="text"
        style={{ display: "block", marginLeft: "600px", paddingRight: "30px" }}
      />

      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ display: "block", marginLeft: "500px", padding: "100px" }}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default CreatePage;
