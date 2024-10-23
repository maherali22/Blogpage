import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogs: [],
    detailBlog: "",
  },
  reducers: {
    addBlog: (state, action) => {
      state.blogs.push(action.payload);
    },
    selectBlog: (state, action) => {
      state.detailBlog = state.blogs.find((blog) => blog.id === action.payload);
    },
  },
});

export const { addBlog, selectBlog } = blogSlice.actions;
export default blogSlice.reducer;
