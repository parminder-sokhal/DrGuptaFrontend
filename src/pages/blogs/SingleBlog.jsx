import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBlogById } from "../../redux/actions/blogsAction";
import { useDispatch, useSelector } from "react-redux";
import { IoMdArrowDropright } from "react-icons/io";

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
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-900">
          {blog?.title}
        </h1>
        <p className="text-gray-700 font-semibold text-xl mt-2">{blog?.subTitle}</p>
      </div>

      {/* Blog Content */}
      <div className="mt-10 space-y-10">
        {blog?.content?.map((section, index) => (
          <div key={index}>
            <h2 className="text-2xl font-semibold text-purple-800 mb-2">
              {section.sectionTitle}
            </h2>
            <p className="text-gray-800 text-lg mb-2">{section.paragraph}</p>
            {Array.isArray(section.bulletPoints) &&
              section.bulletPoints.some((point) => point.trim() !== "") && (
                <div className="space-y-2 ml-1">
                  {section.bulletPoints
                    .filter((point) => point.trim() !== "")
                    .map((point, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-gray-700 text-lg"
                      >
                        <IoMdArrowDropright  className="mt-1 text-blue-700" />
                        <span>{point}</span>
                      </div>
                    ))}
                </div>
              )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleBlog;
