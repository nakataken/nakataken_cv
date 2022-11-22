import React from "react";

const Work = () => {
  return (
    <div name="work" className="w-screen h-screen bg-[#0a192f] text-[#8892b0]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-[#FCC5C0] hover:text-[#FCC5C0] hover:scale-110 duration-500">
              Work Experience
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 p-4">
          <h1 className="text-[#fff] text-3xl font-bold">
            Full Stack Web Developer Intern
          </h1>
          <div>
            <p className="font-bold">
              Centralized Cloud Computing International Inc.
            </p>
            <p>2022 Mar - 2022 Jun</p>
            <p>
              Works and develop website with both the front-end using
              nuxt.js/vue.js/ant-design/bootstrap/css/html, and back-end using
              node.js.
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 p-4">
          <h1 className="text-[#fff] text-3xl font-bold">
            Junior Consultant - Junior Developer
          </h1>
          <div>
            <p className="font-bold">CGI Inc.</p>
            <p>2022 August - Present</p>
            <p>
              Works and develop website for internal client, and trained with
              different skills (Angular, Node.JS, MySQL, Python, etc.)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
