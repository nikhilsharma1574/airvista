import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import Landing from '@/components/Landing'
import Footer from '@/components/Footer'
const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <main className={`flex${inter.className}`}>  
        <Header/>
        <Landing/>
        <Footer/>

    </main>
  )
}
