import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getForms, deleteForm } from "../../../redux/actions/formActions";
import { FaSearch, FaTrash } from "react-icons/fa";
import moment from "moment";

function Forms() {
  const dispatch = useDispatch();
  const { forms, loading } = useSelector((state) => state.form);
  const [search, setSearch] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);

  useEffect(() => {
    dispatch(getForms());
  }, [dispatch]);

  const filteredForms = [...forms]
    .filter((form) => {
      const matchesSearch =
        form.name.toLowerCase().includes(search.toLowerCase()) ||
        form.phone.includes(search);

      // 💡 Date filter: if selectedDate is empty, pass all, else compare form creation date
      const matchesDate =
        !selectedDate ||
        moment(form.createdAt).isSame(moment(selectedDate), "day");

      return matchesSearch && matchesDate;
    })
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // newest first

  const handleDelete = (id) => {
    dispatch(deleteForm(id)).then(() => {
      setConfirmDeleteId(null);
    });
  };

  return (
    <div className="p-4 mt-10">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-4">
        <div>
          <h1 className="text-2xl font-bold">Form Submissions</h1>
          <p className="text-gray-500 text-sm">Manage incoming contact forms</p>
        </div>
        <div className="flex flex-wrap gap-4 items-center">
          <div className="relative w-full md:w-64">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search name or phone"
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <input
            type="date"
            className="border border-gray-300 px-3 py-2 rounded w-full md:w-auto"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading forms...</p>
      ) : filteredForms.length === 0 ? (
        <p className="text-center text-gray-500">No form submissions found</p>
      ) : (
        <table className="w-full border border-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2 w-1/12">#</th>
              <th className="p-2 w-2/12">Name</th>
              <th className="p-2 w-2/12">Phone</th>
              <th className="p-2 w-4/12">Message</th>
              <th className="p-2 w-2/12">Created At</th>
              <th className="p-2 w-1/12">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredForms.map((form, idx) => (
              <tr key={form._id} className="border-t border-gray-300">
                <td className="p-2">{idx + 1}</td>
                <td className="p-2">{form.name}</td>
                <td className="p-2">{form.phone}</td>
                <td className="p-2">{form.message}</td>
                <td className="p-2">{moment(form.createdAt).format("YYYY-MM-DD HH:mm")}</td>
                <td className="p-2">
                  <button
                    onClick={() => setConfirmDeleteId(form._id)}
                    className="text-red-600 hover:text-red-800"
                    title="Delete"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Confirm Delete Modal */}
      {confirmDeleteId && (
        <div className="fixed inset-0 backdrop-blur-sm bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-xs">
            <h2 className="font-bold text-lg mb-2">Confirm Delete</h2>
            <p className="mb-4">Are you sure you want to delete this submission?</p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => handleDelete(confirmDeleteId)}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
              <button
                onClick={() => setConfirmDeleteId(null)}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Forms;
