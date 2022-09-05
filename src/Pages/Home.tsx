import React from 'react';
import { motion } from 'framer-motion';
import WForm from '../Components/WForm';

function Home() {
  return (
    <motion.div 
    
    initial={
        {opacity: 0}
    }
    animate= {
        {opacity: 1}
    }

    className='bg-black'>
        <img src="/ctrl.jpg" alt="Protein Shaker" 
        className='lg:w-screen h-screen object-cover'/>

        <motion.h1 
            initial={
                {opacity: 0, right:"90%"}
            }
            animate= {
                {opacity: 1, right:"50%",
                transition: {
                    duration: 0.8,
                  },
                }
            }
            className=' text-center text-4xl lg:text-6xl text-white font-medium font-mono absolute top-1/4 md:top-3/4 right-1/2 md:text-right -translate-y-2/4 translate-x-1/2  md:-translate-x-full lg:-translate-x-3/4'>
            Control
            <br />
            Your 
            <br />
            Protein
            <br />
            Intake
        </motion.h1>
        
        <WForm></WForm>
    </motion.div>
  );
}

export default Home;
