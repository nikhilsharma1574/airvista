import Image from "next/image";
import landing_logo from '../assets/landing_page_logo.png'
import Typewriter from 'typewriter-effect'
import { useNavigate } from "react-router-dom";
import pin from '../assets/pin.webp'
import date from '../assets/date.webp'
import globe from '../assets/globe.webp'

const Landing = () => {



    return (
        <div className="bg-slate-100">
        <main className="p-4 md:px-16 lg:max-w-6xl lg:mx-auto text-left w-full h-full flex justify-center items-center">
            <div className="flex flex-col gap-4 relative">
                <div data-aos="fade-up" className="flex items-center w-full justify-center">
                <Image className="mt-12" src={landing_logo} height={500} width={500} alt="image"/>
                </div>
                <h1 className="text-4xl lg:text-6xl lg:leading-tight font-bold md:text-center">Book your flight today, <span className="text-lime-500"> fly </span> away <span className="text-lime-500"><br className="md:hidden"/>
                <Typewriter
                        options={{
                            strings: ['Vacation', 'Last minute' , 'Tickets' ],
                            autoStart: true,
                            loop: true,
                        }}
                    /></span></h1>
                <p className="text-sm lg:text-base lg:max-w-3xl lg:mx-auto text-slate-500 md:text-center">StreamlineRecruit is here to revolutionize your hiring process and empower your HR team with an efficient online recruitment solution.</p>
                
                <div className="flex flex-col bg bg-blue-600 h-fit justify-center">
                    <div className="grid grid-cols-4 lg:grid-cols-7 bg-red-600 w-full rounded-lg p-4">
                        <div className="flex gap-2 border-b md:border-none rounded-b-none rounded-t-lg lg:rounded-l-lg lg:rounded-r-none md:rounded-r-none items-center bg-white  p-4 col-span-3 md:col-span-1 lg:col-span-2">
                        <Image src={globe} alt="My Image" width={30} height={30} />
                        <input placeholder="From" className="w-full text-sm outline-none"/>
                        </div>
                        
                        <div className="flex gap-2 md:border-l items-center bg-white  p-4 col-span-3 md:col-span-1 lg:col-span-2">
                        <Image src={pin} alt="My Image" width={30} height={30} />
                        <input placeholder="To" className="w-full text-sm outline-none"/>
                        </div>

                        <div className="flex gap-2 md:border-l items-center bg-white rounded-b-lg md:rounded-r-lg md:rounded-b-none p-4 col-span-3 md:col-span-1 lg:col-span-2">
                        <Image src={date} alt="My Image" width={30} height={30} />
                        <input placeholder="Date" className="w-full text-sm outline-none"/>
                        </div>

                        <div className="col-span-3 md:col-span-1 lg:col-span-1 mt-4 md:mt-0">
                            <button className="p-4 w-full md:h-full text-sm bg-lime-500 hover:bg-lime-600 transition-all duration-300 rounded cursor-pointer text-white font-medium">Search</button>
                        </div>
                    </div>
                    <div className="grid grid-rows-4  lg:grid-cols-4 md:grid-cols-4 p-6 place-items-center">
                        <div className="flex flex-col justify-center p-2 font-bold">
                            <div className="flex justify-center">
                                <Image src={globe} height={50} width={50} alt="logo"/>
                            </div>
                            <div className="flex justify-center">
                                XE23A8
                            </div>
                            </div>
                        <div className="flex justify-center p-2 font-bold">23:30</div>
                        <div className="flex justify-center p-2 font-bold">45</div>
                        <div>
                            <button className="bg-lime-500 rounded-md px-10 py-3 text-white">Book</button>
                        </div>
                    </div>
                </div>

            </div>
            
        </main>
        </div>
    )
}

export default Landing