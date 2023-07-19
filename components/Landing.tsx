// import React from 'react'
// import Arrow from "../assests/arrow.png";
// import Rocket from "../assests/rocket.png";
// import Star from "../assests/star.png";
// import Target from "../assests/target.png";
import Image from "next/image";
import landing_logo from '../assets/landing_page_logo.png'
// import Arrow from "/arrow.svg";
// import Rocket from "/rocket.svg";
// import Star from "/star.svg";
// import Target from "/target.svg";
import { useNavigate } from "react-router-dom";

const Landing = () => {

    // const navigate = useNavigate();


    return (
        <div className="bg-slate-100">
        <main className="p-4 md:px-16 lg:max-w-6xl lg:mx-auto text-left w-full h-screen flex justify-center items-center">
            <div className="flex flex-col gap-4 relative">
                <div className="flex items-center w-full justify-center">
                <Image src={landing_logo} height={400} width={400} alt="image"/>
                </div>
                <h1 className="text-4xl lg:text-6xl lg:leading-tight font-bold md:text-center">Book your flight today, <span className="text-lime-500"> fly </span> away <span className="text-lime-500"><br className="md:hidden"/>tomorrow</span></h1>
                <p className="text-sm lg:text-base lg:max-w-3xl lg:mx-auto text-slate-500 md:text-center">StreamlineRecruit is here to revolutionize your hiring process and empower your HR team with an efficient online recruitment solution.</p>
                <div className="grid grid-cols-3 lg:grid-cols-5 rounded-lg">
                    <div className="flex gap-2 border-b md:border-none items-center bg-white rounded-t-lg md:rounded-l-lg md:rounded-t-none p-4 col-span-3 md:col-span-1 lg:col-span-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#64748b" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                    </svg>
                    <input placeholder="Job Tile" className="w-full text-sm outline-none"/>
                    </div>
                    <div className="flex gap-2 md:border-l items-center bg-white rounded-b-lg md:rounded-r-lg md:rounded-b-none p-4 col-span-3 md:col-span-1 lg:col-span-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#64748b" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <input placeholder="Location" className="w-full text-sm outline-none"/>
                    </div>
                    <div className="col-span-3 md:col-span-1 lg:col-span-1 mt-4 md:mt-0">
                        <button className="p-4 w-full md:h-full text-sm bg-lime-500 hover:bg-lime-600 transition-all duration-300 rounded cursor-pointer text-white font-medium">Search</button>
                    </div>
                </div>
            </div>
            
        </main>
        </div>
    )
}

export default Landing