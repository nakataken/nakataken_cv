import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import Node from "../assets/node.png";
import Vue from "../assets/vue.png";
import Nuxt from "../assets/nuxt.png";
import ReactImg from "../assets/react.png";
import Next from "../assets/next.png";
import TypeScript from "../assets/ts.png";
import Mongo from "../assets/mongo.png";
import MySQL from "../assets/mysql.png";
import Firebase from "../assets/firebase.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-[#8892b0]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#FCC5C0]">
            Skills
          </p>
          <p className="py-4">
            / / These are the technologies I've worked with
          </p>
        </div>
        {/* Icons */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-5 text-center py-8">
          <div className="shadow-md shadow=[#040C16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="html icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow=[#040C16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="css icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow=[#040C16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="js icon" />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow=[#040C16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="node icon" />
            <p className="my-4">Node.JS</p>
          </div>
          <div className="shadow-md shadow=[#040C16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Vue} alt="vue icon" />
            <p className="my-4">Vue.JS</p>
          </div>
          <div className="shadow-md shadow=[#040C16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-3" src={Nuxt} alt="nuxt icon" />
            <p className="my-4">Nuxt.JS</p>
          </div>
          <div className="shadow-md shadow=[#040C16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="react icon" />
            <p className="my-4">React.JS</p>
          </div>
          <div className="shadow-md shadow=[#040C16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Next} alt="next icon" />
            <p className="my-4">Next.JS</p>
          </div>
          <div className="shadow-md shadow=[#040C16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={TypeScript} alt="ts icon" />
            <p className="my-4">TypeScript</p>
          </div>
          <div className="shadow-md shadow=[#040C16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mongo} alt="mongo icon" />
            <p className="my-4">MongoDB</p>
          </div>
          <div className="shadow-md shadow=[#040C16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={MySQL} alt="mysql icon" />
            <p className="my-4">MySQL</p>
          </div>
          <div className="shadow-md shadow=[#040C16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Firebase} alt="firebase icon" />
            <p className="my-4">Firebase</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
