import React from 'react'
import shoes from "../../homeimages/shoes.jpg"
import Image from 'next/image'
const Card = ({name,price,stocks,image}) => {
  return (
    <div className='w-[380px] h-[450px] bg-white rounded-[22px] border-[2px] max-460:w-[95%]'>
      <Image src={shoes} alt='icon' className='w-full h-[330px] rounded-t-[22px] border-b border-b-gray-300'/>
      <div className='w-full h-[120px]  flex'>
                <div className='w-1/2 h-[120px]  flex flex-col gap-4 pl-2 pt-3'> 
                    <p className='w-full h-[20px] text-[14px] font-bold text-black'>{name}</p>
                    <p className='w-full h-[20px] text-[14px] font-bold text-black'>{price}</p>
                    <p className='w-full h-[20px] text-[11px] text-[#666666]'>{stocks}</p>
                </div>
                <div className='w-1/2 h-[120px]  flex justify-center items-center' >
                <button className='w-[60%] h-[30px] text-black bg-white text-center border-solid rounded-[6px] border-gray-300 border-[1px]'>Add to Cart</button>
                </div>
      </div>
    </div>
  )
}

export default Card
