'use client';
import { error } from 'console';
import React, { useState } from 'react'
import Link from 'next/link';

function Calculator() {
  const [input, setInput] = useState('');
  const button = [
    '7', '8', '9', '+',
    '4', '5', '6', '-',
    '1', '2', '3', '*',
    'C', '0', '=', '/',
    '←', '(', ')', '%'

  ];
  const handleButtonClick=(item: string)=>{
    setInput((prev)=>prev+item)
  }
  const handleClear=()=>{
    setInput('')
  }
  const handleSlice=()=>
  {

    setInput((prev)=>prev.slice(0,-1))
  }
  const  handleCalculate=()=>{
    try {
      const result = eval(input);
      setInput(result.toString());
    
    }
      catch (error){
        setInput('Error');
      }
  };
    return (
      <>
      {/* <div> <Link href='/about'>about</Link></div> */}

        <div className='h-100vh d-flex justify-content-center align-items-center mt-6-translate-y-[-10%]'>
          <div>Calculator
            <div className='border round p-[20px] shadow-md'>
              <input type='text' className='w-full h-[56px] text-[24px] text-right mb-[10px] p-[5px] border-gray-900 text-black rounded'value={input} readOnly />
              <div className='grid grid-cols-4 gap-2.5'>
                {button.map((item, index) => {
                  if (item === 'C'){
                    return(
                <button 
                key={index} 
                className='p-[20px] text-[18px] no-border text-black rounded bg-[#f0f0f0] cursor-pointer transition duration-300 hover:bg-[#d9d9d9]' onClick={handleClear}>{item}</button>
                    );
              } else if (item ==="=") {
                return (
                  <button
                  key={index}
                  className='p-[20px] text-[18px] no-border text-black rounded bg-[#f0f0f0] cursor-pointer transition duration-300 hover:bg-[#d9d9d9]'onClick={handleCalculate}
                  >
                  {item}
                  </button>
                  );
                  } 
                  else if (item ==="←") {
                    return (
                      <button
                      key={index}
                      className='p-[20px] text-[18px] no-border text-black rounded bg-[#f0f0f0] cursor-pointer transition duration-300 hover:bg-[#d9d9d9]'onClick={handleSlice}
                      >
                      {item}
                      </button>
                      );
                      } else {
                    return (
                      <button
                      key={index}
                      className='p-[20px] text-[18px] no-border text-black rounded bg-[#f0f0f0] cursor-pointer transition duration-300 hover:bg-[#d9d9d9]'
                       onClick={() => handleButtonClick(item)}>
                      {item}
                      </button>
                    )

}})}
                </div>

            </div>
            </div>
            </div>
            </>
)
}

export default Calculator