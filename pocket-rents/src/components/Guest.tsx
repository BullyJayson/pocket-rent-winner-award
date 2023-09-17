import NoSearchNav from "./layouting/NoSearchNav";
import { AiFillHeart } from "react-icons/ai";
import { FaPaw } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";
import { MdWork } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import { MdLocationPin } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import { useState } from "react";
import { GuestInfo } from "../typing/type";
import { guestInfo } from "../utils/aboutGuest";
import { RxCrossCircled } from "react-icons/rx";
import { destinations } from "../utils/destinationReached";
import Footer from "./layouting/Footer";

const Guest = () => {
  const [notShow, setNotShow] = useState(true);
  const clickForMore = () => {
    setNotShow(!notShow);
  };
  const [data, setData] = useState<GuestInfo>(guestInfo);
  const {
    Name,
    University,
    Work,
    ObessedWith,
    SpendTime,
    Language,
    Live,
    Pets,
  } = data;

  const [memo, setMemo] = useState<GuestInfo>({
    Name: "",
    University: "",
    Work: "",
    ObessedWith: "",
    SpendTime: "",
    Language: "",
    Live: "",
    Pets: "",
  });
  const updateData = () => {
    if (
      memo.Name &&
      memo.University &&
      memo.Work &&
      memo.ObessedWith &&
      memo.SpendTime &&
      memo.Language &&
      memo.Live &&
      memo.Pets
    ) {
      setData(memo);
      setClose(!close);
    }
  };

  const [close, setClose] = useState(true);
  const handleClick = () => setClose(!close);
  return (
    <div className="relative">
      <div
        onClick={handleClick}
        className={
          close
            ? "hidden"
            : "bg-gray-700 w-full h-[100vh] top-0 fixed opacity-40 z-10"
        }
      ></div>
      <div className={close ? "hidden" : "flex justify-center"}>
        <div className="bg-white w-96 h-full lg:h-[85vh] fixed top-0 lg:top-24 z-40 p-9 sm:p-3 rounded-xl">
          <RxCrossCircled
            className="text-3xl cursor-pointer"
            onClick={handleClick}
          />
          <p className="my-4 font-bold text-xl">Editing Profile</p>
          <p className="border-b-2"></p>
          <div className="my-3 flex justify-between">
            <span className="text-lg">Name : </span>
            <input
              required
              onChange={(evt) => setMemo({ ...memo, Name: evt.target.value })}
              placeholder="Edit your name"
              className="border-2 border-gray-500 outline-none rounded-lg p-1"
            ></input>
          </div>
          <div className="mb-3 flex justify-between">
            <span className="text-lg">University : </span>
            <input
              required
              onChange={(evt) =>
                setMemo({ ...memo, University: evt.target.value })
              }
              placeholder="Edit your university"
              className="border-2 border-gray-500 outline-none rounded-lg p-1"
            ></input>
          </div>
          <div className="mt-3 flex justify-between ">
            <span className="text-lg">Work : </span>
            <input
              required
              onChange={(evt) => setMemo({ ...memo, Work: evt.target.value })}
              placeholder="Edit your work"
              className="border-2 border-gray-500 outline-none rounded-lg p-1"
            ></input>
          </div>
          <div className="mt-3 flex justify-between">
            <span className="text-lg">ObessedWith : </span>
            <input
              required
              onChange={(evt) =>
                setMemo({ ...memo, ObessedWith: evt.target.value })
              }
              placeholder="Edit your obessed"
              className="border-2 border-gray-500 outline-none rounded-lg p-1"
            ></input>
          </div>
          <div className="mt-3 flex justify-between">
            <span className="text-lg">Spend Time : </span>
            <input
              required
              onChange={(evt) =>
                setMemo({ ...memo, SpendTime: evt.target.value })
              }
              placeholder="Edit your time"
              className="border-2 border-gray-500 outline-none rounded-lg p-1"
            ></input>
          </div>
          <div className="mt-3 flex justify-between">
            <span className="text-lg">Language : </span>
            <input
              required
              onChange={(evt) =>
                setMemo({ ...memo, Language: evt.target.value })
              }
              placeholder="Edit your language"
              className="border-2 border-gray-500 outline-none rounded-lg p-1"
            ></input>
          </div>
          <div className="mt-3 flex justify-between">
            <span className="text-lg">Live : </span>
            <input
              required
              onChange={(evt) => setMemo({ ...memo, Live: evt.target.value })}
              placeholder="Edit your address"
              className="border-2 border-gray-500 outline-none rounded-lg p-1"
            ></input>
          </div>
          <div className="mt-3 flex justify-between">
            <span className="text-lg">Pets : </span>
            <input
              required
              onChange={(evt) => setMemo({ ...memo, Pets: evt.target.value })}
              placeholder="Edit your favorite pet"
              className="border-2 border-gray-500 outline-none rounded-lg p-1"
            ></input>
          </div>
          <p className="text-red-600 font-bold text-sm mt-3 text-center">
            ! Must fill all inputs to complete editing.
          </p>
          <div className="flex justify-end mt-6">
            <button
              id="button"
              onClick={updateData}
              className="border-gray-500 border-2 rounded-lg p-2 hover:bg-blue-600 hover:text-white transition duration-300
            "
            >
              Save Info
            </button>
          </div>
        </div>
      </div>
      <NoSearchNav />
      <div className="flex justify-center">
        <main className="flex flex-col items-center">
          <main className="flex justify-center ">
            {/* Profile and Verify on the left */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:mx-20  drop-shadow-xl mt-7">
              <div className="grid-span-1">
                {/* Profile */}
                <div className="flex flex-col items-center justify-center my-7 w-80 h-64 bg-gray-50 rounded-3xl ">
                  <img
                    src="https://avatars.githubusercontent.com/u/82503340?v=4 "
                    alt="img"
                    className="rounded-full w-40 h-40"
                  ></img>
                  <p className="text-2xl font-bold">{Name}</p>
                  <p>Guest</p>
                </div>
                {/* Verify */}
                <div className="w-80 h-64 my-2 border-2 p-7 rounded-3xl shadow-lg flex flex-col justify-start ">
                  <p className="text-2xl font-bold">
                    Guest Confirm Information
                  </p>
                  <p className="icon mt-4">
                    <TiTick className="mr-3 text-xl" />
                    Email Address
                  </p>
                  <p className="icon mt-4">
                    <TiTick className="mr-3 text-xl" />
                    Phone Number
                  </p>
                </div>
              </div>
              <p className="border-b-2 mt-4 lg:hidden"></p>
              {/* right 2 cols */}
              <div className="my-9 lg:mx-20 lg:col-span-1 xl:col-span-2">
                {/* About Me */}
                <h1 className="text-lg lg:text-2xl font-bold mb-6">About Me</h1>
                <div
                  onClick={handleClick}
                  className="border-2 border-slate-700 font-bold mb-6 text-sm cursor-pointer hover:bg-blue-50 rounded-lg w-24 text-center"
                >
                  Edit Profile
                </div>
                <div className="grid lg:grid-cols-1 xl:grid-cols-2 xl:gap-6">
                  <div className="lg:grid-span-1 w-72">
                    <p className="mb-3 text-lg icon">
                      <IoMdSchool className="mr-2" />
                      University: {University}
                    </p>
                    <p className="mb-3 text-lg icon">
                      <MdWork className="mr-2" /> Work: {Work}
                    </p>
                    <p className="mb-3 text-lg icon">
                      <AiFillHeart className="mr-2" />
                      Obessed with: {ObessedWith}
                    </p>
                    <p className="mb-3 text-lg icon">
                      <BiTimeFive className="mr-2" />
                      Spend time: {SpendTime}
                    </p>
                  </div>
                  <div className="lg:grid-span-1">
                    <p className="mb-3 text-lg icon">
                      <GrLanguage className="mr-2" />
                      Language: {Language}
                    </p>
                    <p className="mb-3 text-lg icon">
                      <MdLocationPin className="mr-2" />
                      Live: {Live}
                    </p>
                    <p className="mb-3 text-lg icon">
                      <FaPaw className="mr-2" />
                      Pets: {Pets}
                    </p>
                  </div>
                </div>
                <p className="border-b-2 mt-4"></p>
                {/* Destination Reached */}
                <div>
                  <h1 className="text-lg lg:text-2xl font-bold my-6 col-span-3">
                    Destination Reached
                  </h1>
                  <div className="grid grid-cols-2 gap-3">
                    {destinations
                      .filter((test) => test.id < 3)
                      .map((item) => (
                        <div>
                          <img
                            src={item.url}
                            alt="img"
                            className="w-36 h-24 xl:w-72 xl:h-52 hover:transform hover:scale-110 duration-300 rounded-lg"
                          ></img>
                          <p className="w-36 xl:w-72 mt-3 mb-2">
                            <span className="font-bold ">Location: </span>
                            {item.location}
                          </p>
                          <p className="w-36 xl:w-72 mb-2">
                            <span className=" font-bold">Name: </span>
                            {item.name}
                          </p>
                          <p className="w-36 xl:w-72 mb-2">
                            <span className="font-bold">Reach In: </span>
                            {item.date}
                          </p>
                        </div>
                      ))}
                  </div>
                  <p
                    onClick={clickForMore}
                    className="border-2 border-slate-700 hover:bg-blue-50 rounded-lg w-24 p-2 text-center cursor-pointer my-2"
                  >
                    More Lists
                  </p>
                </div>
              </div>
            </div>
          </main>
        </main>
      </div>
      <div
        className={
          notShow
            ? "hidden"
            : "bg-gray-700 w-full h-[100vh] top-0 fixed opacity-40 z-10"
        }
      ></div>
      <div className={notShow ? "hidden" : "flex justify-center"}>
        <div className="bg-white w-96 h-full lg:h-[80vh] fixed top-0 lg:top-32 z-40 p-9 sm:p-3 rounded-xl">
          <RxCrossCircled
            className="text-3xl cursor-pointer"
            onClick={clickForMore}
          />
          <p className="font-bold text-xl my-3">All Destination Reached</p>
          <p className="border-b-2 my-4"></p>
          {destinations.map((item) => (
            <div>
              <div className="flex items-center">
                <img
                  src={item.url}
                  alt="img"
                  className="rounded-lg w-36 h-28  hover:transform hover:scale-110 duration-300 mr-2"
                ></img>
                <div>
                  <p className="  mb-1">
                    <span className="font-bold ">Location: </span>
                    {item.location}
                  </p>
                  <p className="mb-1">
                    <span className=" font-bold">Name: </span>
                    {item.name}
                  </p>
                  <p className="mb-1">
                    <span className="font-bold">Reach In: </span>
                    {item.date}
                  </p>{" "}
                </div>
              </div>{" "}
              <p className="border-b-2 my-6"></p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Guest;
