import React from "react";

const Posts = () => {
  return (
    <div>
      <div className="container mx-auto mt-8">
        <div className="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <img
                src="profile-picture.jpg"
                alt="Profile Picture"
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="font-semibold">John Doe</p>
                <p className="text-gray-500 text-sm">Posted 3 hours ago</p>
              </div>
            </div>
            <button className="text-gray-600 hover:text-blue-500">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          <div className="p-4">
            <p className="text-gray-800 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis justo euismod,
              condimentum metus eu, mattis justo.
            </p>
            <img
              src="post-image.jpg"
              alt="Post Image"
              className="mt-4 rounded-md w-full h-64 object-cover"
            />
          </div>

          <div className="flex items-center justify-between px-4 py-2 border-t border-gray-200">
            <div className="flex items-center space-x-4">
              <button className="flex items-center text-gray-600 hover:text-blue-500 space-x-1">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 2C5.92 2 2 5.92 2 10s3.92 8 8 8 8-3.92 8-8-3.92-8-8-8zm1 13h-2v-2h2v2zm0-4h-2V7h2v4z"></path>
                </svg>
                <span>Like</span>
              </button>
              <button className="flex items-center text-gray-600 hover:text-blue-500 space-x-1">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13 2a7 7 0 0 0-7 7c0 2.68 1.5 4.91 3.68 6.03L10 18l3.32-2.97C16.5 13.91 18 11.68 18 9a7 7 0 0 0-7-7zm4.45 8.04l-1.49 1.49c-.61.61-1.42.95-2.27.95-1.72 0-3.05-1.66-5-4.57-1.95 2.9-3.28 4.57-5 4.57-.85 0-1.66-.34-2.27-.95L2.54 10.5a9.94 9.94 0 0 1 14.91-1.42z"></path>
                </svg>
                <span>Comment</span>
              </button>
            </div>
            <button className="text-gray-600 hover:text-blue-500">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 2a8 8 0 0 0-8 8c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8zm0 14H7v-1a5 5 0 0 1 10 0v1h-3z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
