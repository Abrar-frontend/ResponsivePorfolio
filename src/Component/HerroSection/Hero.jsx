import React from 'react'
import HeroRightPart from './HeroRightPart'
import HeroLeftPart from './HeroLeftPart'

function Hero() {
  return (
    <>
    <div className='w-full h-screen flex lg:flex-row flex-col  mb-36 pb-36 border border-blue-700' style = {{paddingBottom:'50%'}}>
   

    <HeroRightPart />
    <HeroLeftPart/>
    </div>
    </>
  )
}

export default Hero