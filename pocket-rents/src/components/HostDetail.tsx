import { useParams } from "react-router-dom";
import NoSearchNav from "./layouting/NoSearchNav";
import { hostReview } from "../utils/review";
import { rentingLists } from "../utils/hostRentingList";
import { useState } from "react";
import { AiFillStar, AiFillHeart } from "react-icons/ai";
import { FaSchool, FaPaw } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";
import { MdWork } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import { MdLocationPin } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import Footer from "./layouting/Footer";

const HostDetail = () => {
  const { id } = useParams();
  const [notShow, setNotShow] = useState(true);
  const [notShows, setNotShows] = useState(true);
  const handleClick = () => setNotShow(!notShow);
  const handleClicks = () => setNotShows(!notShows);
  return (
    <div className="relative">
      <NoSearchNav />
      {/* More Reviews */}
      <div className={notShow ? "hidden" : "flex justify-center"}>
        <div
          onClick={handleClick}
          className={
            notShow
              ? "hidden"
              : "h-[100vh] w-full opacity-40 bg-slate-900 fixed top-0 z-10"
          }
        ></div>
        <div
          className={
            notShow
              ? "hidden"
              : "h-full lg:h-[80vh] rounded-xl bg-white fixed top-0 lg:top-24 w-full sm:w-96 xl:w-1/3 z-30 mx-auto p-6 transition ease-linear duration-700 overflow-auto"
          }
        >
          <RxCrossCircled className="text-3xl" onClick={handleClick} />
          <h1 className="text-3xl font-bold my-6">4 Reviews</h1>
          <p className="border-b-2 my-6"></p>
          {hostReview.map((item) => (
            <div>
              <div className="flex justify-between my-3">
                <h1 className="text-lg">{item.nameAcco}</h1>
                <img
                  src={item.imgAcco}
                  alt="img"
                  className="w-20 h-14 rounded-xl"
                ></img>
              </div>
              <div className="flex items-center">
                <img
                  src={item.imageurl}
                  alt="img"
                  className="w-10 h-10 rounded-full mr-4"
                ></img>
                <div className="flex flex-col">
                  <p>{item.name}</p>
                  <p>{item.date}</p>
                </div>
              </div>
              <p className="my-4">{item.context}</p>
              <p className="border-b-2 my-6"></p>
            </div>
          ))}
        </div>
      </div>
      <main className="flex flex-col items-center">
        <main className="flex justify-center ">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:mx-20  drop-shadow-xl mt-7">
            {/* Profile and Verify on the left */}
            <div className="grid-span-1 ">
              <div className="my-7 w-80 h-64 bg-gray-50 rounded-3xl grid grid-cols-5 gap-8 px-7">
                {/* Profile */}
                <div className="col-span-3 my-auto">
                  <div className="flex flex-col items-center justify-center ">
                    <img
                      src="https://a0.muscache.com/im/pictures/user/b9c551db-9203-4f2c-9572-216ebe07e25c.jpg?im_w=240"
                      alt="img"
                      className="rounded-full w-3/4 h-3/4"
                    ></img>
                    <p className="text-2xl font-bold">Sagrario</p>
                    <p className="text-sm font-semibold">SuperHost</p>
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
              {/* Verify */}
              <div className="w-80 h-64 my-2 border-2 p-7 rounded-3xl shadow-lg flex flex-col justify-between">
                <p className="text-2xl font-bold">
                  Sagrario Confirmed Information
                </p>
                <p className="icon">
                  <TiTick className="mr-3 text-xl" />
                  Identity
                </p>
                <p className="icon">
                  <TiTick className="mr-3 text-xl" />
                  Email Address
                </p>
                <p className="icon">
                  <TiTick className="mr-3 text-xl" />
                  Phone Number
                </p>
              </div>
            </div>
            {/* Right Grid 2 cols */}
            <div className="my-9 lg:mx-20 lg:col-span-1 xl:col-span-2">
              {/* About Me */}
              <h1 className="text-lg lg:text-2xl font-bold mb-6">About Me</h1>
              <div className="grid lg:grid-cols-1 xl:grid-cols-2 xl:gap-6">
                <div className="lg:grid-span-1 w-72">
                  <p className="mb-3 text-lg icon">
                    <FaSchool className="mr-2" />
                    School: Politecnino di Valencia
                  </p>
                  <p className="mb-3 text-lg icon">
                    <IoMdSchool className="mr-2" />
                    University: University of Valencia
                  </p>
                  <p className="mb-3 text-lg icon">
                    <MdWork className="mr-2" /> Work: Interior Desginer
                  </p>
                  <p className="mb-3 text-lg icon">
                    <AiFillHeart className="mr-2" />
                    Obessed with: Songs
                  </p>
                </div>
                <div className="lg:grid-span-1">
                  <p className="mb-3 text-lg icon">
                    <GrLanguage className="mr-2" />
                    Language: English, Italian, Spanish
                  </p>
                  <p className="mb-3 text-lg icon">
                    <MdLocationPin className="mr-2" />
                    Live: in Valencia, Spain
                  </p>
                  <p className="mb-3 text-lg icon">
                    <FaPaw className="mr-2" />
                    Pets: Dog
                  </p>
                </div>
              </div>
              <p className="border-b-2 mt-4"></p>
              {/* Review */}
              <h1 className="font-bold text-2xl mt-8 mb-4 ">
                Sagrario's Reviews
              </h1>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                {hostReview
                  .filter((item) => item.id < 3)
                  .map((item) => {
                    return (
                      <div className=" p-4 grid w-80 h-64 border-2 border-current border-slate-300 rounded-lg">
                        <div className="flex flex-col justify-between">
                          <p>{item.context}</p>
                          <div className="flex items-center">
                            <img
                              src={item.imageurl}
                              className="rounded-full w-10 h-10 mr-4"
                              alt="img"
                            ></img>
                            <div>
                              <p>{item.name}</p>
                              <p>{item.date}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <p
                className="rounded-lg border-slate-700 p-2 w-40 p-auto text-center my-4 flex border-2 cursor-pointer hover:bg-blue-50"
                onClick={handleClick}
              >
                Show more reviews
              </p>
              <p className="border-b-2 mt-6 mb-4"></p>
              {/* Renting List */}
              <div className="my-5">
                <h1 className="text-2xl font-bold mb-4">
                  Sagrario's Renting List
                </h1>

                <div className="grid grid-cols-2 gap-3 ">
                  {rentingLists
                    .filter((item) => item.id < 3)
                    .map((list) => (
                      <div className="grid-span-1 ">
                        <img
                          src={list.imageurl}
                          className="w-36 h-24 xl:w-72 xl:h-52 rounded-lg hover:transform hover:scale-110 duration-300"
                          alt="img"
                        ></img>
                        <p className="w-36 xl:w-72 text-lg mt-3">{list.type}</p>
                        <p className="w-36 xl:w-72 text-md">{list.des}</p>
                      </div>
                    ))}
                </div>
              </div>
              <p
                className="rounded-lg border-slate-700 p-2 w-40 my-4 text-center flex border-2 cursor-pointer hover:bg-blue-50 "
                onClick={handleClicks}
              >
                Describe more lists
              </p>{" "}
            </div>
          </div>
        </main>
        {/* <p className="bg-cyan-400  py-5 text-gray-700 flex justify-center">
          Footer
        </p> */}
      </main>
      {/* More rents */}
      <div className={notShows ? "hidden" : "flex justify-center"}>
        <div
          onClick={handleClicks}
          className={
            notShows
              ? "hidden"
              : "h-[100vh] w-full opacity-40 bg-slate-900 fixed top-0 z-10"
          }
        ></div>
        <div
          className={
            notShows
              ? "hidden"
              : "h-full lg:h-[80vh] rounded-xl bg-white  fixed top-0 lg:top-24 w-full sm:w-96 xl:w-1/3 z-30 mx-auto p-6"
          }
        >
          <RxCrossCircled className="text-3xl" onClick={handleClicks} />
          <h1 className="text-3xl font-bold my-6">Sagrario's Rents</h1>
          <p className="border-b-2 my-6"></p>
          {rentingLists.map((item) => (
            <div>
              <div className="flex items-center">
                <img
                  src={item.imageurl}
                  className="w-36 h-24 rounded-lg hover:transform hover:scale-110 duration-300"
                  alt="img"
                ></img>
                <div className="flex flex-col ml-3">
                  <p>{item.des}</p>
                  <p>{item.type}</p>
                </div>
              </div>
              <p className="border-b-2 my-6"></p>
            </div>
          ))}
        </div>
      </div>{" "}
      <Footer />
    </div>
  );
};

export default HostDetail;
