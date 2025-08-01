import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPublishedBlogs } from "../../redux/actions/blogsAction";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  const { publishedBlogs, loading, error } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getPublishedBlogs());
  }, [dispatch]);
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredBlogs(publishedBlogs);
    } else {
      const lowerSearch = searchTerm.toLowerCase();
      const filtered = publishedBlogs.filter((blog) =>
        blog.tags?.some((tag) => tag.toLowerCase().includes(lowerSearch))
      );
      setFilteredBlogs(filtered);
    }
  }, [searchTerm, publishedBlogs]);

  return (
    <div className="container mx-auto mt-20 px-6 sm:px-10 md:px-14 lg:px-20 py-10">
      <div className="py-10 flex flex-row items-center justify-between">
        <h1 className="sm:text-7xl text-3xl font-semibold text-blue-600 text-start">
          Blogs
        </h1>
        <input
          type="text"
          placeholder="Search - Asthma, COPD etc."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-1/2 sm:w-1/3 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {loading ? (
        <p className="text-center text-gray-600">Loading blogs...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full"
            >
              <div className="w-full h-52 overflow-hidden">
                <img
                  src={blog.image?.url || "/img/blog.jfif"}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col flex-grow justify-between p-4">
                <div>
                  <h2 className="text-xl font-semibold mb-1">{blog.title}</h2>
                  <p className="text-gray-600 text-sm mb-3">{blog.subTitle}</p>
                </div>

                <button
                  onClick={() => navigate(`/blog/${blog._id}`)}
                  className="mt-4 text-sm py-2 bg-green-500 text-white rounded-sm hover:bg-green-600 transition"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;
