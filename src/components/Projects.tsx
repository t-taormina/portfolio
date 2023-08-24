import React from "react";
import Project from "./Project";

type Props = {};

function Projects({}: Props) {
  const projects = [
    "Breakout On Microbit V2",
    "Portfolio",
    "Game of Life on Microbit V2",
  ];
  return (
    <div
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row
    max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="header">Projects</h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, i) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col spaace-y-5 items-center
             justify-center p-20 md:p-44 h-screen"
          >
            <img src="" alt="" />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-xl font-semibold text-center">
                <span className="underline decoration-[#F391AC]/50">
                  Project {i + 1} of {projects.length}:
                </span>{" "}
                {project}
              </h4>
              <p className="text-lg text-center md:text-left">
                Project descriptions
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F391AC]/20 left-0 h-[100px] -skew-y-12"></div>
    </div>
  );
}

export default Projects;
