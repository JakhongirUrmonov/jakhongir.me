import React from "react";
import Blog from "../UI/Blog";
import Waves from "../UI/Waves";

function Blogs({ blogs }) {
  return (
    <>
      <Waves id="blog" position="top" />
      <section className="blog">
        <div className="title">
          <h2>My blog</h2>
          <p>
            Vestibulum pretium commodo porttitor. In sit amet vehicula lorem.
            Nulla facilisi. Proin ut neque eget urna ultrices rutrum eu vitae
            enim.
          </p>
        </div>
        <div className="container">
          <div className="row">
            {blogs.map((blog) => (
              <Blog key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </section>
      <Waves />
    </>
  );
}

export default Blogs;
