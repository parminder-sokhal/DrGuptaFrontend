// AddBlogs.jsx

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBlogs,
  createBlog,
  deleteBlog,
  updateBlog,
  changeBlogStatus,
} from "../../../redux/actions/blogsAction";
import {
  FaUserPlus,
  FaSearch,
  FaTrash,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import ModalOpenBlog from "./ModalOpenBlog";

function AddBlogs() {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blog);

  const [search, setSearch] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const [expandedRows, setExpandedRows] = useState({});

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  useEffect(() => {
    if (blogs) {
      setFilteredBlogs(
        blogs.filter((blog) =>
          blog.title.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, blogs]);

  const openAddBlogModal = () => {
    setEditingBlog(null);
    setIsModalOpen(true);
  };

  const openEditBlogModal = (blog) => {
    setEditingBlog(blog);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingBlog(null);
    dispatch(getBlogs());
  };

  const handleDelete = (id) => {
    dispatch(deleteBlog(id)).then(() => {
      setConfirmDeleteId(null);
    });
  };

  const handleStatusToggle = (blog) => {
    const newStatus = blog.status === "published" ? "draft" : "published";
    dispatch(changeBlogStatus(blog._id, newStatus));
  };

  const toggleRowExpand = (id) => {
    setExpandedRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="p-4 mt-10">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold">Blog List</h1>
          <p className="text-gray-500 text-sm">Manage all blogs</p>
        </div>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2"
          onClick={openAddBlogModal}
        >
          <FaUserPlus /> Add Blog
        </button>
      </div>

      <div className="mb-4 w-full md:w-1/3 relative">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search by title"
          className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2">Title</th>
              <th className="p-2">Subtitle</th>
              <th className="p-2">Status</th>
              <th className="p-2">Created</th>
              <th className="p-2">Actions</th>
              <th className="p-2">View</th>
            </tr>
          </thead>
          <tbody>
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog) => (
                <React.Fragment key={blog._id}>
                  <tr className="border-t border-gray-300">
                    <td className="p-2">{blog.title}</td>
                    <td className="p-2">{blog.subTitle}</td>
                    
                    <td className="p-2 ">
                      <button
                        onClick={() => handleStatusToggle(blog)}
                        className={`px-3 py-1 text-xs font-semibold rounded-full border transition duration-300 ${
                          blog.status === "published"
                            ? "bg-green-600 text-white border-green-500 hover:bg-green-500"
                            : "bg-yellow-500 text-white border-yellow-400 hover:bg-yellow-400"
                        }`}
                      >
                        {blog.status}
                      </button>
                    </td>
                    <td className="p-2 ">
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </td>
                    <td className="p-2">
                      <button
                        onClick={() => openEditBlogModal(blog)}
                        className="text-blue-600 hover:text-blue-800 transition p-1"
                        title="Edit"
                      >
                        <MdEdit size={20} />
                      </button>
                      <button
                        onClick={() => setConfirmDeleteId(blog._id)}
                        className="text-red-600 hover:text-red-800 transition"
                        title="Delete"
                      >
                        <FaTrash size={18} />
                      </button>
                    </td>
                    <td className="p-2">
                      <button
                        onClick={() => toggleRowExpand(blog._id)}
                        className="text-blue-600 hover:text-blue-800"
                        title="View Details"
                      >
                        {expandedRows[blog._id] ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </td>
                  </tr>

                  {expandedRows[blog._id] && (
                    <tr>
                      <td colSpan="7" className="p-4 bg-gray-50 border-t">
                        <div className="flex flex-col md:flex-row gap-4">
                          {blog.image && (
                            <img
                              src={blog.image.url}
                              alt="Blog Visual"
                              className="w-40 h-40 object-cover border rounded"
                            />
                          )}

                          <div className="flex-1 space-y-4">
                            {Array.isArray(blog.content) &&
                              blog.content.map((section, idx) => (
                                <div
                                  key={idx}
                                  className="bg-white border rounded p-3 shadow-sm"
                                >
                                  <h4 className="font-bold text-lg text-gray-800">
                                    {section.sectionTitle}
                                  </h4>
                                  <p className="text-sm text-gray-600 mt-1 mb-2">
                                    {section.paragraph}
                                  </p>
                                  <ul className="list-disc list-inside text-sm text-gray-700">
                                    {section.bulletPoints?.map((point, i) => (
                                      <li key={i}>{point}</li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="p-4 text-center text-gray-500">
                  No blogs found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <ModalOpenBlog
          open={isModalOpen}
          onClose={handleCloseModal}
          blog={editingBlog}
          isEditing={!!editingBlog}
        />
      )}

      {/* Confirm Delete Dialog */}
      {confirmDeleteId && (
        <div className="fixed inset-0 backdrop-blur-sm bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="font-bold text-lg mb-2">Confirm Delete</h2>
            <p className="mb-4">Are you sure you want to delete this blog?</p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => handleDelete(confirmDeleteId)}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
              <button
                onClick={() => setConfirmDeleteId(null)}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddBlogs;
