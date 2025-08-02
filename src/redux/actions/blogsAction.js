import axios from "axios";
const server = import.meta.env.VITE_BACKEND_URL;

import {
  blogRequest,
  fetchBlogsSuccess,
  fetchPublishedBlogsSuccess,
  fetchBlogByIdSuccess,
  blogFail,
  addBlogSuccess,
  updateBlogSuccess,
  deleteBlogSuccess,
  changeBlogStatusSuccess,
} from "../reducers/blogSlice";

// Get all blogs (admin/doctor)
export const getBlogs = () => async (dispatch) => {
  try {
    dispatch(blogRequest());
    const token = localStorage.getItem("Bearer");

    const { data } = await axios.get(`${server}/blogs`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch(fetchBlogsSuccess(data.blogs));
  } catch (error) {
    dispatch(blogFail(error.response?.data?.message || "Failed to fetch blogs"));
  }
};

// Get published blogs (public)
export const getPublishedBlogs = () => async (dispatch) => {
  try {
    dispatch(blogRequest());
    const { data } = await axios.get(`${server}/published-blogs`);
    dispatch(fetchPublishedBlogsSuccess(data.blogs));
  } catch (error) {
    dispatch(blogFail(error.response?.data?.message || "Failed to fetch published blogs"));
  }
};

// Get blog by ID
export const getBlogById = (id) => async (dispatch) => {
  try {
    dispatch(blogRequest());
    const { data } = await axios.get(`${server}/blog/${id}`);
    dispatch(fetchBlogByIdSuccess(data.blog));
  } catch (error) {
    dispatch(blogFail(error.response?.data?.message || "Failed to fetch blog"));
  }
};

// Create blog (with image)
export const createBlog = (formData) => async (dispatch) => {
  try {
    dispatch(blogRequest());
    const token = localStorage.getItem("Bearer");

    const { data } = await axios.post(`${server}/blog`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        // Don't set Content-Type; let Axios handle FormData automatically
      },
    });

    dispatch(addBlogSuccess(data.blog));
    dispatch(getBlogs());
  } catch (error) {
    dispatch(blogFail(error.response?.data?.message || "Failed to create blog"));
  }
};

// Update blog
export const updateBlog = (id, updatedData) => async (dispatch) => {
  try {
    dispatch(blogRequest());
    const token = localStorage.getItem("Bearer");

    const { data } = await axios.put(`${server}/blog/${id}`, updatedData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch(updateBlogSuccess(data.blog));
    dispatch(getBlogs());
  } catch (error) {
    dispatch(blogFail(error.response?.data?.message || "Failed to update blog"));
  }
};

// Change blog status
export const changeBlogStatus = (id, status) => async (dispatch) => {
  try {
    dispatch(blogRequest());
    const token = localStorage.getItem("Bearer");

    const { data } = await axios.put(
      `${server}/blog/${id}/status`,
      { status },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    dispatch(changeBlogStatusSuccess(data.blog));
    dispatch(getBlogs());
  } catch (error) {
    dispatch(blogFail(error.response?.data?.message || "Failed to change blog status"));
  }
};

// Delete blog
export const deleteBlog = (id) => async (dispatch) => {
  try {
    dispatch(blogRequest());
    const token = localStorage.getItem("Bearer");

    const { data } = await axios.delete(`${server}/blog/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch(deleteBlogSuccess(id));
    dispatch(getBlogs());
  } catch (error) {
    dispatch(blogFail(error.response?.data?.message || "Failed to delete blog"));
  }
};
