import React from "react";
import Banner from "./Banner"; // Import the Cards component

function Feedback() {
  return (
    <div className= "">
      {/* Banner, Cards, etc. */}
       {/* ✅ Cards are rendered only once */}

      {/* Social Remarks Section BELOW Cards */}
      <div className="   h-80 container bg-gradient-to-b from-yellow-950 to-transparent mt-10 p-8  text-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-4">What Students Say About Us</h2>
        
        <div className="flex flex-wrap justify-center h-40 gap-6">
          {[
            {
              name: "Akshada Ghodke",
              remark: "This platform helped me ace my exams! The study material is fantastic.",
            },
            {
              name: "Aastha Jeswani",
              remark: "The collection of past year papers is a lifesaver. Highly recommended!",
            },
            {
              name: "Aditya Yedurkar",
              remark: "Uploading my notes to help others gave me a great sense of contribution!",
            },
          ].map((testimonial, index) => (
            <div key={index} className="w-80 p-4 bg-white text-gray-800 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg">{testimonial.name}</h3>
              <p className="text-sm mt-2">{testimonial.remark}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feedback;