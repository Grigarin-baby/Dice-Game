import React from 'react'

const Rule=()=> {
  return (
    <div className='w-full flex justify-center mt-10'>
        

    <ul className=' w-full max-w-3xl mb-10 font-semibold  border-2 border-black bg-rose-100 flex items-center flex-col gap-0 '>
        <li>Select any number</li>
        <li>Click on the Dice</li>
        <li>If the selected number and the dice matches,Your score will the same as the dice.</li>
        <li>If not then 2 points will be deducted</li>
    </ul>
    
    </div>
  )
}

export default Rule