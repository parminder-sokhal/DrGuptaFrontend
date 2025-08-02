import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  blogs: [],
  publishedBlogs: [],
  blog: {},
  error: null,
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    blogRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchBlogsSuccess(state, action) {
      state.loading = false;
      state.blogs = action.payload;
    },
    fetchPublishedBlogsSuccess(state, action) {
      state.loading = false;
      state.publishedBlogs = action.payload;
    },
    fetchBlogByIdSuccess(state, action) {
      state.loading = false;
      state.blog = action.payload;
    },
    blogFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    addBlogSuccess(state, action) {
      state.loading = false;
      state.blogs.push(action.payload);
    },
    updateBlogSuccess(state, action) {
      state.loading = false;
      const index = state.blogs.findIndex(b => b._id === action.payload._id);
      if (index !== -1) {
        state.blogs[index] = action.payload;
      }
    },
    changeBlogStatusSuccess(state, action) {
      state.loading = false;
      const index = state.blogs.findIndex(b => b._id === action.payload._id);
      if (index !== -1) {
        state.blogs[index] = action.payload;
      }
    },
    deleteBlogSuccess(state, action) {
      state.loading = false;
      state.blogs = state.blogs.filter(b => b._id !== action.payload);
    },
  },
});

export const {
  blogRequest,
  fetchBlogsSuccess,
  fetchPublishedBlogsSuccess,
  fetchBlogByIdSuccess,
  blogFail,
  addBlogSuccess,
  updateBlogSuccess,
  changeBlogStatusSuccess,
  deleteBlogSuccess,
} = blogSlice.actions;

export default blogSlice.reducer;
