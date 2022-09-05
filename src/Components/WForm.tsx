import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { NavigateFunction, useNavigate } from "react-router-dom";

function WForm() {

    const [weight,setWeight] = useState("");
    const [unit,setUnit] = useState("Kg");
    let navigate: NavigateFunction = useNavigate();
    
    function Calculate(): void {
        if (weight){
            var Result: string = "results/";
            Result += weight;
            Result += "-";
            Result += unit;
            navigate(Result) 
        } 
    }
    
    return (
        <motion.div 
        initial={
            {opacity: 0, top:"30%"}
        }
        animate= {
            {opacity: 1, top:"75%"}
        }
        className='bg-white lg:py-4 lg:px-8 py-2 px-4 rounded absolute top-3/4 left-1/2 -translate-y-2/4 -translate-x-1/2 lg:translate-x-1/2 md:translate-x-1/3'>
            <div>
                <label htmlFor="weight" className=' text-rose-300 font-mono'> Your Weight </label>
                <div className='flex space-x-4 my-2'>
                    <input type="number" name='weight' className='border-rose-200 border-2 rounded-sm lg:h-10 h-8' onChange={(e) => {setWeight(e.target.value)}}/> 
                    
                    <select name="w-as" id="w-as" className='border-rose-200 border-2 rounded-sm lg:h-10 h-8 lg:w-16 w-12 text-rose-300' onChange={(e) => {setUnit(e.target.value)}}>
                        <option selected value="Kg">Kg</option>
                        <option value="Lbs">Lbs</option>
                    </select>
                </div>
            </div>
            <div className='flex justify-center items-center lg:mt-8 mt-4'>
                <button onClick={Calculate} className='font-mono lg:py-3 lg:px-6 py-2 px-4  bg-rose-300 transition-all hover:bg-rose-200'> Calculate </button>
            </div>
        </motion.div>

    
    );
}

export default WForm;
