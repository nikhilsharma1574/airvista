import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const booked = () => {
    return (
        <>
    <div className='h-screen w-screen flex justify-center items-center flex-col'>
            <Image src={"/assets/congrats.webp"} alt="Congrats" width={200} height={200} />
        <h2 style={{textAlign:'center'}} >Congratulations! Your booking has been confirmed</h2>
        <p>Pay the Ammount in Airport Counter and pick your Ticket</p>

        <Link href="./">
            <button className='bg-lime-500 hover-bg-lime-600 rounded-md px-3 py-2'>Back to home</button>
        </Link>
    </div>
        </>
            )
}

export default booked
