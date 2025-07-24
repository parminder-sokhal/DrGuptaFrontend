import axios from "axios";
import {
  formRequest,
  fetchFormsSuccess,
  formFail,
  addForm,
  getFormByIdSuccess,
  updateFormSuccess,
  deleteFormSuccess,
} from "../reducers/formSlice";

const server = import.meta.env.VITE_BACKEND_URL;

// Get all forms
export const getForms = () => async (dispatch) => {
  try {
    dispatch(formRequest());
    const { data } = await axios.get(`${server}/forms`);
    dispatch(fetchFormsSuccess(data.forms));
  } catch (error) {
    dispatch(formFail(error.response?.data?.message || "Failed to fetch forms"));
  }
};

// Get form by ID
export const getFormById = (id) => async (dispatch) => {
  try {
    dispatch(formRequest());
    const { data } = await axios.get(`${server}/form/${id}`);
    dispatch(getFormByIdSuccess(data.form));
  } catch (error) {
    dispatch(formFail(error.response?.data?.message || "Failed to fetch form"));
  }
};

// Create new form
export const createForm = (formData) => async (dispatch) => {
  try {
    dispatch(formRequest());
    const { data } = await axios.post(`${server}/form`, formData);
    dispatch(addForm(data.form));
    dispatch(getForms());
  } catch (error) {
    dispatch(formFail(error.response?.data?.message || "Failed to create form"));
  }
};

// Update form
export const updateForm = (id, updatedData) => async (dispatch) => {
  try {
    dispatch(formRequest());
    const { data } = await axios.put(`${server}/form/${id}`, updatedData);
    dispatch(updateFormSuccess(data.form));
    dispatch(getForms());
  } catch (error) {
    dispatch(formFail(error.response?.data?.message || "Failed to update form"));
  }
};

// Delete form
export const deleteForm = (id) => async (dispatch) => {
  try {
    dispatch(formRequest());
    await axios.delete(`${server}/form/${id}`);
    dispatch(deleteFormSuccess(id));
    dispatch(getForms());
  } catch (error) {
    dispatch(formFail(error.response?.data?.message || "Failed to delete form"));
  }
};
