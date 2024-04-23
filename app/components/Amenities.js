import React from "react";
import { amenities } from "../utils/constants";
import Image from "next/image";

const Amenities = () => {
  return (
    <section className="bg-[#FFE2C8] px-4 " id="amenities">
      <h2 className="text-4xl font-bold text-center pt-10 text-[1A3066] mb-10">Amenities</h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {amenities.map((amenity, index) => {
          return (
            <div
              key={index}
              className="rounded-md bg-[#FFF7E4] mr-10 sm:mr-0 mb-10 md:mr-10 relative"
            >
              <div className="sm:py-10 p-1 sm:p-0 relative space-y-3">
                <Image width="95" height="90" src={amenity.icon} className="mx-auto" />
                <h2 className="sm:text-2xl text-xs  font-bold text-center text-black">
                  {amenity.title}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Amenities;
