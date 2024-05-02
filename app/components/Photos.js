"use client";
import Image from "next/image";
import React from "react";
import { photos } from "../utils/constants";
import Link from "next/link";

function Photos() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = React.useState(null);

  const handlePhotoClick = (index) => {
    setSelectedPhotoIndex(index);
  };

  const closeModal = () => {
    setSelectedPhotoIndex(null);
  };

  return (
    <section className="px-4 pb-10" id="photos">
      <h2 className="text-4xl font-bold text-center pt-10 text-[1A3066] mb-10">
        Photos
      </h2>
      <div class="flex flex-col md:grid md:grid-cols-3 gap-3">
        {photos.map((photo, index) => {
          return (
            <div
              onClick={() => handlePhotoClick(index)}
              key={index}
              class="relative cursor-pointer rounded overflow-hidden"
            >
              <Image
                src={photo.src}
                alt={photo.title}
                class="w-full cursor-pointer"
                width="400"
                height="300"
              />
              <p class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
                {photo.title}
              </p>
            </div>
          );
        })}
      </div>
      {selectedPhotoIndex !== null && (
        <div
          class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          style={{ paddingTop: "10%" }}
          onClick={closeModal}
        >
          <div class="max-w-screen-xl max-h-screen mx-auto">
            <Image
              src={photos[selectedPhotoIndex].src}
              alt="Pg photos"
              class="max-h-full max-w-full"
              layout="responsive"
              width="400"
              height="300"
            />
          </div>
        </div>
      )}

      <div className="flex justify-center">
        <Link
          href="/gallery"
          title="View all photos"
          className="inline-block border-4 border-slate-800 py-1 px-1 rounded-full hover:opacity-55 mt-16 sm:mt-10"
        >
          <span className="block font-bold text-slate-800 hover:opacity-50 rounded-full px-5 py-2">
            View All Photos
          </span>
        </Link>
      </div>
    </section>
  );
}

export default Photos;
