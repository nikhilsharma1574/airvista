'use client'
import React,{useState,useEffect} from 'react';
import { onAuthStateChanged, getAuth } from "firebase/auth";
import {auth} from "../firebase";
import { useRouter } from 'next/router'
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { collection, doc, getDocs, getDoc, setDoc, query, where, onSnapshot, getCountFromServer} from "firebase/firestore"; 
import {db} from '../firebase.js'
import Link from 'next/link';

const FlightNumber = () => {

    const router = useRouter();
    const [flights, setFlights] = useState([]);
    const [count, setCount] = useState(0);
    const flightNumber  = router.query.flightNumber;
    
    console.log(flights)
    const handleBook =  () => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const uid = user.uid;
                console.log(uid)
                const docRef = doc(db, "users", uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    console.log("Document data:", docSnap.data());
                    await setDoc(doc(db, `flights/${flightNumber}/bookings/${uid}`), {
                        email:docSnap.data().email,
                        name:docSnap.data().name,
                        photo:docSnap.data().photo,
                        uid:docSnap.data().uid,
                    });
                } else {
                    // docSnap.data() will be undefined in this case
                    console.log("No such document!");
                }
            } else {
                router.replace('/login')
            }
        });
    }

    // @ts-ignore
    useEffect(() => {
        if(router.isReady){
            if (!flightNumber) return null;
            const unsub = onSnapshot(
                query(collection(db, "flights"), where("flightNumber","==", flightNumber)),
                (collectionRef) => {
                    collectionRef.forEach((doc) => {
                        // @ts-ignore
                        setFlights({ ...doc.data(), id: doc.id });
                    });
                }
                );
        }
    }, [router.isReady])
    // @ts-ignore
    useEffect(() => {
        if(router.isReady){
            const flightNumber  = router.query.flightNumber;
            if (!flightNumber) return null;
            const gg = async () => {
                const coll = collection(db, `flights/${flightNumber}/bookings`);
                const snapshot = await getCountFromServer(coll);
                setCount(snapshot.data().count);
            }
            gg();
        }
    }, [router.isReady])
    
    
    return (
        <div>
            <section className="p-4 py-12 md:px-16 lg:max-w-6xl lg:mx-auto text-left flex-col gap-5 w-full h-full flex justify-center items-center">
                <div className='flex justify-start text-left font-bold'>
                    Checkout Details
                </div>
                <div className='flex flex-col rounded-md bg-slate-200 w-full p-4'>
                        <div>
                            {/* @ts-ignore */}
                            Flight <span className='font-medium'>{flights.fromCity}</span> to <span className='font-medium'>{flights.toCity}</span>
                                <Button className='ml-12' onClick={handleBook}>Book</Button>
                        </div>
                        <hr className="border-black mt-2"></hr>
                        <div className=''></div>
                        <div className='grid lg:grid-cols-5 md:grid-cols-5 sm:grid-col-5 mt-6'>
                            {/* @ts-ignore */}
                            <div className='flex justify-center items-center'><Image src={flights.logo} height={100} width={100} alt='logo'/></div>
                            {/* @ts-ignore */}
                            <div className='flex justify-center items-center'>{flights?.fromAirport?.code}</div>
                            <div className='flex justify-center items-center'><Image src="/assets/flight.svg" height={100} width={100} alt='logo'/></div>
                            {/* @ts-ignore */}
                            <div className='flex justify-center items-center lg:border-r-2  md:border-r-2 h-full border-black'>{flights?.toAirport?.code}</div>
                            <div className='flex flex-col justify-center items-center'>
                            <Link href='./booked'>
                                <div className='flex justify-center items-center'><Button className='bg-lime-500'>Book now</Button></div>
                            </Link>
                                <p className='p-2 text-gray-900'>{60 - count} <span className='text-xs font-medium'>seats left</span></p>
                            </div>
                        </div>
                </div>
                <div className='flex flex-col rounded-md bg-slate-200 w-full p-4'>
                        <div>
                            Price details
                        </div>
                        <hr className="border-black mt-2"></hr>
                        <div className=''></div>
                        <div className='grid grid-cols-2 mt-6'>
                            <div className='grid grid-row-4'>
                                <div>Base Fare</div>
                                <div>Tax</div>
                                <div>Convinence charges</div>
                                <div>Total</div>
                            </div>
                            <div className='grid grid-row-4'>
                                <div>: Base Fare</div>
                                <div>: Tax</div>
                                <div>: Convinence charges</div>
                                <div>: Total</div>
                            </div>
                        </div>
                </div>
    
            </section>
        </div>
    )
}

export default FlightNumber