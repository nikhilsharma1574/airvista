import '@/styles/globals.css'
import { useEffect } from 'react';
import type { AppProps } from 'next/app'
import { Toaster } from "@/components/ui/toaster"
// import AOS from 'aos';
// import 'aos/dist/aos.css'; 

export default function App({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 800,
  //     once: false,
  //   });
  // }, []);
  return <>
  <Toaster />
  <Component {...pageProps} />
  </>
}
