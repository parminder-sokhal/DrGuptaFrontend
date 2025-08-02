import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBlogById } from "../../redux/actions/blogsAction";
import { useDispatch, useSelector } from "react-redux";

const SingleBlog = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { blog, loading, error } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getBlogById(id));
  }, [dispatch, id]);

  if (loading) return <p className="text-center mt-10">Loading blog...</p>;
  if (error) return <p className="text-center text-red-600 mt-10">{error}</p>;

  return (
    <div className="mt-25 px-5 py-10 sm:px-10 md:px-20 lg:px-40 ">
      {/* Blog Image */}
      <div className="w-full flex justify-center ">
        <img
          src={blog?.image?.url || "/img/blog.jfif"}
          alt={blog?.title || "Blog Image"}
          className="w-full max-h-[500px] object-contain"
        />
      </div>

      {/* Blog Title & Subtitle */}
      <div className="mt-8 text-start">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-800">
          {blog?.title}
        </h1>
        <p className="text-gray-600 text-lg mt-2">{blog?.subTitle}</p>
      </div>

      {/* Blog Content */}
      <div className="mt-10 space-y-10">
        {blog?.content?.map((section, index) => (
          <div key={index}>
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              {section.sectionTitle}
            </h2>
            <p className="text-gray-800 text-md mb-2">{section.paragraph}</p>
            {section.bulletPoints?.length > 0 && (
              <ul className="list-disc ml-5 text-gray-700 space-y-1">
                {section.bulletPoints.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Tags or Additional Info */}
      <div className="mt-12 border-t pt-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {blog?.tags?.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full"
            >
              {tag.replace(/[\[\]"]/g, "")}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
