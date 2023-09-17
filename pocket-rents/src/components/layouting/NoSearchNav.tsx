import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaSearch } from "react-icons/fa";

const NoSearchNav = () => {
  console.log("Main");
  const navigate = useNavigate();
  return (
    <>
    <div className="border-[1px]">
      <div className="flex justify-between items-center h-20 w-[90%] md:w-[80%] lg:w-[60%] mx-auto">
        <div onClick={() => navigate("/")} className="flex cursor-pointer">
          <span className="font-sm sm:font-md font-bold text-xl text-[#ff385c]">Pocket Rents</span>
        </div>
        {/* <div className="md:flex items-center justify-around px-3 border-[1px] rounded-full shadow-lg hidden">
          <input
            className="outline-none rounded-xl p-3"
            placeholder="Search for rents "
          ></input>
          <div className="bg-[#ff385c] rounded-full p-2">
            <FaSearch className="text-lg text-white" />
          </div>
        </div> */}
        <div className="flex items-center justify-center cursor-pointer">
          <p className="p-0 px-1 font-semibold">Bruce</p>
          <div onClick={() => navigate("/profile")} className=" rounded-full p-1 border-[2px] hover:border-black transition duration-500 ease-in-out flex items-center justify-center">
            <img
              src="../images/profile.JPG"
              className="rounded-full w-8 h-8 object-cover"
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default NoSearchNav;
