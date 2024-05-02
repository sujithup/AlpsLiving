import React from "react";
import { faq } from "../utils/constants";

function FAQ() {
  return (
    <section id="faq">
      <h2 className="text-4xl font-bold text-center pt-10 text-[1A3066] mb-10">
        Frequently asked questions (FAQ)
      </h2>     
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
