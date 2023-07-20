// import React from 'react'
// import Arrow from "/arrow.svg";
// import Rocket from "/rocket.svg";
// import Star from "/star.svg";
// import Target from "/target.svg";
// import { useNavigate } from "react-router-dom";

import Link from "next/link"

const ResetPassword = () => {
    
    // const navigate = useNavigate();

    return (
        <main className='w-full h-screen flex justify-center items-center'>
            <div className='hidden w-1/2 h-full bg-white text-black lg:flex lg:flex-col lg:px-16 justify-center'>
            <div className="relative">
                <h1 className='text-4xl font-semibold'>Welcome to{" "} 
                    <span className=" h-fit w-fit bg-[url('/underline.svg')] bg-bottom bg-no-repeat">
                    AIR<span className="text-lime-500"> VISTA</span>
                    </span>! Your Ultimate Online Flight Ticket Booking</h1>
                    <p className='text-slate-500 text-justify mt-4 text-base'>Enter your travel information, such as your departure and arrival cities, dates of travel, and number of passengers.
Select your preferred airline and class of travel.
Compare prices and select the flight that best meets your needs.
Enter your contact information and credit card details to complete your booking.
That's it! You've just booked your flight with our website. We hope you enjoy your trip!</p>                    
                </div>
            </div>
            <div className='lg:w-1/2 p-4'>
                <div className='mx-auto flex flex-col gap-8 lg:w-1/2'>
                    <div>
                        <div className="flex gap-4 items-center">
                        <div className="hover:scale-110 transition-all duration-300 cursor-pointer">
                            <Link href="./login">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>
                            </Link>
                        </div>
                        <h1 className='text-2xl font-medium'>Reset Password</h1>
                        </div>
                    <p className='text-sm text-slate-500'>Enter your email associated with to your account.</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-2'>
                            <h1 className=''>Email</h1>
                            <input className='w-full p-4 text-slate-500 outline-none border border-slate-400 rounded' placeholder='example@gmail.com'/>
                        </div>
                        <div>
                            <button className="w-full p-4 text-sm bg-lime-500 hover:bg-lime-600 transition-all duration-300 rounded cursor-pointer text-white font-medium">Send mail</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ResetPassword