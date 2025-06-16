"use client"
import Image from 'next/image'
import Link from 'next/link'

export default function Project5() {
    return (
        <section className="flex flex-col md:flex-row w-full min-h-screen bg-white">
            {/* Image Section */}
            <div className="w-full md:w-[70%] aspect-[4/3] md:aspect-auto h-auto md:h-auto relative">
                <Image
                    src="/projects/5.jpg"
                    alt="the glass house"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 70vw"
                    priority
                />
            </div>
            {/* Text Section */}
            <div className="w-full md:w-[30%] flex flex-col justify-center items-center px-6 md:px-12 py-10 md:py-0 text-center">
                <h2 className="text-3xl md:text-4xl md:font-medium tracking-widest text-black">THE GLASS HOUSE</h2>
                <p className="mt-4 text-lg md:text-xl font-light leading-relaxed text-black">
                    Through expansive glazing and open layouts, Emphasis Architects creates a sanctuary where transparency, light, and nature are integral to daily living.
                </p>
                <div className="flex gap-8 mt-1 md:mt-6 text-black justify-center">
                    <div>
                        <div className="text-md font-extrabold">Size</div>
                        <div className="text-md">6000 sq.ft</div>
                    </div>
                    <div>
                        <div className="text-md font-extrabold">Year Completed</div>
                        <div className="text-md">2023</div>
                    </div>
                </div>
                <Link href="/projects/the-glass-house" className="mt-6 text-black w-fit">
                    <span className="bg-black border-2 border-black hover:bg-white hover:text-black text-white px-6 p-3 rounded-full flex items-center gap-2 transition">
                        View Project<span className="text-lg ml-2">➔</span>
                    </span>
                </Link>
            </div>
        </section>
    )
}