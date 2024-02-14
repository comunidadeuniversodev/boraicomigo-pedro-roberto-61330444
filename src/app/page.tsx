'use client';
import Search from '../components/page'
import Image from 'next/image'


export default function Home() {
  return (
    <>
      <main className="md:flex flex-col min-h-screen bg-defaultBackground justify-center">
        <Image className="mx-auto" src="/hero.png" alt="logo" width={400} height={270} />
         <Search />
      </main>
    </>
  )
}
