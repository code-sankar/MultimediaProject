import React from "react";

function Information() {
  return (
    <div className="flex items-center justify-center rounded-lg min-h-[50vh] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-10 max-w-xl md:max-w-3xl text-center mx-auto">
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-4 md:mb-6">
          What is Multimedia?
        </h1>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          Multimedia refers to the integration of various forms of content, such
          as text, audio, images, animations, video, and interactive elements,
          all working together to enhance communication and engagement. It
          allows users to experience a richer and more immersive interaction,
          making it a powerful tool for education, entertainment, and business.
          By combining different media types, multimedia improves the
          effectiveness of conveying information in dynamic and creative ways.
        </p>
      </div>
    </div>
  );
}

export default Information;
