import React from 'react'
import HeroRightPart from './HeroRightPart'
import HeroLeftPart from './HeroLeftPart'

function Hero() {
  return (
    <>
    <div className='w-full h-screen flex lg:flex-row flex-col '>
   

    <HeroRightPart />
    <HeroLeftPart/>
    </div>
    </>
  )
}

export default Hero