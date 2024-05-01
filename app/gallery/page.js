import React from "react";
import { galleryConstants } from "../utils/constants";
import Footer from "../components/Footer";
import NavbarSecond from "../components/NavbarSecond";

function gallery() {
  return (
    <section className="bg-[#FFF7E4] px-4 pb-10" id="photos">
        <NavbarSecond/>
      <div className="mt-20 columns-4 gap-4 space-y-4 mx-auto p-5">
        {galleryConstants.map((item, index) => (
          <div key={index} className="break-inside-avoid">
            {/* Conditionally render either an image or a video */}
            {item.type === "photo" ? (
              <img
                src={item.src}
                // alt={item.alt}
                className="w-full rounded-md h-auto object-cover"
              />
            ) : (
              <video
                src={item.src}
                // alt={item.alt}
                className="w-full rounded-md h-auto object-cover"
                autoplay
                loop
                muted
              />
            )}
          </div>
        ))}
      </div>
      <Footer/>
    </section>
  );
}

export default gallery;
