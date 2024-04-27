import React from "react";

const values = () => {
  const values = [
    {
      number: 1,
      title: "Integrity",
      description:
        "We conduct ourselves with honesty, transparency and respect for all.",
    },
    {
      number: 2,
      title: "Innovation",
      description:
        "We embrace creativity and strive to stay ahead of the curve in technology and education.",
    },
    {
      number: 3,
      title: "Inclusivity",
      description:
        "We welcome diversity and believe that everyone deserves equal opportunities to learn and grow.",
    },
    {
      number: 4,
      title: "Excellence",
      description:
        "We are committed to delivering excellence in all aspects of our platform and services.",
    },
    {
      number: 5,
      title: "Customer-Centricity",
      description:
        "We prioritize the needs and satisfaction of our users above all else.",
    },
    {
      number: 6,
      title: "Community",
      description:
        "We foster a sense of belonging, collaboration, and support for learners to connect and grow.",
    },
  ];
  return (
    <>
      <section>
        <div className="w-full items-center justify-center text-center">
          <h1 className="text-fontSize1 sm:text-fontSize2">Our Values</h1>
          <span className="text-fontSize2 sm:text-fontSize4 sm:mx-1">
            At ExpertSkillz, our values guide everything we do. These values
            include:
          </span>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-2 gap-28 sm:gap-10 justify-between my-20 sm:m-10 mx-28">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-5 drop-shadow-[0_5px_3px_rgba(51,255,168,1)] w-[320px]"
            >
              <div className="rounded-lg bg-white drop-shadow-[0_1px_5px_rgba(13,12,56,0.15)] p-2 mb-5 w-12 text-center">
                <span className="text-span text-lg">{value.number}</span>
              </div>
              <p className="my-3">{value.title}</p>
              <p className="text-gray-500 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default values;
