import React from "react";
import { faq } from "../utils/constants";

function FAQ() {
  return (
    <section id="faq">
      <h2 className="text-4xl font-bold text-center pt-10 text-[1A3066] mb-10">
        Frequently asked questions (FAQ)
      </h2>
      {/* <div class="grid p-8 text-left md:gap-16 md:grid-cols-2">
        {faq.map((faq, index) => {
          return (
            <div key={index}>
              <div class="mb-10">
                <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900">
                  <svg
                    class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  {faq.question}
                </h3>
                <p class="text-gray-500">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div> */}

      <div className="mt-10 p-2 pl-5 pb-16 gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-2">
        {faq.map((item, idx) => (
          <div
            className="space-y-3 mt-5 p-2"
            key={idx}
            style={{ border: "2px solid #FFE2C8", borderRadius: "10px" }}
          >
            <h4 className="text-xl text-gray-700 font-medium">
              {idx + 1}. {item.question}
            </h4>
            <p className="text-gray-500">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
