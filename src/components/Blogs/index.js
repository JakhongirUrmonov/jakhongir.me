import React from "react";
import Blog from "../UI/Blog";
import Waves from "../UI/Waves";

function Blogs({ blogs }) {
  return (
    <>
      <Waves position="top" />
      <section id="blog" className="blog">
        <div className="title">
          <h2>My blog</h2>
          <p>
            Here comes more words but usefull words from my experience I would
            be happy if my posts makes your life more efficent
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
