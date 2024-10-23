import React from "react";
import { useSelector } from "react-redux";

function DetailPage() {
  const detailBlog = useSelector((state) => state.blog.detailBlog);

  return (
    <div>
      <h1>{detailBlog.title}</h1>
      <p>{detailBlog.content}</p>
    </div>
  );
}

export default DetailPage;
