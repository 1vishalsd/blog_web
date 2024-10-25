import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
const Banner = () => {
  return (
    <div className="px-4 py-32 bg-black mx-auto">
      <div className="text-center text-white">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Welcome to our Blog
        </h1>
        <p className="text-gray-100 lg:w-2/4 mx-auto font-sans">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
          voluptates vero possimus eveniet beatae autem. Adipisci Lorem, ipsum
          nostrum quo deserunt quisquam dolor dignissimos accusantium iure nemo
          voluptas?
          <div>
            <Link
              to="/"
              className="hover:text-blue-500 mt-2 inline-flex items-center"
            >
              Learn more <FaArrowRight className="mt-1 ml-2" />
            </Link>
          </div>
        </p>
      </div>
    </div>
  );
};

export default Banner;
