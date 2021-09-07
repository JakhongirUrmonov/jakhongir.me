import React from "react";
import { Link } from "react-router-dom";

function Blog({ blog }) {
  return (
    <div className="col-md-4" data-aos="fade-up">
      <Link to={"/blog/" + blog.id} className="blog-img">
        <img src={blog.smallImage.fields.file.url} alt="" />
        <span>{new Date(blog.createdAt).toDateString()}</span>
      </Link>
      <div className="blog-text">
        <h3>
          <Link to={"/blog/" + blog.id}>{blog.title} </Link>
        </h3>
        <p>{blog.shortInfo}</p>
        <Link to={"/blog/" + blog.id}>Read more </Link>
      </div>
    </div>
  );
}

export default Blog;
