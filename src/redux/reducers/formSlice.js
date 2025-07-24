import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  forms: [],
  form: {},
  error: null,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    formRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchFormsSuccess(state, action) {
      state.loading = false;
      state.forms = action.payload;
    },
    getFormByIdSuccess(state, action) {
      state.loading = false;
      state.form = action.payload;
    },
    formFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    addForm(state, action) {
      state.loading = false;
      state.forms.push(action.payload);
    },
    updateFormSuccess(state, action) {
      state.loading = false;
      const index = state.forms.findIndex((form) => form._id === action.payload._id);
      if (index !== -1) {
        state.forms[index] = action.payload;
      }
    },
    deleteFormSuccess(state, action) {
      state.loading = false;
      state.forms = state.forms.filter((form) => form._id !== action.payload);
    },
  },
});

export const {
  formRequest,
  fetchFormsSuccess,
  getFormByIdSuccess,
  formFail,
  addForm,
  updateFormSuccess,
  deleteFormSuccess,
} = formSlice.actions;

export default formSlice.reducer;
