import React from "react";
import { BsPaypal } from "react-icons/bs";

export const PayPal = ({ complete }: any) => {
  return (
    <div>
      <h1 className="font-semibold text-sm">Log in to use PayPal.</h1>
      <button className="my-2 bg-blue-400 cursor-pointer p-3 w-32 rounded-lg">
        <a
          href="https://www.paypal.com/us/signin"
          target="_blank"
          rel="noreferrer"
        >
          <BsPaypal className="inline-block text-white" />
          <i className=" text-white font-bold">Pay</i>
          <span className=" text-white font-bold">Pal</span>
        </a>
      </button>
      <div className="md:flex md:justify-center">
        <p
          onClick={complete}
          className="cursor-pointer rounded-md my-4 w-full text-center md:w-40 font-semibold border-black border-2 p-2 hover:bg-blue-600 hover:text-white transition ease-in duration-300 "
        >
          Request to book
        </p>
      </div>
    </div>
  );
};
