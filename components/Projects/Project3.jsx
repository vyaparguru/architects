import Image from 'next/image'
import Link from 'next/link'

export default function Project3() {
    return (
        <section className="flex flex-col md:flex-row items-center gap-10 px-6 md:px-48 py-16 md:py-20 bg-amber-50">
            <div className="md:w-1/2 w-full">
                <div className="h-[200px] md:h-[400px] w-full relative">
                    <Image
                        src="/projects/3.jpg"
                        alt="the arch villa"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            </div>
            <div className="md:w-1/2 w-full flex flex-col gap-2">
                <h2 className="text-4xl md:font-medium tracking-widest text-black">THE ARCH VILLA</h2>
                <p className="mt-4 text-lg md:text-xl font-light leading-relaxed text-black">
                    At Emphasis, we believe that interior design is an art of balance, where shapes, forms, and proportions come together to create a seamless and functional space. Our approach focuses on harmonizing geometric and organic elements to enhance aesthetics while ensuring practicality.
                </p>
                <div className="flex gap-8 mt-2 text-black">
                    <div>
                        <div className="text-md font-extrabold">Size</div>
                        <div className="text-md">10,000 sq.ft</div>
                    </div>
                    <div>
                        <div className="text-md font-extrabold">Year Completed</div>
                        <div className="text-md">Site under process wood work stage</div>
                    </div>
                </div>
                <Link href="/projects/the-arch-villa" className="mt-2 text-black w-fit">
                    <span className="bg-amber-50 border-2 border-black hover:bg-black hover:text-amber-50 text-black px-6 p-3 rounded-full flex items-center gap-2 transition">
                        View Project<span className="text-lg ml-2">➔</span>
                    </span>
                </Link>
            </div>
        </section>
    )
}