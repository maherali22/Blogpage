import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "../BlogApp/Blogslice";

const store = configureStore({
  reducer: {
    blog: blogSlice,
  },
});

export default store;
