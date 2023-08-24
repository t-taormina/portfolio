import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" flex flex-col relative h-screen text-center md:text-left
      md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="header">About</h3>
      <motion.img
        initial={{
          x: -200,
        }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        whileInView={{ x: 0, opacity: 1 }}
        src=""
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
            md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          My
          <span className="underline decoration-[#F391AC]"> Background</span>
        </h4>
        <p className="text-sm">Lorem Ipsum - Enter Background Summary Here</p>
      </div>
    </motion.div>
  );
}

export default About;
