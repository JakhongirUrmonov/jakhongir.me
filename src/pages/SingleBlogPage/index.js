import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Client from "../../contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

function SingleBlogPage() {
  const { blogId } = useParams();
  const [blog, setBlog] = useState();

  const getBlog = async () => {
    try {
      let response = await Client.getEntry(blogId);
      let formatedBlogData = formatBlogData(response);
      setBlog(formatedBlogData);
    } catch (error) {
      console.log(error);
    }
  };
  const formatBlogData = (item) => {
    let blog = {
      ...item.fields,
    };
    return blog;
  };
  useEffect(() => {
    getBlog();
  }, []);
  return blog ? (
    <Container className="single-blog-page">
      <div className="title">
        <h2>{blog.title}</h2>
      </div>
      <Image src={blog?.bigImage.fields.file.url} />
      <div
        className="blog-body"
        dangerouslySetInnerHTML={{
          __html: documentToHtmlString(blog.fullText),
        }}
      />
    </Container>
  ) : (
    ""
  );
}

export default SingleBlogPage;
