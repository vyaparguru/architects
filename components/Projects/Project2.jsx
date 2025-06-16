import Image from 'next/image'
import Link from 'next/link'

export default function Project2() {
    return (
        <section className="flex flex-col md:flex-row-reverse w-full min-h-screen bg-white">
            {/* Image Section */}
            <div className="w-full md:w-[70%] aspect-[4/3] md:aspect-auto h-auto md:h-auto relative">
                <Image
                    src="/projects/2.JPG"
                    alt="urban arches"
                    fill
                    className="object-cover object-top "
                    sizes="(max-width: 768px) 100vw, 65vw"
                    priority
                />
            </div>
            {/* Text Section */}
            <div className="w-full md:w-[30%] flex flex-col justify-center items-center px-6 md:px-12 py-10 md:py-0 text-center">
                <h2 className="text-3xl md:text-4xl md:font-medium tracking-widest text-black">URBAN ARCHES</h2>
                <p className="mt-4 text-lg md:text-xl font-light leading-relaxed text-black">
                    Completed in 2024, this 6,000 sq.ft project features graceful curves and contemporary lines, resulting in a living environment that is both timeless and attuned to modern lifestyles.
                </p>
                <div className="flex gap-8 mt-1 md:mt-6 text-black justify-center">
                    <div>
                        <div className="text-md font-extrabold">Size</div>
                        <div className="text-md">6000 sq.ft</div>
                    </div>
                    <div>
                        <div className="text-md font-extrabold">Year Completed</div>
                        <div className="text-md">2024</div>
                    </div>
                </div>
                <Link href="/projects/urban-arches" className="mt-6 text-black w-fit">
                    <span className="bg-black border-2 border-black hover:bg-white hover:text-black text-white px-6 p-3 rounded-full flex items-center gap-2 transition">
                        View Project<span className="text-lg ml-2">➔</span>
                    </span>
                </Link>
            </div>
        </section>
    )
}