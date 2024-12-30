'use client';

import { useEffect, useRef, useState } from "react";
import shoes from "../../homeimages/shoes.jpg";
import Image from 'next/image';

const Card = ({ name, price, stocks, image }) => {
  const imageRefs = useRef([]); // Dynamic refs array to hold references for each image
  const [isInView, setIsInView] = useState(false); // Track visibility of the element
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true); // Set state to true when the element is in view
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

    // Observe the image (or element) when it's available
    if (imageRefs.current[0]) observer.observe(imageRefs.current[0]);

    // Cleanup observer when component is unmounted or imageRefs change
    return () => {
      if (imageRefs.current[0]) observer.unobserve(imageRefs.current[0]);
    };
  }, []);

  return (
  <div
ref={(el) => (imageRefs.current[0] = el)} // Attaching the first element to the ref
className={`w-[380px] h-[450px] bg-white rounded-[22px] border-[2px] max-460:w-[95%] transition-all duration-700 ease-in-out ${isInView ? 'animate-slide-in2' : 'opacity-0'}`}
    >
      <Image 
        src={image || shoes} 
        alt='Product' 
        className='w-full h-[330px] rounded-t-[22px] border-b border-b-gray-300' 
      />
      <div className='w-full h-[120px] flex'>
        <div className='w-1/2 h-[120px] flex flex-col gap-4 pl-2 pt-3'>
          <p className='w-full h-[20px] text-[14px] font-bold text-black'>{name}</p>
          <p className='w-full h-[20px] text-[14px] font-bold text-black'>{price}</p>
          <p className='w-full h-[20px] text-[11px] text-[#666666]'>{stocks}</p>
        </div>
        <div className='w-1/2 h-[120px] flex justify-center items-center'>
          <button className='w-[60%] h-[30px] text-black bg-white text-center border-solid rounded-[6px] border-gray-300 border-[1px]'>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
