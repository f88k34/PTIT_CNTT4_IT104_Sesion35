import { configureStore } from "@reduxjs/toolkit";
import couterSlice from "../store/slice/couterSlide";
import random from "../store/slice/randomSide";
import themeReducer from "../store/slice/backgroudSlide";
import viewReducer from "../store/slice/viewSlide";
import menuReducer from "../store/slice/menuSlide";
import languageReducer from "../store/slice/language";
import userReducer from "../store/slice/userSlide";
export const store = configureStore({
  reducer: {
    couterSlice,
    random,
    theme: themeReducer,
    view: viewReducer,
    menu: menuReducer,
    language: languageReducer,
    user: userReducer
  },
});
