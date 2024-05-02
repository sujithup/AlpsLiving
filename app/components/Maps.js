import Image from "next/image";
import Link from "next/link";

export const Maps = () => {
  return (
    <section className="bg-[#FFE2C8] px-4 " id="maps">
      <h2 className="text-4xl font-bold text-center pt-10 text-[1A3066] mb-10">
        Perfectly located
      </h2>
      <div
        style={{
          display: "grid",
          placeItems: "center",
          paddingBottom: "5%",
        }}
      >
        <Image alt="gmaps" src="/location.jpg" width="884" height="517" />
        <Link
          href="https://maps.app.goo.gl/1JkqYRU7sH9Szm3o7"
          target="_blank"
          title="Go to gmaps"
          className="mt-8 mb-5 px-6 inline-block bg-slate-800 py-3 w-fit rounded-full mr-4 hover:opacity-80 text-white"
        >
          Get Directions
        </Link>
      </div>
    </section>
  );
};
