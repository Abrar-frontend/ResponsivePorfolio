import React from 'react'

function Footer() {

  const ColorObj = {
    backgroundColor : '#F4ECE6',
  }


  return (
    <>

{/* <div className='w-full h-24 flex flex-row'>

    <div className='w-full h-full ' style = {ColorObj}>
        

    </div>

    <div className='w-96 h-full '>
    </div>
    <div className='w-96 h-full ' >
    </div>
    <div className='w-96 h-full ' >
    </div>
    <div className='w-72 h-full ' >
    </div>
   

</div> */}


  {/* footer starting from here */}

      <div className='w-full h-24 flex flex-row  border border-red-800'>
      
        {/* left div of footer is starting from here */}

        <div className='w-full flex items-start pl-16 justify-center flex-col'>
          <p> Create it in 2024</p>
          <p> Power and Secure by <span className='underline'>Abrar khan</span></p>
        </div>

        {/* right div is starting from here  */}
        <div className='w-full flex lg:flex-row flex-col gap-6'>

          <div className='h-full flex flex-col justify-center w-44 items-center'>
            <p className='font-bold'>Call</p>
            <p>123-456-7890</p>
          </div>

          <div className='h-full flex flex-col justify-center w-44 items-center'>
            <p className='font-bold'>Email</p>
            <p>abrar0349khan@gmail.com</p>
          </div>

          <div className='h-full flex flex-col justify-center w-44 items-center'>
            <p className='font-bold'> Follow </p>
            <div className='flex flex-row gap-6 mt-1'>
              <i class="fa-brands fa-facebook cursor-pointer"></i>
              <i class="fa-brands fa-twitter cursor-pointer"></i>
              <i class="fa-brands fa-linkedin cursor-pointer"></i>
              <i class="fa-brands fa-instagram cursor-pointer"></i>
            </div>
        </div>

        </div>



      </div>
   
    
    </>
  )
}

export default Footer