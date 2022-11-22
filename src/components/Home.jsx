import React from "react";
import self from "../assets/self.jpg";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1200px] mx-auto px-8 flex flex-col justify-center h-full md:mr-auto md:ml-80">
        <div className="hidden z-0 md:block">
          <img
            className="absolute bottom-50 left-[160px] object-scale-down h-[140px] w-[140px] sm:h-40 sm:w-40"
            src={self}
            alt="Ken Nakata"
          />
          <div className="bg-[#FCC5C0] absolute bottom-50 left-[335px] h-60 w-1"></div>
        </div>
        <p className="text-[#FCC5C0]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] group">
          <span className="inline-flex h-20 pt-2 overflow-y-hidden overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform">
            Ken Nakata
          </span>
          <span className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-white md:-mb-4 md:h-16 animate-cursor will-change-transform"></span>
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm an Aspiring Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[800px]">
          I'm graduating student from the Technological University of the
          Philippines pursuing an undergraduate degree of Bachelor of Science in
          Information Technology. I have focused to develop my skillsets
          relating to Web Development, specifically with JavaScript framework
          and Node.JS. Will grab any opportunities and am eager to learn
          something new.
        </p>
      </div>
    </div>
  );
};

export default Home;
