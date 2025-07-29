import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const VideoPlayHeader = () => {
  return (
    <header className="relative w-full aspect-video lg:mt-20 mt-32">
      <video
        autoPlay
        loop
        playsInline
        muted
        preload="auto"
        className="w-full h-full object-fit"
      >
        <source
          src="https://dl.dropboxusercontent.com/scl/fi/m2jta610nijmt8fxx6mzj/drrobinbgvideo.mp4?rlkey=icd2o2seoxqkereex3ehzm9cf&st=ipe57lzo"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* <div className="absolute top-1/2 right-12 transform -translate-y-1/2 translate-x-1/2 rotate-90 flex justify-around items-center">
        <Link
          to="tel:+919999999999"
          className="flex items-center text-white space-x-2"
        >
          <div className="icon text-blue-700 hover:text-blue-700 hover:bg-blue-700 bg-blue-500 rounded-full p-2 shadow-lg flex justify-center items-center">
            <FaPhoneAlt size={30} />
          </div>
          <div className="call lg:text-2xl sm:text-xl md:text-xl text-black hover:text-blue-700 font-semibold text-center flex flex-col gap-1 items-center">
            <span className="bg-white px-1 py-1 rounded-sm">
              {"+91 99999XXXXX"}
            </span>
          </div>
        </Link>
      </div> */}
    </header>
  );
};

export default VideoPlayHeader;
