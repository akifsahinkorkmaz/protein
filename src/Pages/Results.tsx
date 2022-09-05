import React from 'react';
import { motion } from 'framer-motion';
import Slide from '../Components/SlidePannel';
import { useParams } from 'react-router-dom';

function Result(state:any, props:any) {

    const {weight} = useParams()
    let wlist: string[] | undefined = weight?.split("-");
    let g: number | string = "unknown";

    if (wlist) {
        if (wlist[1] === "Kg"){
            g = parseInt(wlist[0])*2 || "unknown" 
        }
        if (wlist[1] === "Lbs"){
            g = parseInt(wlist[0]) || "unknown" 
        }

    }



    return (
    <motion.div 
    initial={
        {opacity: 0}
    }
    animate= {
        {opacity: 1}
    }
    >
        <div className='absolute top-0 left-0 w-screen h-screen z-10 p-4 flex justify-center items-center content-center md:content-around space-y-8 md:space-y-0 flex-wrap  md:space-x-8'>
            <h1 className='text-3xl md:text-4xl text-white font-mono font-medium'>Results</h1>

            <motion.div className='border-2 border-white rounded px-8 py-4'
            initial={
                {opacity: 0}
            }
            animate= {
                {opacity: 1,
                    transition: {
                        duration: 1,
                        delay: 0.4,
                      },}
            }>
                <h2 className='text-2xl md:text-3xl text-white font-mono font-medium'>You Are { wlist? wlist[0] + " " + wlist[1] : "Unknown" }</h2>
            </motion.div>

            <motion.div
            initial={
                {opacity: 0, y: 100}
            }
            animate= {
                {opacity: 1, y: 0, 
                    transition: {
                        duration: 1,
                        delay: 2,
                      },}
            }>
                <h2 className='text-2xl text-center md:text-left md:text-3xl text-white font-mono font-medium'>You Need <strong className='text-4xl'>~{g} grams</strong> of protein</h2>
                <p className='text-white text-center md:text-left'> According to <a href="https://www.healthline.com/nutrition/how-much-protein-per-day">this source*</a></p>
            </motion.div>
        </div>

        <Slide></Slide>
        <p className='absolute text-center left-1/2 bottom-4 -translate-x-1/2 text-gray-500'> This calculation is <strong>not</strong> serious.</p>
    </motion.div>
  );
}

export default Result;
