import Image from 'next/image'
import Link from 'next/link'

export default function Project11() {
    return (
        <section className="flex flex-col md:flex-row items-center gap-10 px-6 md:px-48 py-16 md:py-24 bg-amber-50">
            <div className="md:w-1/2 w-full">
                <div className="w-full aspect-[5/4] md:aspect-[5/4] relative">
                    <Image
                        src="/projects/11.jpg"
                        alt="aurora abode"
                        fill
                        className="object-cover object-top rounded-md"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                    />
                </div>
            </div>
            <div className="md:w-1/2 w-full flex flex-col gap-2">
                <h2 className="text-4xl md:font-medium tracking-widest text-black uppercase">casa flora</h2>
                <p className="mt-4 text-lg md:text-xl font-light leading-relaxed text-black">
                    At Emphasis, we believe that interior design is an art of balance, where shapes, forms, and proportions come together to create a seamless and functional space. Our approach focuses on harmonizing geometric and organic elements to enhance aesthetics while ensuring practicality.
                </p>
                <div className="flex gap-8 mt-2 text-black">
                    <div>
                        <div className="text-md font-extrabold">Size</div>
                        <div className="text-md">35,000 sq.ft</div>
                    </div>
                    <div>
                        <div className="text-md font-extrabold">Year Completed</div>
                        <div className="text-md">Foundation stage</div>
                    </div>
                </div>
                <Link href="/projects/casa-flora" className="mt-2 text-black w-fit">
                    <span className="bg-amber-50 border-2 border-black hover:bg-black hover:text-amber-50 text-black px-6 p-3 rounded-full flex items-center gap-2 transition">
                        View Project<span className="text-lg ml-2">➔</span>
                    </span>
                </Link>
            </div>
        </section>
    )
}