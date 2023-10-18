'use client'

import Hero from './components/Hero'
import FeaturesSection from './components/Features'
import Footer from './components/Footer'
import { useSession } from 'next-auth/react'

export default function Home() {
  const {data: session} = useSession()


  if(!session) {
    return (
      <>
      <div className='py-10'>
      <Hero />
      </div>
      <div className="py-10">
      <FeaturesSection />
      </div>
      <div className='pt-10'>
    <Footer />
    </div>
      </>
    )
  }

  return (
    <>
  <div className="hero ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://media.tenor.com/ihwVwX25ZjYAAAAj/niziu-rima.gif" className="max-w-sm rounded-lg " />
    <div>
      <h1 className="text-5xl font-bold">Coming Soon , Until Then </h1>
    </div>
  </div>
</div>
    </>
  )
}
