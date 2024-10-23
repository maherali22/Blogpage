import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectBlog } from "./Blogslice";

function Home() {
  const blogs = useSelector((state) => state.blog.blogs);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Blog List</h1>
      <Link to="/create">
        <button>Create</button>
      </Link>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id} style={{ listStyleType: "none" }}>
            <Link to={"/blog"} onClick={() => dispatch(selectBlog(blog.id))}>
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
