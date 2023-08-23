import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

function Card({}: Props) {
    return (
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
        w-[500px] md:w-[500px] xl:w-[700px] snap-center bg-[rgb(20,20,25)] p-10 hover:opacity-100
        opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
            <motion.img 
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.5 }}
                whileInView={{opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover
                object-center"
                src=""
                alt=""
            />
            <div className="px-0 md:px-10">
                <h4 className="text-4xl font-light">Quality Assurance Engineer</h4>
                <p className="font-bold text-2xl mt-1">Apple</p>
                <div className="flex space-x-2 my-2">
                    <img 
                        className="h-10 w-10 rounded-full"
                        src=""
                        alt=""
                    />
                    {/* Tech Used */}
                </div>
                <p className="uppercase py-5 text-gray-300">Start Date - End Date</p>
                <ul className="list-disc space-y-4 ml-5 text-lg"> 
                    <li>Summary bullets</li>
                    <li>Summary bullets</li>
                    <li>Summary bullets</li>
                    <li>Summary bullets</li>
                </ul>
            </div>
        </article>
    )
}

export default Card