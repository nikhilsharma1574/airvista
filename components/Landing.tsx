import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {airports} from "../airports.js"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"

const Landing = () => {

    // console.log(airports);

    const airlines = [
        {
            title: "Indigo",
            value: "indigo",
            logo: "/assets/indigo.svg",
        },
        {
            title: "Air India",
            value: "airindia",
            logo: "/assets/air_india.svg",
        },
        {
            title: "Vistara",
            value: "vistara",
            logo: "/assets/vistara.svg",
        },
        {
            title: "Akasa Air",
            value: "asakaair",
            logo: "/assets/akasa.svg",
        },
    ];


    const [open, setOpen] = React.useState(false)
    const [open2, setOpen2] = React.useState(false)
    const [fromCity, setfromCity] = React.useState("");
    const [toCity, setToCity] = React.useState("");

    console.log(fromCity, toCity)
    return (
        <div className="bg-slate-100">
        <main className="p-4 md:px-16 lg:max-w-6xl lg:mx-auto w-full h-screen flex ">
            <div className="w-full">
                <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
                <div className="w-full h-96 flex items-center justify-center flex-col gap-2">
                    <p className="text-slate-500 text-sm">No Flights Added</p>
                    <Dialog>
                        <DialogTrigger>
                            <Button className="bg-lime-500 hover:bg-lime-600">Add Flights</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Add Flight Deatails</DialogTitle>
                                <DialogDescription>
                                    <div className="w-full h-full grid grid-cols-1 gap-4">
                                        {/* airline */}
                                        <Select>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select Airline" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {
                                                    airlines.map((airline, idx) => (
                                                        <SelectItem key={idx} value={airline.value} > 
                                                            <div className="flex gap-2 items-center">
                                                                <Image src={airline.logo} alt={airline.title} width={44} height={44}/> {airline.title}
                                                            </div>
                                                        </SelectItem>
                                                    ))
                                                }
                                            </SelectContent>
                                        </Select>
                                        {/* flight number */}
                                        <div className="grid w-full max-w-sm items-center gap-1.5">
                                            <Label htmlFor="flight_num" className="text-left">Flight Number</Label>
                                            <Input type="text" id="flight_num" placeholder="Number" />
                                        </div>
                                        {/* from */}
                                        <Label htmlFor="from_city" className="text-left mb-0">From</Label>
                                        <Popover open={open} onOpenChange={setOpen}>
                                            <PopoverTrigger asChild>
                                                <Button
                                                variant="outline"
                                                role="combobox"
                                                aria-expanded={open}
                                                className="w-full justify-between"
                                                >
                                                {fromCity
                                                    ? airports.find((airport) => airport.city === fromCity.replace(/\b\w/g, x => x.toUpperCase()))?.city
                                                    : "Select City"}
                                                <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
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
                                        {/* to city */}
                                        <Label htmlFor="to_city" className="text-left mb-0">To</Label>
                                        <Popover open={open2} onOpenChange={setOpen2}>
                                            <PopoverTrigger asChild>
                                                <Button
                                                variant="outline"
                                                role="combobox"
                                                aria-expanded={open}
                                                className="w-full justify-between"
                                                >
                                                {toCity
                                                    ? airports.find((airport) => airport.city === toCity.replace(/\b\w/g, x => x.toUpperCase()))?.city
                                                    : "Select City"}
                                                <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
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
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </main>
        </div>
    )
}

export default Landing