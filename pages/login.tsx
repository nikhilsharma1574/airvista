import React from 'react'
import Google from "../assests/google.png";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Link from 'next/link';

const Login = () => {


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
            <h1 className='text-2xl font-medium'>Login Now</h1>
            <p className='text-sm text-slate-500'>Enter your credentials to access your account.</p>
        </div>
        <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
            <h1 className=''>Email</h1>
            <input className='w-full p-4 text-slate-500 outline-none border border-slate-400 rounded' placeholder='example@gmail.com'/>
            </div>
            <div className='flex flex-col gap-2'>
            <div className='w-full flex justify-between items-center'>
                <h1 className=''>Password</h1>
                <h1 className='text-lime-500 cursor-pointer hover:underline text-sm'>Forgot Password?</h1>
            </div>
            <input type='password' className='w-full p-4 text-slate-500 outline-none border border-slate-400 rounded' placeholder='password'/>
            </div>
            <div>
            <button className="w-full p-4 text-sm bg-lime-500 hover:bg-lime-600 transition-all duration-300 rounded cursor-pointer text-white font-medium">Login</button>
            </div>
            <div className='text-center text-sm'>
            <p>OR</p>
            </div>
            <div>
            <button className='border border-slate-300 p-4 rounded flex gap-4 w-full justify-center items-center text-sm transition-all duration-300 hover:bg-slate-300/10'>
                {/* <img className='w-6' src={Google} alt={"google"}/> */}
                Login with Google
            </button>
            </div>
            <Link href='./sign-up'>
                <h1 className='text-center'>Don&apos;t have an account?<span className='text-lime-500 cursor-pointer hover:underline'> Sign up</span> </h1>
            </Link>
        </div>
        </div>
    </div>
    </main>
)
}

export default Login