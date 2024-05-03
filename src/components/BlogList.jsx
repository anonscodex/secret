import React, { useState } from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
  const [expandedIds, setExpandedIds] = useState([]);

  const toggleExpand = (id) => {
    if (expandedIds.includes(id)) {
      setExpandedIds(expandedIds.filter((itemId) => itemId !== id));
    } else {
      setExpandedIds([...expandedIds, id]);
    }
  };

  return (
    <div className="container sm:m-10">
      {blogs.map((blog) => (
        <div className="p-10 rounded-lg shadow-md" key={blog.id}>
          <Link to={`/secret/${blog.id}`}>
            <h2 className="text-2xl font-bold text-white mb-2">{blog.title}</h2>
            <p className="text-base text-neutral-500 leading-relaxed">
              {expandedIds.includes(blog.id)
                ? blog.content
                : `${blog.content.slice(0, 100)}...`}
            </p>
            {blog.content.length > 100 && (
              <button className="text-my-logo-color" onClick={() => toggleExpand(blog.id)}>
                {expandedIds.includes(blog.id) ? "Read Less" : "Read More"}
              </button>
            )}
            <h6 className="text-neutral-700 float-right">posted on {blog.setDate}</h6>
            
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
