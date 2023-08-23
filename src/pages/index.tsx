import Image from 'next/image'
import Head from "next/head";
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Experience from '@/components/Experience';
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
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

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <Experience />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>


      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects/>
      </section>


      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <Contact />
      </section>


    </div>
  )
}
