import { useEffect } from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from "../firebase";
import { useRouter } from 'next/navigation'

const Header = () => {

    const [user, setUser] = useState(false);
    const [header, setHeader] = useState("w-full fixed top-0 flex bg-slate-100 z-50 justify-between items-center p-4 md:px-16")
    const router = useRouter();

    const listenScrollEvent = () => {
        window.scrollY > 10
            ? setHeader("w-full fixed transition-all border-b duration-300 bg-white top-0 flex bg-slate-100 z-50 justify-between items-center p-4 md:px-16")
            : setHeader("w-full fixed transition-all duration-300 top-0 flex bg-slate-100 z-50 justify-between items-center p-4 md:px-16")
    }

    const handleSignOut = () =>{
        signOut(auth)
        .then(() => {
            router.replace('/login')
        })
        .catch((error) => {
                console.log(error);
        });
        }
        
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent)
    })

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // const uid = user.uid;
                setUser(true)
                // ...
            } else {
                setUser(false)
            }
        });
    },[])

    return (
        <div className={header}>
            <Link href="/"><Image src={"/assets/nav_logo.png"} height={100} width={100} alt="nav_image"/></Link>
            <div className="lg:flex items-center gap-8 hidden">
                <h1 className="text-sm text-slate-500 hover:text-slate-800 cursor-pointer transition-all duration-300 font-medium">Home</h1>
                <a href="#features" className="text-sm text-slate-500 hover:text-slate-800 cursor-pointer transition-all duration-300 font-medium">Manage</a>
                <a href="#contact" className="text-sm text-slate-500 hover:text-slate-800 cursor-pointer transition-all duration-300 font-medium">Contact</a>
            </div>
            <div className="flex items-center gap-4">
                <Link href="https://airvista-admin.vercel.app">
                    <button className="py-2 px-4 text-sm outline-none rounded cursor-pointer hover:text-slate-800 hover:bg-blue-500/10 transition-all duration-300 text-slate-500 font-medium">Admin Login</button>
                </Link>
                {
                    user ? 
                    <button onClick={handleSignOut} className="py-2 px-4 text-sm bg-red-500 hover:bg-red-600 transition-all duration-300 rounded cursor-pointer text-white font-medium">Logout</button>

                    :
                    <Link href="/login">
                        <button className="py-2 px-4 text-sm bg-lime-500 hover:bg-lime-600 transition-all duration-300 rounded cursor-pointer text-white font-medium">Login</button>
                    </Link>
                }
            </div>
        </div>
    )
}

export default Header