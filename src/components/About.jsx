import React from "react";

const About = () => {
  return (
    <div name="about" className="w-screen h-screen bg-[#0a192f] text-[#8892b0]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-[#FCC5C0] hover:text-[#FCC5C0] hover:scale-110 duration-500">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 p-4">
          <h1 className="text-[#fff] text-3xl font-bold">
            Personal Information
          </h1>
          <div>
            <p>Gender: Male</p>
            <p>Date of Birth: January 30, 2000</p>
            <p>Status: Single</p>
            <address>
              Address: #122 J.P Rizal St. Paliwas Bulacan, Central Luzon 3021
            </address>
            <p>Nationality: Filipino</p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 p-4">
          <h1 className="text-[#fff] text-3xl font-bold">
            Contact Information
          </h1>
          <div>
            <p>Home: 09752991975</p>
            <p>Work: 09760492296</p>
            <p>Email: ken.nakata.dev@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
