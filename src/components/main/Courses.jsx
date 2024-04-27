import React from "react";
// import { FaStar, FaUser } from "react-icons/fa";
// import { GiBookmarklet } from "react-icons/gi";
// import coursBg from "../../assets/images/cmcCourse.jpg";
// import coursBg1 from "../../assets/images/coursebg.png";
import back from "../../assets/images/back.png";
import CourseMission from "../../pages/courses/CourseMission";
import FeaturedCourses from "../../pages/courses/FeaturedCourses";
import CoursesAffiliate from "../../pages/courses/CoursesAffiliate";
import CoursesChoice from "../../pages/courses/CoursesChoice";
import CoursesFaq from "../../pages/courses/CoursesFaq";
import Questions from "./Questions";

// import { Link } from "react-router-dom";

function Courses() {
  return (
    <>
      <div
        className="font-nunito z-0 h-full w-full pt-10  bg-cover "
        style={{ backgroundImage: `url(${back})` }}
      >
        <section className=" w-full items-center justify-center text-center">
          <h1 className="text-lg">Our Courses</h1>
          <span className="text-span capitalize text-fontSize1 sm:text-fontSize3">
            find amazing courses with expertSkillz
          </span>
        </section>
        <CourseMission />
        <FeaturedCourses />
        <CoursesAffiliate />
        <div style={{ backgroundImage: `url(${back})` }}>
          <CoursesChoice />
          <CoursesFaq />
          <Questions />
        </div>

        {/* <div className="my-16 px-4"> */}
        {/* <div className="course-head mt-8">
        </div>
          <h3 className="text-lightBlue font-bold text-fontSize2 md:text-center">
            Our Affiliate Course
          </h3>
          <p className="text-gray-500 font-medium">
            Our comprehensive affiliate course covers a wide range of topics,
            including WhatsApp marketing, sales funnels, social media
            advertising, and more. It is designed for beginners looking to enter
            the world of affiliate marketing, intermediate affiliate marketers
            aiming to elevate their earnings, and business owners seeking to
            master online sales strategies for remarkable results.
          </p>
        </div>

        <div className="grid grid-cols-3 tablet:grid-cols-2 gap-8 sm:flex sm:flex-col">
          <div className="p-5 shadow-lg rounded bg-slate-100 shadow-boxshadow">
            <div>
              <img
                src={coursBg}
                alt="course description"
                className="w-full h-[13rem] hover:scale-[1.05] hover:mb-3 transition-all"
              />
              <h3 className="mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer text-gray-950">
                Professional Graphic Designer Photoshop
              </h3>
            </div>
            <div className="flex flex-col gap-5 mt-3">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <GiBookmarklet className="text-lightBlue mr-2" />
                  <h5 className="text-gray-500 font-semibold">12 Lessons</h5>
                </div>
                <div className="flex items-center">
                  <FaUser className="text-lightBlue mr-2" />
                  <h5 className="text-gray-500 font-semibold">12.5k</h5>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <FaStar className="text-lightBlue mr-2" />
                  <h5 className="text-gray-500 font-semibold">5.9k</h5>
                </div>
                <Link
                  to="https://expertskillz.pledre.school/course-details/complete-affiliate-mastery-course-cmc"
                  className="text-lightBlue font-medium hover:text-lightpurple  transition-all hover:font-bold"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>

          <div className="p-5 shadow-lg rounded bg-slate-100 shadow-boxshadow">
            <div>
              <img
                src={coursBg}
                alt="course description"
                className="w-full h-[13rem] hover:scale-[1.05] hover:mb-3 transition-all"
              />
              <h3 className="mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer text-gray-950">
                Professional Graphic Designer Photoshop
              </h3>
            </div>
            <div className="flex flex-col gap-5 mt-3">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <GiBookmarklet className="text-lightBlue mr-2" />
                  <h5 className="text-gray-500 font-semibold">12 Lessons</h5>
                </div>
                <div className="flex items-center">
                  <FaUser className="text-lightBlue mr-2" />
                  <h5 className="text-gray-500 font-semibold">12.5k</h5>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <FaStar className="text-lightBlue mr-2" />
                  <h5 className="text-gray-500 font-semibold">5.9k</h5>
                </div>
                <Link
                  to="https://expertskillz.pledre.school/course-details/complete-affiliate-mastery-course-cmc"
                  className="text-lightBlue font-medium hover:text-lightpurple  transition-all hover:font-bold"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>

          <div className="p-5 shadow-lg rounded bg-slate-100 shadow-boxshadow">
            <div>
              <img
                src={coursBg}
                alt="course description"
                className="w-full h-[13rem] hover:scale-[1.05] hover:mb-3 transition-all"
              />
              <h3 className="mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer text-gray-950">
                Professional Graphic Designer Photoshop
              </h3>
            </div>
            <div className="flex flex-col gap-5 mt-3">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <GiBookmarklet className="text-lightBlue mr-2" />
                  <h5 className="text-gray-500 font-semibold">12 Lessons</h5>
                </div>
                <div className="flex items-center">
                  <FaUser className="text-lightBlue mr-2" />
                  <h5 className="text-gray-500 font-semibold">12.5k</h5>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <FaStar className="text-lightBlue mr-2" />
                  <h5 className="text-gray-500 font-semibold">5.9k</h5>
                </div>
                <Link
                  to="https://expertskillz.pledre.school/course-details/complete-affiliate-mastery-course-cmc"
                  className="text-lightBlue font-medium hover:text-lightpurple  transition-all hover:font-bold"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>

          <div className="p-5 shadow-lg rounded bg-slate-100 shadow-boxshadow">
            <div>
              <img
                src={coursBg1}
                alt="course description"
                className="w-full h-[13rem] hover:scale-[1.05] hover:mb-3 transition-all"
              />
              <h3 className="mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer text-gray-950">
                Professional Graphic Designer Photoshop
              </h3>
            </div>
            <div className="flex flex-col gap-5 mt-3">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <GiBookmarklet className="text-lightBlue mr-2" />
                  <h5 className="text-gray-500 font-semibold">12 Lessons</h5>
                </div>
                <div className="flex items-center">
                  <FaUser className="text-lightBlue mr-2" />
                  <h5 className="text-gray-500 font-semibold">12.5k</h5>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <FaStar className="text-lightBlue mr-2" />
                  <h5 className="text-gray-500 font-semibold">5.9k</h5>
                </div>
                <Link
                  to="https://expertskillz.pledre.school/course-details/complete-affiliate-mastery-course-cmc"
                  className="text-lightBlue font-medium hover:text-lightpurple  transition-all hover:font-bold"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>

          <div className="p-5 shadow-lg rounded bg-slate-100 shadow-boxshadow">
            <div>
              <img
                src={coursBg1}
                alt="course description"
                className="w-full h-[13rem] hover:scale-[1.05] hover:mb-3 transition-all"
              />
              <h3 className="mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer text-gray-950">
                Professional Graphic Designer Photoshop
              </h3>
            </div>
            <div className="flex flex-col gap-5 mt-3">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <GiBookmarklet className="text-lightBlue mr-2" />
                  <h5 className="text-gray-500 font-semibold">12 Lessons</h5>
                </div>
                <div className="flex items-center">
                  <FaUser className="text-lightBlue mr-2" />
                  <h5 className="text-gray-500 font-semibold">12.5k</h5>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <FaStar className="text-lightBlue mr-2" />
                  <h5 className="text-gray-500 font-semibold">5.9k</h5>
                </div>
                <Link
                  to="https://expertskillz.pledre.school/course-details/complete-affiliate-mastery-course-cmc"
                  className="text-lightBlue font-medium hover:text-lightpurple  transition-all hover:font-bold"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>

          <div className="p-5 shadow-lg rounded bg-slate-100 shadow-boxshadow">
            <div>
              <img
                src={coursBg1}
                alt="course description"
                className="w-full h-[13rem] hover:scale-[1.05] hover:mb-3 transition-all"
              />
              <h3 className="mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer text-gray-950">
                Professional Graphic Designer Photoshop
              </h3>
            </div>
            <div className="flex flex-col gap-5 mt-3">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <GiBookmarklet className="text-lightBlue mr-2" />
                  <h5 className="text-gray-500 font-semibold">12 Lessons</h5>
                </div>
                <div className="flex items-center">
                  <FaUser className="text-lightBlue mr-2" />
                  <h5 className="text-gray-500 font-semibold">12.5k</h5>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <FaStar className="text-lightBlue mr-2" />
                  <h5 className="text-gray-500 font-semibold">5.9k</h5>
                </div>
                <Link
                  to="https://expertskillz.pledre.school/course-details/complete-affiliate-mastery-course-cmc"
                  className="text-lightBlue font-medium hover:text-lightpurple  transition-all hover:font-bold"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div> */}

        {/* <!-- Repeat the above code for other grid items --> */}
        {/* </div> */}
        {/* </div> */}
      </div>
    </>
  );
}

export default Courses;
