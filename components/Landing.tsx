import React,{useState, useEffect} from 'react';
import Image from "next/image";
import landing_logo from '../assets/landing_page_logo.png'
import Typewriter from 'typewriter-effect'
import { useNavigate } from "react-router-dom";
import {airports} from '../airports';
import {Command,CommandEmpty,CommandGroup,CommandInput,CommandItem, CommandList,} from "@/components/ui/command"
import {Popover,PopoverContent,PopoverTrigger,} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import pin from '../assets/pin.webp'
import date_logo from '../assets/date.webp'
import globe from '../assets/globe.webp'
import { Input } from "@/components/ui/input"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { collection, doc, getDocs, setDoc, query,where} from "firebase/firestore"; 
import {db} from '../firebase.js'

const Landing = () => {

    const [date, setDate] = useState<Date>()
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [fromCity, setfromCity] = useState("");
    const [toCity, setToCity] = useState("");
    const [flights, setFlights] = useState([]);
 
    const handleSearch = () => {
        // console.log(flights,fromCity,toCity,date)
        getFlights();
    }

    console.log(flights)

    const getFlights = async () => {
        let arr:any = [];
        console.log(fromCity.replace(/\b\w/g, x => x.toUpperCase()))
        const q = query(collection(db, "flights"), where("fromCity", "==", fromCity.replace(/\b\w/g, x => x.toUpperCase())) && where("toCity", "==", toCity.replace(/\b\w/g, x => x.toUpperCase()) ));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            arr.push({ id: doc.id, ...doc.data() });
        });
        setFlights(arr)
    };        

    return (
        <div className="bg-slate-100">
        <main className="p-4 py-12 md:px-16 lg:max-w-6xl lg:mx-auto text-left w-full h-full flex justify-center items-center">
            <div className="flex flex-col gap-4 relative">
                <div data-aos="fade-up" className="flex items-center w-full justify-center">
                    <Image className="mt-12" src={landing_logo} height={500} width={500} alt="image"/>
                </div>
                <h1 data-aos="fade-up" className="text-4xl lg:text-6xl lg:leading-tight font-bold md:text-center">Book your flight today, <span className="text-lime-500"> fly </span> away <span className="text-lime-500"><br className="md:hidden"/>
                <Typewriter
                        options={{
                            strings: ['Vacation', 'Last minute' , 'Tickets' ],
                            autoStart: true,
                            loop: true,
                        }}
                    /></span></h1>
                <p className="text-sm lg:text-base lg:max-w-3xl lg:mx-auto text-slate-500 md:text-center">Airvista offers a wide variety of flights to choose from, all at competitive prices. Whether you're looking for a last-minute getaway or planning your dream vacation, we have the perfect flight for you.</p>
                <div className="flex flex-col h-fit justify-center">
                    <div className="grid grid-cols-1 lg:grid-cols-7  w-full rounded-lg p-4">
                        <div className="flex gap-2 border-b lg:border-none rounded-b-none rounded-t-lg lg:rounded-l-lg lg:rounded-r-none md:rounded-r-none items-center bg-white  p-4 col-span-4 md:col-span-1 lg:col-span-2">
                            <Image src={globe} alt="My Image" width={30} height={30} />
                            {/* from */}
                            <Label htmlFor="from_city" className="text-left mb-0">From</Label>
                            <Popover  open={open} onOpenChange={setOpen}>
                                <PopoverTrigger className="border-none hover:bg-white" asChild>
                                    <Button
                                    variant="outline"
                                    role="combobox"
                                    aria-expanded={open}
                                    className="w-full justify-between"
                                    >
                                    {fromCity
                                        ? airports.find((airport) => airport.city === fromCity.replace(/\b\w/g, x => x.toUpperCase()))?.city
                                        : ""}
                                    {/* <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" /> */}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-full p-0">
                                    <Command id="from_city">
                                        <CommandInput placeholder="Search City..." className="h-9" />
                                        <CommandEmpty>No city found.</CommandEmpty>
                                        <CommandGroup className="h-56  overflow-y-scroll">
                                            {airports.map((airport) => (
                                            <CommandItem
                                                key={airport.code}
                                                onSelect={(currentValue) => {
                                                    setfromCity(currentValue === fromCity ? "" : currentValue)
                                                    setOpen(false)
                                                }}
                                            >
                                                <p>
                                                    {airport.city}
                                                </p>
                                                <CheckIcon
                                                className={cn(
                                                    "ml-auto h-4 w-4",
                                                    fromCity === airport.city ? "opacity-100" : "opacity-0"
                                                )}
                                                />
                                            </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                                    
                        </div>
                        <div className="flex gap-2 lg:border-l border-b lg:border-none items-center bg-white  p-4 col-span-4 md:col-span-1 lg:col-span-2">
                            <Image src={pin} alt="My Image" width={30} height={30} />
                            {/* to city */}
                            <Label htmlFor="to_city" className="text-left mb-0">To</Label>
                            <Popover open={open2} onOpenChange={setOpen2}>
                                <PopoverTrigger className="border-none hover:bg-white" asChild>
                                    <Button
                                    variant="outline"
                                    role="combobox"
                                    aria-expanded={open}
                                    className="w-full justify-between"
                                    >
                                    {toCity
                                        ? airports.find((airport) => airport.city === toCity.replace(/\b\w/g, x => x.toUpperCase()))?.city
                                        : ""}
                                    {/* <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" /> */}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-full p-0">
                                    <Command id="to_city">
                                        <CommandInput placeholder="Search City..." className="h-9" />
                                        <CommandEmpty>No city found.</CommandEmpty>
                                        <CommandGroup >
                                            <div className="h-56 overflow-y-scroll">
                                                {airports.map((airport) => (
                                                <CommandItem
                                                    className={`${airport.city === fromCity.replace(/\b\w/g, x => x.toUpperCase()) ? "hidden" : "block"}`}
                                                    key={airport.code}
                                                    onSelect={(currentValue) => {
                                                        setToCity(currentValue === toCity ? "" : currentValue)
                                                        setOpen2(false)
                                                    }}
                                                >
                                                    <p>
                                                        {airport.city}
                                                    </p>
                                                    <CheckIcon
                                                    className={cn(
                                                        "ml-auto h-4 w-4",
                                                        toCity === airport.city ? "opacity-100" : "opacity-0"
                                                    )}
                                                    />
                                                </CommandItem>
                                                ))}
                                            </div>
                                        </CommandGroup>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className="flex gap-2 md:border-l items-center bg-white rounded-b-lg md:rounded-r-lg md:rounded-b-none p-4 col-span-4 md:col-span-1 lg:col-span-2">
                            <Image src={date_logo} alt="My Image" width={30} height={30} />
                            <Popover>
                                <PopoverTrigger className="border-none hover:bg-white" asChild>
                                    <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-[240px] justify-start text-left font-normal",
                                        !date && "text-muted-foreground"
                                    )}
                                    >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className="col-span-4 md:col-span-1 lg:col-span-1 mt-4 md:mt-0">
                            <Button onClick={handleSearch} className="p-4 w-full md:h-full text-sm bg-lime-500 hover:bg-lime-600 transition-all duration-300 rounded cursor-pointer text-white font-medium">Search</Button>
                        </div>
                    </div>
                </div>
            </div>
            
        </main>
        </div>
    )
}

export default Landing