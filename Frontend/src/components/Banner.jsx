import React from "react";

const Banner = () => {
  return (
    
    <div className="relative px-45 py-10 flex flex-wrap justify-center gap-20  mt-20 bg-gradient-to-b from-yellow-950 to-transparent">
        
         <div className="absolute inset-0 bg-gradient-to-b from-white to-white opacity-40 -z-10"></div>
      <div className="flex space-x-8 ">
        {/* Card 1 */}
        <div className="relative card bg-base-100 w-96 shadow-xl overflow-hidden">
          <figure className="px-10 pt-10">
            <img
              src="https://wallpapercave.com/wp/wp2036967.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-yellow-950 opacity-50"></div>

          <div className="card-body items-center text-center text-white relative">
            <h2 className="card-title">Latest Books
            </h2>
            <p>Most recently added textbooks</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative card bg-base-100 w-96 shadow-xl overflow-hidden">
          <figure className="px-10 pt-10">
            <img
              src="http://sev.h-cdn.co/assets/15/20/1280x960/gallery-1431381741-tumblr-nmcftajjos1uqg4zmo1-1280.jpg"
              
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-yellow-950 opacity-50"></div>

          <div className="card-body items-center text-center text-white relative">
            <h2 className="card-title">Past Year Papers (PYQs)
            </h2>
            <p>Previous exam papers by subject</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative card bg-base-100 w-96 shadow-xl overflow-hidden">
          <figure className="px-10 pt-10">
            <img
              src="https://images.pexels.com/photos/1925536/pexels-photo-1925536.jpeg?cs=srgb&dl=ballpen-blur-book-1925536.jpg&fm=jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-yellow-950  opacity-50"></div>

          <div className="card-body items-center text-center text-white relative">
            <h2 className="card-title">Notes & Study Material
            </h2>
            <p>Notes contributed by students</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
