import Image from 'next/image'
import Link from 'next/link'

export default function Project4() {
    return (
        <section className="flex flex-col md:flex-row-reverse w-full min-h-screen bg-white">
            {/* Image Section */}
            <div className="w-full md:w-[70%] aspect-[4/3] md:aspect-auto h-auto md:h-auto relative">
                <Image
                    src="/projects/4.jpg"
                    alt="the grid house"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 65vw"
                    priority
                />
            </div>
            {/* Text Section */}
            <div className="w-full md:w-[30%] flex flex-col justify-center items-center px-6 md:px-12 py-10 md:py-0 text-center">
                <h2 className="text-4xl md:font-medium tracking-widest text-black">THE GRID HOUSE</h2>
                <p className="mt-4 text-lg md:text-xl font-light leading-relaxed text-black">
                   The Grid House reimagines spatial organization through a lens of clarity and elegance. Currently at the ceiling stage, this 5,000 sq.ft residence is designed to maximize light, flow, and connection, embodying Emphasis Architects’ pursuit of environments that nurture both function and beauty.
                </p>
                <div className="flex gap-8 mt-6 text-black justify-center">
                    <div>
                        <div className="text-md font-extrabold">Size</div>
                        <div className="text-md ">5000 sq.ft</div>
                    </div>
                    <div>
                        <div className="text-md font-extrabold">Year Completed</div>
                        <div className="text-md ">Ceiling stage</div>
                    </div>
                </div>
                <Link href="/projects/the-grid-house" className="mt-6 text-black w-fit">
                    <span className="bg-black border-2 border-black hover:bg-white hover:text-black text-white px-6 p-3 rounded-full flex items-center gap-2 transition">
                        View Project<span className="text-lg ml-2">➔</span>
                    </span>
                </Link>
            </div>
        </section>
    )
}