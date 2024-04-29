import Image from "next/image";
import React from "react";
import { photos } from "../utils/constants";

function Photos() {
  return (
    <section className="px-4 pb-10" id="photos">
      <h2 className="text-4xl font-bold text-center pt-10 text-[1A3066] mb-10">
        Photos
      </h2>
      <div class="flex flex-col md:grid md:grid-cols-3 gap-3">
        {photos.map((photo, index) => {
          return (
            <div key={index} class="relative rounded overflow-hidden">
              <Image
                src={photo.src}
                alt="Hanging Planters"
                class="w-full"
                width="400"
                height="300"
              />
              <p class="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
                {photo.title}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Photos;
