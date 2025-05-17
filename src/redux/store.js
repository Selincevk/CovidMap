import { configureStore } from "@reduxjs/toolkit";
import covidReducer from "../redux/covidSlice"

export default configureStore({ reducer : covidReducer})

