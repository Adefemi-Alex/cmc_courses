import React from "react";

const FeaturedCourses = () => {
  return (
    <>
      <div className="py-14 px-10">
        <h1 className="text-black text-center capitalize text-fontSize1 sm:text-fontSize3">
          featured courses
        </h1>

        <section className="Recommended py-16">
          <h1 className="text-black capitalize text-fontSize2 sm:text-fontSize3">
            recommended courses
          </h1>

          <div className="grid grid-cols-3 tablet:grid-cols-2 gap-8 sm:flex sm:flex-col">
            <div className="p-5 shadow-lg rounded bg-slate-100 shadow-boxshadow">
              <div className="px-2 py-1">
                <img
                  //   src={}
                  alt="course description"
                  className="w-full h-[13rem] hover:scale-[1.05] hover:mb-3 transition-all"
                />
                <h3 className="mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer text-gray-950">
                  Professional Graphic Designer Photoshop
                </h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FeaturedCourses;
