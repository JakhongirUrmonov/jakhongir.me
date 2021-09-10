import React, { useEffect, useState } from "react";
import Project from "../UI/Project";
import Client from "../../contentful";

function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "jakhongirProjectCategory",
        order: "fields.order",
      });
      let formatedCategory = formatCategoriesData(response.items);
      setCategories(formatedCategory);
    } catch (error) {
      console.log(error);
    }
  };

  const getProjects = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "jakhongirMe",
      });
      let formatedProjects = formatProjectData(response.items);
      setProjects(formatedProjects);
    } catch (error) {
      console.log(error);
    }
  };
  const formatProjectData = (items) => {
    let tempItems = items?.map((item) => {
      let id = item.sys.id;
      let category = item.fields.category.map((i) => i.fields.value);
      let project = {
        ...item.fields,
        id,
        category,
      };
      return project;
    });
    return tempItems;
  };
  const formatCategoriesData = (items) => {
    let tempItems = items?.map((item) => {
      let id = item.sys.id;
      let category = {
        ...item.fields,
        id,
      };
      return category;
    });
    return tempItems;
  };

  useEffect(() => {
    getProjects();
    getCategories();
  }, []);
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="title">
          <h2>Portfolio</h2>
          <p>Here comes less words and more projects</p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="filter-nav">
            {categories?.map((category, id) => (
              <button
                key={id}
                className={
                  filter === category.value
                    ? "filter-button active"
                    : "filter-button"
                }
                onClick={() => setFilter(category.value)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        <div className="row">
          {projects?.map((item) =>
            item.category.includes(filter) ? (
              <Project key={item.id} project={item} />
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
