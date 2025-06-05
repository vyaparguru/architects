'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative bg-white py-16 md:py-20 px-6 lg:px-20 overflow-hidden mt-10 md:mt-20">
      {/* Background overlay */}
      {/* <div className="absolute inset-0 bg-[url('/bg-blueprint.svg')] bg-no-repeat bg-cover opacity-10 pointer-events-none "></div> */}

      <div className="relative flex flex-col-reverse lg:flex-row items-center justify-between gap-16 max-w-6xl mx-auto">
        
        {/* Text Content */}
        <div className="text-left max-w-3xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900">
            PLAN YOUR DREAM<br />
            <span className="font-semibold">WITH OUR SERVICE</span>
          </h1>
          <p className="uppercase text-sm font-semibold tracking-wider text-gray-700">
            Innovative and sustainable architecture tailored to your vision.
          </p>
          <p className="text-gray-600 text-sm md:text-base">
            Our architectural services blend creativity with functionality to shape environments that inspire. From residential to commercial projects, we focus on
             designing structures that are not only visually striking but also energy-efficient, structurally sound, and suited to your specific lifestyle or business 
             needs. We turn concepts into reality with a deep understanding of space, light, and form. We craft timeless and functional architectural designs that 
             blend aesthetics with structural integrity—turning your ideas into iconic spaces.


          </p>
          <div className="flex flex-row items-center justify-start gap-2 md:gap-4 md:pt-4">
            <Link href="/contact" className="mt-6 px-4 p-3 whitespace-nowrap border-black hover:border-black cursor-pointer border-2 text-md font-bold tracking-widest hover:bg-amber-50 hover:text-black rounded-full bg-black text-white">
              GET IN TOUCH
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="shadow-xl relative w-full max-w-sm">
          <Image
            src="/archi/3.jpg" 
            alt="image1"
            width={400}
            height={500}
            className="object-cover shadow-lg rounded-md"
          />
        </div>
      </div>
    </section>
  )
}
