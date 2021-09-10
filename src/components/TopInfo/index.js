import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import CustomButton from "../UI/CustomButton";
import { Link } from "react-router-dom";

function TopInfo({ blogs }) {
  return (
    <section className="top-info">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-6 col-sm-12">
            <h2>Hello, I am</h2>
            <h1>
              <span> Urmonov</span> Jakhongir
            </h1>
            <h3>Web developer</h3>
            <p>
              Maybe I am not the best programmer of the world but I am good
              programmer with the great habits.
            </p>
            <CustomButton mail={false} text="See my resume" />
            <CustomButton mail={true} text="Write me" white={true} />
          </div>
          <div className="slider col-md-6">
            <Splide
              options={{
                direction: "ttb",
                height: "300px",
                arrows: false,
              }}
            >
              {blogs.map((blog) =>
                blog.slider ? (
                  <SplideSlide key={blog.id}>
                    <Link to={"/blog/" + blog.id}>
                      <img
                        src={blog.smallImage.fields.file.url}
                        alt="blog title 1"
                      />
                    </Link>
                  </SplideSlide>
                ) : (
                  ""
                )
              )}
            </Splide>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopInfo;
