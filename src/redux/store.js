import { configureStore } from "@reduxjs/toolkit";
import covidReducer from "../redux/covidSlice";

export default configureStore({
  reducer: {
    covid: covidReducer, // state.covid erişimini sağlar
  },
});
