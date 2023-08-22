import React from 'react';
import Card from "./Card";
import { motion } from "framer-motion";

type Props = {}

function Experience({}: Props) {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row
        max-w-full px-10 justify-evenly mx-auto items-center"
    >
        <h3 className="header">
            Experience
        </h3>
        <div>
            <Card />
            <Card />
            <Card />
        </div>
    </motion.div>
  )
}

export default Experience