import { configureStore } from "@reduxjs/toolkit";
import doctorSlice from "./reducers/doctorSlice.js";
import appointmentSlice from "./reducers/appointmentSlice.js";
import userSlice from "./reducers/userSlice.js";
import paymentSlice from "./reducers/paymentSlice.js";
import linksSlice from "./reducers/linksSlice.js";
import formSlice from "./reducers/formSlice.js";
import blogsclice from "./reducers/blogSlice.js";

const store = configureStore({
  reducer: {
    doctor: doctorSlice,
    appointment: appointmentSlice,
    user: userSlice,
    payment: paymentSlice,
    links: linksSlice,
    form: formSlice,
    blog: blogsclice,
  },
});

export default store;
