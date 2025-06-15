import Image from 'next/image'
import Link from 'next/link'

export default function Project11() {
    return (
        <section className="flex flex-col md:flex-row w-full min-h-screen bg-white">
            {/* Image Section */}
            <div className="w-full md:w-[70%] aspect-[5/4] h-auto md:h-auto relative">
                <Image
                    src="/projects/11.jpg"
                    alt="casa flora"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 70vw"
                    priority
                />
            </div>
            {/* Text Section */}
            <div className="w-full md:w-[30%] flex flex-col justify-center items-center px-6 md:px-12 py-10 md:py-0 text-center">
                <h2 className="text-4xl md:font-medium tracking-widest text-black uppercase">casa flora</h2>
                <p className="mt-4 text-lg md:text-xl font-light leading-relaxed text-black">
                    Casa Flora, at the foundation stage and spanning 35,000 sq.ft, is a bold new chapter for Emphasis Architects. This project is conceived as a harmonious blend of geometric clarity and organic inspiration, setting the stage for a living experience that is both innovative and deeply rooted in nature.
                </p>
                <div className="flex gap-8 mt-6 text-black justify-center">
                    <div>
                        <div className="text-md font-extrabold">Size</div>
                        <div className="text-md">35,000 sq.ft</div>
                    </div>
                    <div>
                        <div className="text-md font-extrabold">Year Completed</div>
                        <div className="text-md">Foundation stage</div>
                    </div>
                </div>
                <Link href="/projects/casa-flora" className="mt-6 text-black w-fit">
                    <span className="bg-black border-2 border-black hover:bg-white hover:text-black text-white px-6 p-3 rounded-full flex items-center gap-2 transition">
                        View Project<span className="text-lg ml-2">➔</span>
                    </span>
                </Link>
            </div>
        </section>
    )
}