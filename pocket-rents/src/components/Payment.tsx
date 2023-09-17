import React, { useEffect, useState } from "react";
import LogoOnly from "./layouting/LogoOnly";
import { GrFormPrevious } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { chooseHowToPay, logo, priceDetails, yourTrip } from "../utils/payment";
import { Credit } from "./Credit";
import { PayPal } from "./PayPal";
import { GooglePay } from "./GooglePay";
import { Input } from "../typing/type";
import Footer from "./layouting/Footer";

const Payment = () => {
  const navigate = useNavigate();
  const [notShow, setNotShow] = useState(true);
  const complete = () => setNotShow(!notShow);
  const exit = () => {
    setNotShow(!notShow);
    navigate("/");
  };
  const [payment, setPayment] = useState<string>("1");
  const [textFields, setTextFields] = useState<Input>({
    card: "",
    expire: "",
    cvv: "",
    street: "",
    apt: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const reserve = () => {
    textFields.card &&
    textFields.expire &&
    textFields.cvv &&
    textFields.street &&
    textFields.apt &&
    textFields.city &&
    textFields.state &&
    textFields.zip &&
    textFields.country
      ? complete()
      : console.log(textFields);
  };

  return (
    <div className="relative">
      <div
        onClick={exit}
        className={
          notShow
            ? "hidden"
            : "fixed top-0 w-full h-full bg-slate-900 opacity-80 z-20"
        }
      ></div>
      <div className="flex justify-center">
        <div
          onClick={exit}
          className={
            notShow
              ? "hidden"
              : "mt-40 mx-auto fixed w-96 h-64 bg-white z-50 p-6 rounded-md flex items-center justify-around"
          }
        >
          <p className="font-semibold text-2xl">Payment is successful.</p>
          <p className="border-r-2 border-gray-900 h-full mr-5"></p>
          <p>Click anywhere to go home page.</p>
        </div>
      </div>
      <LogoOnly />
      <div className="flex justify-center">
        <div className="grid gird-cols-1 sm:grid-cols-2 md:gap-3 md:mx-8">
          <div className="col-span-1">
            <div className="flex items-start mt-6">
              <GrFormPrevious
                className="inline-block text-3xl cursor-pointer"
                onClick={() => navigate("/")}
              />
              <div className="flex flex-col mx-1 md:mx-10 w-64 xs:w-auto md:w-full ">
                <span className="font-bold  text-lg md:text-3xl text-center md:text-left">
                  Request to Book
                </span>
                {/* Your Trip */}
                <h1 className="text-lg md:text-2xl font-semibold my-6">
                  Your trip
                </h1>
                {yourTrip.map((item) => (
                  <div className="flex justify-between items-center my-3">
                    <p>{item.p1}</p>
                    <p>{item.p2}</p>
                  </div>
                ))}
                <p className="border-b-2"></p>
                {/* Choose How to pay */}
                <div className="my-6">
                  <h1 className="mb-6 font-semibold text-xl">
                    Choose how to pay
                  </h1>
                  {chooseHowToPay.map((item) => (
                    <div className="flex p-3 justify-between border-2 border-gray-500 rounded-md">
                      <div className="w-72 md:w-full">
                        <label>{item.p1}</label>
                        <label className="block">{item.p2}</label>
                      </div>
                      <input
                        className="cursor-pointer w-5"
                        type="radio"
                        id={item.id}
                        name="pay"
                      ></input>
                    </div>
                  ))}
                </div>
                <p className="border-b-2 my-4"></p>
                {/* Pay With */}
                <div className="flex flex-col">
                  <div className="flex justify-between items-center my-6">
                    <h1 className="font-semibold text-xl">Pay with</h1>
                    <div className="flex justify-around md:w-40">
                      {logo.map((item) => (
                        <img src={item.src} alt="img" className="w-8"></img>
                      ))}
                    </div>
                  </div>
                  <select
                    className="w-full p-3 my-4 text-md border-2 border-gray-500 rounded-md cursor-pointer  bg-white "
                    onChange={(e) => setPayment(e.target.value)}
                  >
                    <option className="text-md p-2" value="1">
                      <p>Credit or debit card</p>
                    </option>
                    <option className="text-md p-2" value="2">
                      <p>Paypay</p>
                    </option>
                    <option className="text-md p-2" value="3">
                      Google Pay
                    </option>
                  </select>
                </div>
                <div>
                  {payment === "1" && (
                    <Credit
                      reserve={reserve}
                      setTextFields={setTextFields}
                      textFields={textFields}
                    />
                  )}
                  {payment === "2" && <PayPal complete={complete} />}
                  {payment === "3" && <GooglePay complete={complete} />}
                  <p className="border-b-2 md:hidden my-8"></p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center ml-10 w-64 lg:w-full md:my-20 mx-3 col-span-1 mb-20">
            <div className="w-full md:w-96 h-[500px] lg:h-96 border-2 rounded-lg p-5 ">
              <div className="flex flex-col lg:flex-row">
                <img
                  className="w-32 h-24 rounded-lg "
                  src="https://a0.muscache.com/im/pictures/miso/Hosting-10989371/original/46c0c87f-d9bc-443c-9b64-24d9e594b54c.jpeg?im_w=720"
                  alt="img"
                ></img>
                <div className="mx-3">
                  <p className="text-xs text-gray-400">
                    Room in a nice apratment
                  </p>
                  <p className="text-sm font-semibold mt-1">
                    Room available in Greater Spain suburb home
                  </p>
                </div>
              </div>
              <p className="border-b-2 my-3"></p>
              <h1 className="font-semibold text-xl mb-3">Price details</h1>
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
          </div>{" "}
        
        </div>
      </div>
      <div className="flex flex-col justify-center items-centers">
            <p className=" border-b-2 my-6"></p>
            <div className="lg:mx-20">
              <p className="text-center">copyright@webdesigncontent.hnd43</p>
              <div className="mb-6 flex justify-center">
                <p className="p-2 font-semibold">HND-43</p>
                <p className="p-2 font-semibold">Group-2</p>
              </div>
            </div>
          </div>
    </div>
  );
};

export default Payment;
