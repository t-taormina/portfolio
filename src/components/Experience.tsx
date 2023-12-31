import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";

type Props = {};

function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row
        max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="header">Experience</h3>
      <div
        className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-500/20
        scrollbar-thumb-[#F391AC]/60"
      >
        <Card />
        <Card />
        <Card />
      </div>
    </motion.div>
  );
}

export default Experience;
