import React, { useEffect, useState } from "react";
import AboutMe from "../../AboutMe";
import Blogs from "../../Blogs";
import Portfolio from "../../Portfolio";
import TopInfo from "../../TopInfo";
import Client from "../../../contentful";

function Home() {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "jakhongirBlog",
      });
      let formatedBlogData = formatBlogData(response.items);
      setBlogs(formatedBlogData);
    } catch (error) {
      console.log(error);
    }
  };
  const formatBlogData = (items) => {
    let tempItems = items?.map((item) => {
      let id = item.sys.id;
      let createdAt = item.sys.createdAt;
      let blog = {
        ...item.fields,
        id,
        createdAt,
      };
      return blog;
    });
    return tempItems;
  };
  useEffect(() => {
    getBlogs();
  }, []);
  return (
    <>
      <TopInfo blogs={blogs} />
      <AboutMe />
      <Portfolio />
      <Blogs blogs={blogs} />
    </>
  );
}

export default Home;
