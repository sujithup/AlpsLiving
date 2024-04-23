import Image from "next/image";

export const Pricing = () => {
  return (
    <section
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">
            Choose Your Plan
          </h3>

          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            {/* 1st card */}
            <div className="flex justify-center">
              <div
                // variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/pricing/IconPaperPlane.png"
                    width={91}
                    height={87}
                    alt="Standard Plan"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:mt-7">
                  3 Sharing
                </p>
                <div className="flex flex-col w-full justify-center mb-8 flex-none">
                  <p className="text-2xl text-black-600 text-center mb-4 ">
                    Rs 1,17,500*
                  </p>
                </div>
              </div>
            </div>

            {/* 2nd Card */}
            <div className="flex justify-center">
              <div
                // variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/pricing/IconPaperPlane-2.png"
                    width={91}
                    height={87}
                    alt="Standard Plan"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:mt-7">
                  2 Sharing
                </p>
                <div className="flex flex-col w-full justify-center mb-8 flex-none">
                  <p className="text-2xl text-black-600 text-center mb-4 ">
                    Rs 1,63,000*
                  </p>
                </div>
              </div>
            </div>

            {/* 3rd Card */}
            <div className="flex justify-center">
              <div
                // variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/pricing/IconPaperPlane-1.png"
                    width={91}
                    height={87}
                    alt="Standard Plan"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:mt-7">
                  1 Sharing
                </p>
                <div className="flex flex-col w-full justify-center mb-8 flex-none">
                  <p className="text-2xl text-black-600 text-center mb-4 ">
                    Rs 2,92,000*
                  </p>
                </div>
                {/* <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Unlimited Bandwitch
                  </li>
                  <li className="relative check custom-list my-2">
                    Encrypted Connection
                  </li>
                  <li className="relative check custom-list my-2">
                    No Traffic Logs
                  </li>
                  <li className="relative check custom-list my-2">
                    Works on All Devices
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
