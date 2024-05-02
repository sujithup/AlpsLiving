'use client';
import React, { useState, useEffect, useRef } from "react";
import { galleryConstants } from "../utils/constants";
import Footer from "../components/Footer";
import NavbarSecond from "../components/NavbarSecond";

function Gallery() {
  const [visibleItems, setVisibleItems] = useState([]);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        setVisibleItems(visibleEntries.map((entry) => entry.target));
      },
      { root: null, rootMargin: "0px", threshold: 0.5 } // You can adjust the threshold as needed
    );

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".lazy-load");
    elements.forEach((element) => {
      observer.current.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.current.unobserve(element);
      });
    };
  }, []);

  return (
    <section className="bg-[#FFF7E4] px-4 pb-10" id="photos">
      <NavbarSecond />
      <div className="mt-20 columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 mx-auto p-5">
        {galleryConstants.map((item, index) => (
          <div key={index} className="break-inside-avoid">
            {/* Conditionally render either an image or a video */}
            {item.type === "photo" ? (
              <img
                src={item.src}
                alt={item.alt}
                className={`w-full rounded-md h-auto object-cover ${
                  visibleItems.includes(item.src) ? "" : "lazy-load"
                }`}
              />
            ) : (
              <video
                src={item.src}
                alt={item.alt}
                className={`w-full rounded-md h-auto object-cover ${
                  visibleItems.includes(item.src) ? "" : "lazy-load"
                }`}
                autoPlay
                loop
                muted
              />
            )}
          </div>
        ))}
      </div>
      <Footer />
    </section>
  );
}

export default Gallery;

