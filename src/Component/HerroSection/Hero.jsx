import React from 'react'
import HeroRightPart from './HeroRightPart'
import HeroLeftPart from './HeroLeftPart'

function Hero() {
  return (
    <>
    <div className='w-full h-screen border border-red-600 flex flex-row'>
   

    <HeroRightPart />
    <HeroLeftPart/>
    </div>
    </>
  )
}

export default Hero