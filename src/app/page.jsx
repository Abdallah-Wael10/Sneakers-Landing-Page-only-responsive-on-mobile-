"use client"
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Nav from "./compnant/nav/page";
import Card from "./compnant/card/page";
import shoes1 from "./homeimages/shoes.jpg"
import shoes2 from "./homeimages/shoes2.jpg"
import shoes3 from "./homeimages/shoes3.jpg"
import name from "./homeimages/name.svg"
import adv1 from "./homeimages/adv1.svg"
import adv2 from "./homeimages/adv2.svg"
import adv3 from "./homeimages/adv3.svg"
import adv4 from "./homeimages/adv4.svg"
import adv5 from "./homeimages/adv5.svg"
import loc from "./homeimages/loc.svg"
import ph from "./homeimages/ph.svg"
import email from "./homeimages/email.svg"
export default function Home() {
  const imageRefs = useRef([]); // Array to hold refs for each image
  const [isInView, setIsInView] = useState(Array(5).fill(false)); // For tracking each image's in-view state

  // Create an IntersectionObserver to observe when images come into view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setIsInView((prev) => {
            const newInView = [...prev];
            newInView[index] = true; // Set the correct index to true
            return newInView;
          });
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

    imageRefs.current.forEach((el, index) => {
      if (el) observer.observe(el);
    });

    return () => {
      imageRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);
  const data =[
    {
      "id": 1,
      "name": "Nike Air Max 270",
      "price": 150,
      "stock": 25,
      "image": shoes1
    },
    {
      "id": 2,
      "name": "Nike Dunk Low The 50 ",
      "price": 180,
      "stock": 18,
      "image": shoes2
    },
    {
      "id": 3,
      "name": "Nike air max II triple black",
      "price": 120,
      "stock": 30,
      "image": shoes3
    },
    {
      "id": 4,
      "name": "Reebok Nano X1",
      "price": 130,
      "stock": 15,
      "image": "/images/reebok-nano-x1.jpg"
    },
    {
      "id": 5,
      "name": "New Balance 574",
      "price": 100,
      "stock": 40,
      "image": "/images/new-balance-574.jpg"
    },
    {
      "id": 6,
      "name": "Asics Gel-Kayano 28",
      "price": 160,
      "stock": 22,
      "image": "/images/asics-gel-kayano-28.jpg"
    }
  ]

  return (
    <div className="bg-white">
    <Nav/>
      <div className="w-full h-[600px] bg-[url('/homeimages/backg.jpg')]  bg-no-repeat bg-cover  max-460:bg-contain max-460:h-[192px]"> 
              <div className="w-full h-[500px] flex justify-end items-center pr-12 pt-4 max-460:justify-start max-460:items-baseline max-460:pl-[20px] max-460:pt-[30px]">
                    <div className="w-[18%] gap-5 flex flex-col max-460:w-[30%]">
                      <h1 className="w-full h-[40px] text-[40px]  font-semibold text-white max-460:text-[15px]">HERE WE GO</h1>
                      <button className="w-full h-[50px] bg-white text-black rounded-xl text-center max-460:w-[80%] max-460:h-[30px] " >Shop now</button>
                    </div>
              </div>
      </div>
      <div className="w-full h-[1910px] bg-[url('/homeimages/arrow.svg')] bg-center bg-contain bg-gray-200  bg-no-repeat ">
          <div className="w-full text-center h-[200px] pt-20 text-black font-black text-[40px]"><h1 className="w-full h-[40px] animate-slide-in">New Collection </h1></div>

        <div className=" container h-[500px] flex gap-6 justify-center max-460:flex-wrap max-460:h-[1469px] max-460:mt-[110px]">
        {data.slice(0,3).map((e)=>(
          <Card
          key={e.id}
          name={e.name}
          price={e.price}
          stock={e.stock}
          />
        ))}
          
        </div>
        <div className="w-full h-[80px] flex justify-center ">
              <button className="w-[20%] h-12 text-center bg-black rounded-lg text-white text-[14px] font-bold max-460:w-[40%]">OPEN STORE</button>
            </div>

            <div className="w-full h-[93px] flex gap-[70px]  justify-center items-center animate-slide-in  bg-black max-460:flex-wrap max-460:h-[262px] ">
          <Image src={adv1} alt="icon"  ref={(el) => (imageRefs.current[0] = el)}  className={`transform transition-all duration-700 ease-in-out ${isInView[0] ? 'animate-slide-in' : 'opacity-0'}`} />
          <Image src={adv2} alt="icon" ref={(el) => (imageRefs.current[0] = el)}  className={`transform transition-all duration-700 ease-in-out ${isInView[0] ? 'animate-slide-in' : 'opacity-0'}`} />
          <Image src={adv3} alt="icon" ref={(el) => (imageRefs.current[0] = el)}  className={`transform transition-all duration-700 ease-in-out ${isInView[0] ? 'animate-slide-in' : 'opacity-0'}`}  />
          <Image src={adv4} alt="icon" ref={(el) => (imageRefs.current[0] = el)}  className={`transform transition-all duration-700 ease-in-out ${isInView[0] ? 'animate-slide-in' : 'opacity-0'}`} />
          <Image src={adv5} alt="icon" ref={(el) => (imageRefs.current[0] = el)}  className={`transform transition-all duration-700 ease-in-out ${isInView[0] ? 'animate-slide-in' : 'opacity-0'}`} />
            </div>
            <div className=" container h-[500px] mt-[60px] flex gap-6 justify-center max-460:flex-wrap max-460:h-[1469px]">
        {data.slice(0,3).map((e)=>(
          <Card
          key={e.id}
          name={e.name}
          price={e.price}
          stock={e.stock}
          />
        ))}
          
        </div>
        <div className="w-full h-[170px] flex justify-center  ">
              <button className="w-[20%] h-12 text-center animate-bounce bg-black rounded-lg text-white text-[14px] font-bold max-460:w-[40%]">OPEN STORE</button>
            </div>

            <div className="w-full  h-[250px] flex flex-col items-center ">
              <div className="w-full h-[80px] text-center animate-slide-in ">
              <h1 className="w-full h-[60px] text-[40px] font-bold  ">Where to find us</h1>
              </div>
                  <div className="w-[50%] h-[150px] bg-black rounded-[12px] flex  text-white max-460:w-full">
                      <div className="w-[80%] h-[150px] flex justify-center items-center gap-6 pl-6 max-460:w-[73%] ">
                      <Image src={loc} alt="icon" className="w-[50px] h-[70px]"/>
                      <h1 className="w-full h-[40px] text-[22px] font-bold max-460:text-[17px]">Find a Nearby direction</h1>
                      </div>
                      <div className="w-[20%] h-[150px] flex justify-center items-center ">
                        <button className="w-[70%] rounded-lg h-[50px] bg-white text-black text-[16px] font-semibold text-center max-460:w-full">Find Now</button>
                      </div>
                  </div>
            </div>
            <section className="w-full h-[600px] flex justify-center items-center  bg-gray-200 max-460:items-start max-460:pt-3 max-460:h-[760px] ">
        <form className="w-[70%] h-[450px] max-460:flex-col     flex bg-white rounded-xl max-460:h-[700px] animate-slide-in2 max-460:pt-[20px]">
          <div className="w-[60%] h-[450px] max-460:w-full border-r-gray-200 border-r-[1px] flex flex-col gap-5 justify-center items-center ">
            <label className="flex items-center w-[60%] px-3 py-2 border border-gray-300 rounded-lg focus-within:border-blue-500">
          <div className="mr-2">
            <Image src={name}alt="Name Icon" width={24} height={24} />
          </div>
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-transparent focus:outline-none text-gray-900"
            />
          </div>
            </label>
            <label className="flex items-center w-[60%] px-3 py-2 border border-gray-300 rounded-lg focus-within:border-blue-500">
          <div className="mr-2">
            <Image src={ph}alt="Name Icon" width={24} height={24} />
          </div>
          <div className="relative flex-1">
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-transparent focus:outline-none text-gray-900"
            />
          </div>
            </label>
            <label className="flex items-center w-[60%] px-3 py-2 border border-gray-300 rounded-lg focus-within:border-blue-500">
          <div className="mr-2">
            <Image src={email}alt="Name Icon" width={24} height={24} />
          </div>
          <div className="relative flex-1">
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent focus:outline-none text-gray-900"
            />
          </div>
            </label>
            <textarea
          placeholder="Comment"
          rows="4"
          className="w-[60%]  border-b  px-3 py-2 border border-gray-300 rounded-lg focus-within:border-blue-500"
        ></textarea>
        <button className="w-[60%] rounded-br-[25px] rounded-tl-[25px] mt-4 py-2 bg-black text-white font-bold text-lg rounded">
          Send
        </button>
            
          </div>
          <div className="w-[40%] h-[450px] max-460:w-full flex flex-col justify-center pb-[50px] items-center gap-7 ">
            <div className="w-[70%] h-[50px] flex flex-col gap-4">
              <h1 className="w-full h-[30px] text-black text-[16px] font-medium">Customer Service</h1>
              <p className="w-full h-[30px] text-[11px] text-[#A4A4A4] font-normal">01224486815 - 01224486815 - 01200124524</p>
            </div>
            <div className="w-[70%] h-[50px] flex flex-col gap-4">
              <h1 className="w-full h-[30px] text-black text-[16px] font-medium">ECOMMERCE</h1>
              <p className="w-full h-[30px] text-[11px] text-[#A4A4A4] font-normal">01224486815 - 01343515818 </p>
            </div>
            <div className="w-[70%] h-[50px] flex flex-col gap-4">
              <h1 className="w-full h-[30px] text-black text-[16px] font-medium">E-MAIL</h1>
              <p className="w-full h-[30px] text-[11px] text-[#A4A4A4] font-normal">abdallahwael558@gmail.com</p>
            </div>
          </div>
        </form>
      </section>
      </div>
    
    </div>
  );
}
