import Image from 'next/image'
import Head from "next/head";
import Header from "../components/Header"
import Hero from "../components/Hero"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-[rgb(30,30,40)] text-white h-screen snap-y snap-mandatory 
    overflow-scroll z-0"> 
      <Head>
        <title>Tyler's Portfolio</title>
      </Head>

      <Header />

      {/* Hero */}
      <section id="hero" className="snap-center"> {/*  id allows navigating back to this section of the page */}
        <Hero />
      </section>

      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}

    </div>
  )
}
