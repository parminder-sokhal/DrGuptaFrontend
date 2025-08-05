import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createBlog, updateBlog } from "../../../redux/actions/blogsAction";
import { FaTimes } from "react-icons/fa";
import Select from "react-select";

const statusOptions = [
  { value: "published", label: "Published" },
  { value: "draft", label: "Draft" },
];

function ModalOpenBlog({ open, onClose, blog, isEditing }) {
  const dispatch = useDispatch();
  const [previewImage, setPreviewImage] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    subTitle: "",
    status: "draft",
    content: [
      {
        sectionTitle: "",
        paragraph: "",
        bulletPoints: [""],
      },
    ],
    file: null,
  });

  useEffect(() => {
    if (blog && isEditing) {
      const safeContent =
        blog.content?.map((section) => ({
          sectionTitle: section.sectionTitle || "",
          paragraph: section.paragraph || "",
          bulletPoints: Array.isArray(section.bulletPoints)
            ? section.bulletPoints
            : [""],
        })) || [];

      setFormData({
        title: blog.title || "",
        subTitle: blog.subTitle || "",
        status: blog.status || "draft",
        content: safeContent,
        file: null,
      });

      if (blog.image) {
        setPreviewImage(blog.image.url);
      }
    }
  }, [blog, isEditing]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      const file = files[0];
      if (file) {
        setFormData({ ...formData, file });
        setPreviewImage(URL.createObjectURL(file));
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleStatusChange = (selected) => {
    setFormData({ ...formData, status: selected.value });
  };

  const handleSectionChange = (index, field, value) => {
    const updatedContent = [...formData.content];
    updatedContent[index][field] = value;
    setFormData({ ...formData, content: updatedContent });
  };

  const handleBulletPointChange = (sectionIndex, bulletIndex, value) => {
    const updatedContent = formData.content.map((section, i) => {
      if (i !== sectionIndex) return section;

      const updatedBulletPoints = [...section.bulletPoints];
      updatedBulletPoints[bulletIndex] = value;

      return {
        ...section,
        bulletPoints: updatedBulletPoints,
      };
    });

    setFormData({ ...formData, content: updatedContent });
  };

  const addBulletPoint = (sectionIndex) => {
    const updatedContent = [...formData.content];
    updatedContent[sectionIndex].bulletPoints.push("");
    setFormData({ ...formData, content: updatedContent });
  };

  const removeBulletPoint = (sectionIndex, bulletIndex) => {
    const updatedContent = formData.content.map((section, i) => {
      if (i !== sectionIndex) return section;

      const updatedBulletPoints = section.bulletPoints.filter(
        (_, idx) => idx !== bulletIndex
      );

      return {
        ...section,
        bulletPoints: updatedBulletPoints.length ? updatedBulletPoints : [""],
      };
    });

    setFormData({ ...formData, content: updatedContent });
  };

  const addSection = () => {
    setFormData({
      ...formData,
      content: [
        ...formData.content,
        { sectionTitle: "", paragraph: "", bulletPoints: [""] },
      ],
    });
  };

  const removeSection = (index) => {
    const updatedContent = [...formData.content];
    updatedContent.splice(index, 1);
    setFormData({ ...formData, content: updatedContent });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("subTitle", formData.subTitle);
    data.append("status", formData.status);
    data.append("content", JSON.stringify(formData.content));
    if (formData.file) data.append("file", formData.file);

    if (isEditing) {
      dispatch(updateBlog(blog._id, data)).then(onClose);
    } else {
      dispatch(createBlog(data)).then(onClose);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 backdrop-blur-sm bg-opacity-30 flex justify-center items-center p-4">
      <div className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-lg shadow-lg relative">
        <div className="sticky top-0 z-10 bg-white p-4 border-b">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-blue-600"
          >
            <FaTimes />
          </button>
          <h2 className="text-xl font-bold">
            {isEditing ? "Edit Blog" : "Add Blog"}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 p-4">
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Blog Title"
            value={formData.title}
            onChange={handleChange}
            required
            className="border p-2 rounded"
          />
          <label className="block mb-1 font-medium">Subtitle</label>
          <input
            type="text"
            name="subTitle"
            placeholder="Sub Title"
            value={formData.subTitle}
            onChange={handleChange}
            required
            className="border p-2 rounded"
          />

          <div>
            <label className="block mb-1 font-medium">Upload Image</label>
            <span className="text-sm text-gray-500">
              Recommended image format: JPG, PNG, or GIF. Maximum file size:-
              <b>less than 1MB</b>
            </span>
            <input
              type="file"
              name="file"
              accept="image/*"
              onChange={handleChange}
              className="w-full text-blue-700"
            />
            {previewImage && (
              <div className="mt-2 relative w-32 h-32">
                <img
                  src={previewImage}
                  alt="Preview"
                  className="w-full h-full object-cover border rounded"
                />
                <button
                  type="button"
                  onClick={() => {
                    setPreviewImage(null);
                    setFormData({ ...formData, file: null });
                  }}
                  className="absolute top-0 right-0 text-white bg-blue-600 w-6 h-6 rounded-full flex justify-center items-center"
                >
                  &times;
                </button>
              </div>
            )}
          </div>

          <div>
            <label className="text-lg font-semibold">Content Sections</label>
            {formData.content.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className="border rounded p-4 mb-4 bg-gray-50"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold">Section {sectionIndex + 1}</h3>
                  {formData.content.length > 1 && (
                    <button
                      type="button"
                      className="text-red-500"
                      onClick={() => removeSection(sectionIndex)}
                    >
                      Remove Section
                    </button>
                  )}
                </div>

                <input
                  type="text"
                  placeholder="Section Title"
                  value={section.sectionTitle}
                  onChange={(e) =>
                    handleSectionChange(
                      sectionIndex,
                      "sectionTitle",
                      e.target.value
                    )
                  }
                  className="border p-2 w-full mb-2 rounded"
                />

                <textarea
                  placeholder="Paragraph"
                  value={section.paragraph}
                  onChange={(e) =>
                    handleSectionChange(
                      sectionIndex,
                      "paragraph",
                      e.target.value
                    )
                  }
                  rows={3}
                  className="border p-2 w-full mb-2 rounded"
                />

                <label className="font-medium">Bullet Points</label>
                {section.bulletPoints.map((point, bulletIndex) => (
                  <div key={bulletIndex} className="flex gap-2 mb-1">
                    <input
                      type="text"
                      value={point}
                      onChange={(e) =>
                        handleBulletPointChange(
                          sectionIndex,
                          bulletIndex,
                          e.target.value
                        )
                      }
                      className="border p-2 rounded w-full"
                    />
                    {section.bulletPoints.length > 1 && (
                      <button
                        type="button"
                        className="text-red-500"
                        onClick={() =>
                          removeBulletPoint(sectionIndex, bulletIndex)
                        }
                      >
                        &times;
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  className="text-sm text-blue-600 mt-2"
                  onClick={() => addBulletPoint(sectionIndex)}
                >
                  + Add Bullet Point
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addSection}
              className="text-blue-600 mt-2"
            >
              + Add Section
            </button>
          </div>

          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              {isEditing ? "Update Blog" : "Create Blog"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalOpenBlog;
