"use client";

import { SIMPLE_STYLED_BUTTON_CLASS } from "@/const/style";
import { getCustomerProfile, initAuth, initPayment } from "@/lib/frontend";
import Image from "next/image";


export default function Home() {


  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <Image
        src={"/assets/logo/mini-app-logo.svg"}
        className="logo mini-app"
        width={96}
        height={96}
        alt="Mini App logo"
      />
      <div className="flex flex-col justify-center items-center pt-14">
        <h1 className="text-3xl font-semibold">Welcome to Mini App</h1>
      </div>
      {/*Example of how to use the functions from the lib/frontend/index.ts*/}
      {/* uncomment the button below to enable exchange token button */}
      
      {/* <button className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`}
        onClick={() =>
          initAuth(
            (result) => {
              // add logic to handle accessToken here
              console.log(result);
              sessionStorage.setItem("accessToken", result.accessToken);
            },
            (errorCode, errorDescription) => {
              console.error(errorCode, errorDescription);
            }
          )
        }
      >
        Exchange Token
      </button> */}
      {/* uncomment the button below to enable get customer profile button */}
      {/* <button className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`}
        onClick={async () => {
          const result = await getCustomerProfile(
            sessionStorage.getItem("accessToken") ?? ""
          );
          console.log(result);
        }}
      >
        Get Customer Profile
      </button> */}
      {/* uncomment the button below to enable payment button */}
      {/* <button className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`}
        onClick={() =>
          initPayment((errorCode, errorDescription) => {
            console.error(errorCode, errorDescription);
          })
        }
      >
        Payment
      </button>  */}
    </div>
  );
}
