import React from 'react';

function Responsive({fun}) {
const ColorObj = {
  backgroundColor : '#F4ECE6'
}

  return (
    <div id='targetRes' className='block fixed inset-0 z-999'>
      
      <div className=' w-full h-full flex flex-col gap-14 items-end pe-20 pt-20' style = {ColorObj}>

        <p className = 'text-5xl hover:cursor-pointer me-20' onClick={() => {fun()}}> X </p>

        <ul className='flex gap-10 flex-col mt-10 w-full items-center'>

            <li className='hover:cursor-pointer font-bold text-3xl'> ABOUT ME </li>
            <li className='hover:cursor-pointer font-bold text-3xl'> RESUME </li>
            <li className='hover:cursor-pointer font-bold text-3xl'> PROJECT </li>
            <li className='hover:cursor-pointer font-bold text-3xl'> CONTACT </li>

        </ul>

      </div>

    </div>
  );
}

export default Responsive;
