import React from 'react'

function HeroRightPart() {
    const ColorObj = {
        backgroundColor : '#F4ECE6'
      }

  return (
    <>
        <div className=' w-full border border-blue-900 pt-24 pb-96' style = {ColorObj}>
        
            <div className='relative left-64'>

                <div className=" mt-20 ms-20 h-96  w-96 border border-yellow-700 flex flex-col gap-4 justify-center items-center" style = {{backgroundColor:"#F4ECE6"}}>

                    <div className='w-40 h-40 rounded-full border border-yellow-700' style = {{backgroundColor:'#B1B1B1'}}>

                    </div>

                    <h2 className='font-bold text-3xl'>Abrar</h2>
                    <h2 className='font-bold text-3xl'>Khan</h2>

                    <div className='text-blue-600 w-16 font-extrabold h-1 bg-blue-700'></div>

                    <h2 className='font-thin text-2xl'> PROJECT MANAGER </h2>

                </div>
                {/* Card footer div */}
                <div className="ms-20 w-96 h-16 bg-white border border-yellow-700">
                    <ul className='h-full flex justify-center items-center gap-6 text-3xl'>
                        <i class="fa-brands fa-facebook cursor-pointer"></i>
                        <i class="fa-brands fa-twitter cursor-pointer"></i>
                        <i class="fa-brands fa-linkedin cursor-pointer"></i>
                        <i class="fa-brands fa-instagram cursor-pointer"></i>
                    </ul>
                </div>

            </div>

        </div>
   
    </>
  )
}

export default HeroRightPart