import React from "react";
import self from "../assets/self.jpg";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1200px] mx-auto px-8 flex flex-col justify-center h-full md:mr-auto md:ml-80">
        <div className="hidden z-0 md:block">
          <img
            className="absolute z-0 bottom-50 left-[160px] object-scale-down h-[140px] w-[140px] sm:h-40 sm:w-40"
            src={self}
            alt="Ken Nakata"
          />
          <div className="bg-[#FCC5C0] absolute bottom-50 left-[335px] h-60 w-1"></div>
        </div>
        <p className="text-[#FCC5C0]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] group">
          Ken Nakata
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Web Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[800px]">
          As a web developer with one year of experience, I have honed my skills
          in designing and developing web applications. With expertise in
          technologies such as HTML, CSS, JavaScript, and other JS frameworks, I
          am proficient in creating websites that meet the needs of clients and
          users alike. With a keen eye for detail and a passion for innovative
          solutions, I am committed to delivering high-quality work that exceeds
          expectations, and I am always eager to learn and grow.
        </p>
      </div>
    </div>
  );
};

export default Home;
