import { FcGoogle } from "react-icons/fc";

export const GooglePay = ({ complete }: any) => {
  return (
    <div>
      <h1 className="font-semibold text-sm">Log in to use Google Pay.</h1>

      <button className="my-2 bg-gray-900 cursor-pointer p-3 w-40 rounded-lg">
        <a
          href="https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1"
          target="_blank"
          rel="noreferrer"
        >
          <FcGoogle className="inline-block text-lg" />
          <span className="text-white text-md">Pay</span>
        </a>
      </button>
      <div className="md:flex md:justify-center ">
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
