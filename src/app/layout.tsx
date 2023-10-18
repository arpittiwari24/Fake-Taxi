import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from './components/Providers'
import Navbarr from './components/Navbarr'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fake-Taxi',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbarr />
        {children}
        </Providers>
      </body>
    </html>
  )
}
