import { useNavigate } from "react-router-dom";
import "./App.css";
import NaviBar from "./components/layouting/NaviBar";
import { FaUserCircle, FaSearch } from "react-icons/fa";
import { categories } from "./utils/category";
import { accoList } from "./utils/accoList";
import { AccoCard } from "./components/AccoCard";
import { useEffect, useState } from "react";
import HomeSkeleton from "./components/skeletons/HomeSkeleton";
import Footer from "./components/layouting/Footer";

function App() {
  const [total, setTotal] = useState(false);
  const [cate, setCate] = useState(accoList);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, [setLoading, loading]);

  return loading ? (
    <HomeSkeleton />
  ) : (
    <div className="bg-white min-h-screen">
      <NaviBar setCate={setCate} />
      
      <div className="flex items-center justify-start overflow-scroll super-power">
        <div
          onClick={() => {
            setCate(accoList);
          }}
          className="mx-10 cursor-pointer border-b-2 border-white hover:border-gray-400 transition duration-500 ease-in-out"
        >
          <p className="font-bold">All</p>
        </div>
        {categories.map((category) => {
          return (
            <>
              <div
                onClick={() => {
                  setCate(
                    accoList.filter((acco) => acco.category === category.title)
                  );
                }}
                key={category.id}
                className="mx-10 cursor-pointer border-b-2 border-white hover:border-gray-400 transition duration-500 ease-in-out"
              >
                <p className="font-bold">{category.title}</p>
              </div>
            </>
          );
        })}
      </div>
      <div className="flex items-center justify-evenly p-5 border-[1px] w-full md:w-fit rounded-lg md:mx-auto my-10">
        <div className="flex">
          <p className="font-bold mr-1">Display total price</p>
          <p className="text-gray-400 font-light hidden md:block">
            {" "}
            | Includes all fees, before taxes
          </p>
        </div>
        <div
          className={`w-8 h-8 cursor-pointer ${
            total ? "border-2 border-[#ff385c]" : "bg-gray-300"
          } rounded-full ml-10 flex items-center justify-center transition ease-in-out duration-500`}
          onClick={() => setTotal(!total)}
        >
          <div
            className={`w-5 h-5 cursor-pointer ${
              total ? "bg-[#ff385c]" : "bg-none"
            } rounded-full`}
          ></div>
        </div>
      </div>
      {cate.length == 0 ? (
        <p className="text-center font-extrabold text-2xl">
          No results. Sorry :(
        </p>
      ) : (
        <div className="flex items-center justify-center md:justify-between flex-wrap w-[90%] mx-auto">
          {cate.map((acco) => {
            return <AccoCard acco={acco} total={total} />;
          })}
        </div>
      )}{" "}
      <Footer />
    </div>
  );
}

export default App;
