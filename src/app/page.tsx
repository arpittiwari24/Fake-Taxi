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
    <div className='pt-10 '>
    <Footer />
    </div>
    </>
  )
}
