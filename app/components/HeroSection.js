import Image from "next/image";
import { MotionBTTContainer } from "./MotionBTTContainer";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <div className="flex-col justify-center py-16 text-center">
      <div className="mx-auto pt-2 max-w-3xl">
        <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
          <div
            style={{
              color: "black",
              fontWeight: "bold",
              backgroundColor: "#FDC5BF",
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              width: "auto",
              padding: "1% 2% 1% 2%",
              borderRadius: "5px",
            }}
          >
            Opposite to Christ university, Yeshwanthpur campus
          </div>
        </MotionBTTContainer>
        {/* Appear Second */}
        <MotionBTTContainer transition={{ delay: 0.4, duration: 0.5 }}>
          <div className="text-4xl lg:text-6xl mt-5 font-semibold">
            The place that you will be <br /> excited to{" "}
            <span style={{ color: "#EE227A" }}>call home</span>
          </div>
        </MotionBTTContainer>
        {/* Appear Third */}
        <MotionBTTContainer transition={{ delay: 0.6, duration: 0.5 }}>
          <div className="mt-3 text-xl text-black/60">
            <p>
              We provide fully furnished PG rooms with top amenities like Wi-Fi,
              laundry, caretaker facilities for girls pursuing education or job
              near Nagasandra.
            </p>
          </div>
          <Link
            href="https://forms.gle/4wHo8QSHM7bpvkaw8"
            target="_blank"
            className="mt-8 mb-5 px-6 inline-block bg-slate-800 py-3 w-fit rounded-full mr-4 hover:opacity-80 text-white"
          >
            Register Now
          </Link>
        </MotionBTTContainer>

        {/* Appear Fourth */}
        <MotionBTTContainer transition={{ delay: 0.8, duration: 0.5 }}>
          <div className="page-banner--image">
            <Image
              src="/HeroBg.png"
              width={1110}
              height={317}
              alt="Page Banner"
              objectFit="cover"
              className="mx-auto"
            />
          </div>
        </MotionBTTContainer>
      </div>
    </div>
  );
};
