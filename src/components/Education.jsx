import React from "react";
import ReactCOC from "../assets/React Course Udemy - COC.jpg";

const Education = () => {
  return (
    <div
      name="education"
      className="w-screen h-screen bg-[#0a192f] text-[#8892b0]"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-[#FCC5C0]">
              Education
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 p-4">
          <h1 className="text-[#fff] text-3xl font-bold">Bachelor's Degree</h1>
          <div>
            <p>
              Technological University of the Philippines - Manila (TUP Manila)
            </p>
            <p>2022, Aug (26 or 30)</p>
            <p>BS in Information Technology</p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 p-4">
          <h1 className="text-[#fff] text-3xl font-bold">Achievements</h1>
          <div>
            <p>Dean's Lister (1st Yr - 1st Sem)</p>
            <p>Dean's Lister (1st Yr - 2nd Sem)</p>
            <p>Dean's Lister (2nd Yr - 1st Sem)</p>
            <p>Dean's Lister (2nd Yr - 2nd Sem)</p>
            <p>Dean's Lister (3rd Yr - 1st Sem)</p>
            <p>President's Lister (3rd Yr - 2nd Sem)</p>
            <p>President's Lister (4th Yr - 1st Sem)</p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 p-4">
          <h1 className="text-[#fff] text-3xl font-bold">Certificate</h1>
          <div className="w-full gap-5 py-8">
            <div className="shadow-md shadow=[#040C16] hover:scale-110 duration-500">
              <img className="w-80" src={ReactCOC} alt="react coc icon" />
              <p className="m-8">Udemy - Certificate of Completion</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
