import React from 'react';
import { motion } from 'framer-motion';


function Slide() {

    return (
        <div className="flex items-start justify-start bg-black">

        <motion.div 
            initial={
                {y: 850}
            }
            animate= {
                {y: 0,
                    transition: {
                        duration: 0.8,
                        delay: 0.3,
                    },}
                }
                className=" w-1/5 h-screen bg-rose-300"></motion.div>
        <motion.div 
            initial={
                {y: 450}
            }
            animate= {
                {y: 0,
                    transition: {
                        duration: 0.8,
                        delay: 0.3,
                      },}
            }
        className=" w-1/5 h-screen bg-rose-300"></motion.div>
        <motion.div 
            initial={
                {y: 650}
            }
            animate= {
                {y: 0,
                    transition: {
                        duration: 0.8,
                        delay: 0.3,
                      },}
                    }
                    className=" w-1/5 h-screen bg-rose-300"></motion.div>
        <motion.div 
            initial={
                {y: 300}
            }
            animate= {
                {y: 0,
                    transition: {
                        duration: 0.8,
                        delay: 0.3,
                      },}
            }
        className=" w-1/5 h-screen bg-rose-300"></motion.div>
        <motion.div 
            initial={
                {y: 500}
            }
            animate= {
                {y: 0,
                    transition: {
                        duration: 0.8,
                        delay: 0.3,
                    },}
            }
            className="w-1/5 h-screen bg-rose-300"></motion.div>
    
    </div>
    );
}

export default Slide;
