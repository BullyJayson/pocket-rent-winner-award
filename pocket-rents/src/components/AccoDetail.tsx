import React from 'react'
import NoSearchNav from './layouting/NoSearchNav';
import { AiFillStar, AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { FaSchool, FaPaw } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";
import { MdWork } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import { MdLocationPin } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import { priceDetails } from '../utils/payment';


type Props = {}

const AccoDetail = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className='pb-10'>
      <NoSearchNav />
      <div className='w-[90%] md:w-[80%] lg:w-[60%] mx-auto'>
        <h1 className='font-bold text-2xl my-5'>Enjoy historic Valencia and close to the beach.</h1>
        <div className='flex items-center justify-start'>
          <div className='flex items-center justify-center mr-5'>
            <AiFillStar className="text-md" /> <p className='font-bold text-sm'>4.87</p>

          </div>
          ·
          <p className='font-bold underline mr-5'>170 reviews</p> ·
          <div className='flex'>
            <p className='font-bold underline'>Valencia</p>,
            <p className='font-bold underline'>Spain</p>
          </div>
        </div>

        <div className='mt-5 hidden md:flex'>
          <img src="https://a0.muscache.com/im/pictures/miso/Hosting-10989371/original/46c0c87f-d9bc-443c-9b64-24d9e594b54c.jpeg?im_w=1200" className='w-[50%] rounded-tl-xl rounded-bl-xl cursor-pointer hover:opacity-80' alt="" />
          <div className='w-[50%] grid grid-cols-2 gap-2 ml-2'>
            <img src="https://a0.muscache.com/im/pictures/miso/Hosting-10989371/original/90d22704-7f1a-44ad-924a-ecbdbb666db0.jpeg?im_w=720" className='w-full hover:opacity-80' alt="" />
            <img src="https://a0.muscache.com/im/pictures/miso/Hosting-10989371/original/b7c698e2-6d20-4d2a-a933-4c3f9e36eac4.jpeg?im_w=720" className='w-full hover:opacity-80 rounded-tr-xl' alt="" />
            <img src="https://a0.muscache.com/im/pictures/miso/Hosting-10989371/original/7fa4060d-60c1-44b0-921b-6958e7b200f1.jpeg?im_w=720" className='w-full hover:opacity-80' alt="" />
            <img src="https://a0.muscache.com/im/pictures/miso/Hosting-10989371/original/2f6537e4-cd4f-44e1-8acb-6bf77011b0e5.jpeg?im_w=720" className='w-full hover:opacity-80 rounded-br-xl' alt="" />
          </div>
        </div>
        <div className='block md:hidden '>
          <div className="w-full carousel mt-5">
            <div className="carousel-item w-full ">
              <img src="https://a0.muscache.com/im/pictures/miso/Hosting-10989371/original/46c0c87f-d9bc-443c-9b64-24d9e594b54c.jpeg?im_w=1200" className="w-full object-contain" alt="Tailwind CSS Carousel component" />
            </div>
            <div className="carousel-item w-full ">
              <img src="https://a0.muscache.com/im/pictures/miso/Hosting-10989371/original/90d22704-7f1a-44ad-924a-ecbdbb666db0.jpeg?im_w=720" className="w-full object-contain" alt="Tailwind CSS Carousel component" />
            </div>
            <div className="carousel-item w-full ">
              <img src="https://a0.muscache.com/im/pictures/miso/Hosting-10989371/original/7fa4060d-60c1-44b0-921b-6958e7b200f1.jpeg?im_w=720" className="w-full object-contain" alt="Tailwind CSS Carousel component" />
            </div>
            <div className="carousel-item w-full ">
              <img src="https://a0.muscache.com/im/pictures/miso/Hosting-10989371/original/2f6537e4-cd4f-44e1-8acb-6bf77011b0e5.jpeg?im_w=720" className="w-full object-contain" alt="Tailwind CSS Carousel component" />
            </div>
          </div>
        </div>

        <div className='flex flex-wrap'>
          <div className='w-full md:w-[60%]'>
            <div className='flex items-center justify-between'>
              <h1 className='font-bold text-2xl my-5'>Room in a rental unit hosted by Sagrario</h1>
              <div onClick={() => navigate("/hosts/2")} className="mr-5 rounded-full p-1 border-[2px] hover:border-black transition duration-500 ease-in-out flex items-center justify-center">
                <img
                  src="https://a0.muscache.com/im/pictures/user/0ab69fcf-c6fa-4cd4-a272-8755b6e88d7c.jpg?im_w=240"
                  className="rounded-full w-8 h-8 object-cover"
                  alt="img"
                />
              </div>
            </div>
            <div className='flex items-center justify-between flex-wrap'>
              <div className='p-5 border-[1px] border-gray-200 rounded-xl w-[200px] h-[100px] flex items-center justify-evenly mr-5 mb-5'>
                <i className="fa-solid fa-bed text-2xl font-bold mr-3"></i>
                <p className='text-sm font-bold'>1 single bed</p>
              </div>
              <div className='p-5 border-[1px] border-gray-200 rounded-xl w-[200px] h-[100px] flex items-center justify-evenly mr-5 mb-5'>
                <i className="fa-solid fa-shower text-2xl font-bold mr-3"></i>
                <p className='text-sm font-bold'>Shared bathroom</p>
              </div>
              <div className='p-5 border-[1px] border-gray-200 rounded-xl w-[200px] h-[100px] flex items-center justify-evenly mr-5 mb-5'>
                <i className="fa-solid fa-house-user text-2xl font-bold mr-3"></i>
                <p className='text-sm font-bold'>Host and other guests may be here</p>
              </div>
            </div>
            <hr className='mr-5' />
            <div>
              <div className='flex my-5 items-top'>
                <i className="fa-solid fa-person-booth text-xl mr-7"></i>
                <div>
                  <p className='font-bold text-md'>Room in a rental unit</p>
                  <p className='font-light text-md'>Your own room in a home, plus access to shared spaces.</p>
                </div>
              </div>
              <div className='flex my-5 items-top'>
                <i className="fa-solid fa-computer text-xl mr-7"></i>
                <div>
                  <p className='font-bold text-md'>Dedicated workspace</p>
                  <p className='font-light text-md'>Your own room in a home, plus access to shared spaces.</p>
                </div>
              </div>
              <div className='flex my-5 items-top'>
                <i className="fa-regular fa-calendar-xmark text-xl mr-7"></i>
                <div>
                  <p className='font-bold text-md'>Free cancellation for 48 hours.</p>
                </div>
              </div>
            </div>
            <hr className='mr-5' />
            <h1 className='font-bold text-2xl my-5'>Meet your host</h1>
            <div className='bg-[#f0efe9] rounded-xl p-5 flex items-center justify-center flex-col mr-5'>
              <div className="my-7 w-80 h-64 bg-gray-50 rounded-3xl grid grid-cols-5 gap-8 px-7 cursor-pointer" onClick={() => navigate("/hosts/2")}>
                {/* Profile */}
                <div className="col-span-3 my-auto">
                  <div className="flex flex-col items-center justify-center ">
                    <img
                      src="https://a0.muscache.com/im/pictures/user/0ab69fcf-c6fa-4cd4-a272-8755b6e88d7c.jpg?im_w=240 "
                      alt="img"
                      className="rounded-full w-3/4 h-3/4"
                    ></img>
                    <p className="text-2xl font-bold"> Sagrario</p>
                    <p>Host</p>
                  </div>
                </div>
                <div className="col-span-2 my-auto">
                  <div className="flex flex-col justify-center my-auto">
                    <div className="flex flex-col items-start">
                      <span className="font-bold text-2xl">2</span>
                      <span className="font-bold text-xs">Reviews</span>
                    </div>
                    <p className="bg-gray-400 border-b-2 my-2"></p>
                    <div className="flex flex-col items-start">
                      <span className="font-bold text-2xl flex items-center">
                        5<AiFillStar className="text-lg" />
                      </span>
                      <span className="font-bold text-xs">Rating</span>
                    </div>
                    <p className="bg-gray-400 border-b-2 my-2 "></p>
                    <div className="flex flex-col items-start">
                      <span className="font-bold text-2xl">5</span>
                      <span className="font-bold text-xs">Year Hosting</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <p className="mb-3 text-lg icon">
                  <FaSchool className="mr-2" />
                  School: Politecnino di Milano
                </p>
                <p className="mb-3 text-lg icon">
                  <IoMdSchool className="mr-2" />
                  University: University of Milan
                </p>
                <p className="mb-3 text-lg icon">
                  <MdWork className="mr-2" /> Work: Interior Desginer
                </p>
                <p className="mb-3 text-lg icon">
                  <AiFillHeart className="mr-2" />
                  Obessed with: Language
                </p>
              </div>
              <p className='w-[300px] my-5'>
                Open and communicative, with donation of people and happy to welcome friends from the world at home.
              </p>
              <hr className='' />

            </div>
            
            <h1 className='font-bold text-2xl my-5'>About this place</h1>
            <p>Nice and spacious room in the heart of Valencia, with double bed and a balcony. Silent because there is no traffic. Surrounded by all the landmarks , museums , cathedral , leisure, and close to the beach where you can go by bike, bus , tram or car if your means of transportation.ß</p>

            <hr className='mr-5 my-5' />


          </div>
          <div className='w-full md:w-[40%] h-[500px] sticky top-[100px] mt-5 p-5 border-[1px] rounded-xl border-gray-400 shadow-lg'>
          <div className='flex items-center justify-between'>
          <p><b className='text-xl'>$76 SGD</b> night</p>
          <div className='flex items-center'>
          <div className='flex items-center justify-center'>
            <AiFillStar className="text-md" /> <p className='font-bold text-sm'>4.87</p>

          </div>·
          <p className='font-bold underline text-gray-400'>170 reviews</p>
          </div>
          </div>
          <div className='bg-[#ff385c] py-5 my-5 rounded-lg cursor-pointer hover:bg-white transition duration-500 ease-in-out hover:border-[#ff385c] border-[1px] border-white' onClick={()=>navigate("/reserve")}>
            <p className='text-white font-bold text-lg text-center transition duration-500 ease-in-out hover:text-[#ff385c]'>Reserve</p>
          </div>
          <p className='font-light text-sm text-center pb-5'>You won't be charged yet</p>
          {priceDetails.map((item) => (
              <div className="flex justify-between">
                <span className="my-2">{item.p1}</span>
                <span className="my-2">{item.p2}</span>
              </div>
            ))}
            <p className="border-b-2 my-3"></p>
            <div className="flex justify-between font-semibold">
              <p>Total (USD)</p>
              <p>$2,826.04</p>
            </div>
          </div>
          
        </div>
        <h1 className='font-bold text-2xl my-5'>Where you'll be</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98646.97135831538!2d-0.4439115372799902!3d39.40788882455141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6048e9d19b4381%3A0x62eb4407a5ebf894!2sCiudad%20de%20las%20Artes%20y%20las%20Ciencias!5e0!3m2!1sen!2smm!4v1684775053062!5m2!1sen!2smm" className='w-full' height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

    </div>
  )
}

export default AccoDetail;