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
    const [checkCount,setCheckCount] = useState(false);
    const [checkUser,setCheckUser] = useState(false);
    const flightNumber  = router.query.flightNumber;
    // @ts-ignore
    const a = parseInt(flights.price)+150+200
    
    
    const handleBook =  () => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const uid = user.uid;
                console.log(uid)
                    const docRef = doc(db, "users", uid);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        
                        await setDoc(doc(db, `flights/${flightNumber}/bookings/${uid}`), {
                            email:docSnap.data().email,
                            name:docSnap.data().name,
                            photo:docSnap.data().photo,
                            uid:docSnap.data().uid,
                        });
                        if (count != 60) {
                            router.push('/booked');
                        }
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
    useEffect(() => {
        const ff = async () => {
            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    const uid = user.uid;
                    const collectionRef = collection(db, `flights/${flightNumber}/bookings`);
                    const q = await getDocs(collectionRef);
                    const ids = q.docs.map((doc) => doc.id);
                    if (ids.includes(uid)){
                        setCheckUser(true);
                    }
                }
            });
        }
        ff();
    },[])
    // @ts-ignore
    useEffect(() => {
        if(router.isReady){
            const flightNumber  = router.query.flightNumber;
            if (!flightNumber) return null;
            const gg = async () => {
                const coll = collection(db, `flights/${flightNumber}/bookings`);
                const snapshot = await getCountFromServer(coll);
                setCount(snapshot.data().count);
                if (snapshot.data().count === 60 ){
                    setCheckCount(true)
                }
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
                        </div>
                        <hr className="border-black mt-2"></hr>
                        <div className=''></div>
                        <div className='grid lg:grid-cols-5 md:grid-cols-5 sm:grid-col-5 mt-6'>
                            {/* @ts-ignore */}
                            <div className='flex justify-center items-center'><Image src={flights.logo} height={100} width={100} alt='logo'/></div>
                            {/* @ts-ignore */}
                            <div className='flex justify-center items-center'>{flights?.fromAirport?.airport_name}</div>
                            <div className='flex justify-center items-center'><Image src="/assets/flight.svg" height={100} width={100} alt='logo'/></div>
                            {/* @ts-ignore */}
                            <div className='flex justify-center items-center lg:border-r-2  md:border-r-2 h-full border-black'>{flights?.toAirport?.airport_name}</div>
                            <div className='flex flex-col justify-center items-center'>
                            
                            <div className='flex items-center justify-center'>
                                {!checkUser?
                                <Button className={`${checkCount? 'bg-red-800': 'bg-lime-500' } hover:bg-lime-600 `} disabled={checkCount}  onClick={handleBook}>
                                    {!checkCount?
                                    'Book'
                                    :
                                    'Sold Out'
                                    }
                                    </Button>:
                                    <Button className='bg-lime-600 hover:bg-lime-700' disabled>Booked</Button>
                                }
                            </div>

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
                                {/* @ts-ignore */} 
                                <div>: {flights.price}</div>
                                <div>:  200</div>
                                <div>: 150</div>
                                {/* @ts-ignore */} 
                                <div className='font-medium'>: {a}</div>
                            </div>
                        </div>
                </div>
    
            </section>
        </div>
    )
}

export default FlightNumber