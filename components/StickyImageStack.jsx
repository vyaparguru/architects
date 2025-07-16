import Link from 'next/link'
import React from 'react'

const StickyImageStack = ({
    images = [],
    videos = [],
    topImage,
    projectName
}) => {
    return (
        <>
            <div className="w-full relative pt-16">
                {/* Top Section: Image Left, Text Right */}
                <section className="sticky top-0 h-[50vh] md:h-[100vh] w-full flex flex-col lg:flex-row bg-white z-10">
                    <div className="lg:w-3/4 w-full aspect-[3/2] h-auto lg:h-full">
                        <img
                            src={topImage}
                            alt="Top Section"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="lg:w-1/4 w-full h-1/2 lg:h-full flex items-center justify-center bg-white">
                        <h2 className="text-5xl tracking-widest text-center text-black py-60 md:py-0 uppercase">{projectName}</h2>
                    </div>
                </section>

                {/* Sticky Image Stack Section */}
                {images && images.length > 0 && (
                    <div className="flex flex-col lg:flex-row w-full relative z-20">
                        {/* Left Section - Sticky Heading */}
                        <div className="lg:w-[35%] w-full h-40 lg:h-screen md:sticky md:top-0 bg-white flex items-center justify-center md:pt-20 p-6 z-20">
                            <h2 className="text-4xl md:text-5xl tracking-widest text-center text-black">Explore our Visual Story</h2>
                        </div>

                        {/* Right Section - Stacked Sticky Images */}
                        <div className="lg:w-3/4 w-full relative bg-white">
                            {projectName === 'Aurora Abode' ? (
                                <div className="flex overflow-x-auto space-x-4 h-[60vh] md:h-[100vh] ">
                                    {images.map((src, idx) => (
                                        <div
                                            key={idx}
                                            className="flex-shrink-0 w-[90vw] md:w-[70vw] h-full flex items-center justify-center"
                                        >
                                            <img
                                                src={src}
                                                alt={`image${idx + 1}`}
                                                className="w-full h-full object-cover "
                                            />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <>
                                    {images.map((src, idx) => (
                                        <div
                                            key={idx}
                                            className="sticky top-0 flex items-center justify-center h-[60vh] md:h-[100vh] w-full"
                                            style={{ zIndex: idx + 1 }}
                                        >
                                            <img
                                                src={src}
                                                alt={`image${idx + 1}`}
                                                className="w-full h-full object-cover transition-all duration-500"
                                            />
                                        </div>
                                    ))}
                                    <div style={{ height: `${images.length}vh` }}></div>
                                </>
                            )}
                        </div>

                    </div>
                )}

            </div>
            {/* Video Reels Section */}
            {videos && videos.length > 0 && (
                <section className="w-full py-16 md:py-20 bg-white flex flex-col items-center">
                    <h2 className="text-4xl md:text-5xl text-black tracking-widest mb-10 md:mb-16">Watch our Reels</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 w-full justify-items-center">
                        {videos.map((videoSrc, idx) => (
                            <div
                                key={idx}
                                className="w-[90vw] max-w-[320px] aspect-[3/4] md:aspect-[3/4] bg-black rounded-lg overflow-hidden shadow-lg flex justify-center items-center mx-auto"
                            >
                                <video
                                    src={videoSrc}
                                    controls
                                    autoPlay
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                    poster=""
                                />
                            </div>
                        ))}
                    </div>
                </section>
            )}
            {/* Call to Action */}
            <div className=" px-8 md:px-0 md:text-center bg-white py-16 md:py-10">
                <h3 className="text-4xl font-semibold text-black">
                    Let's Discuss Your Next Project
                </h3>
                <p className="mt-4 text-black">
                    Get in Touch with us
                </p>
                <Link href="/contact">
                    <button className="mt-6 px-7 p-3 bg-black text-lg md:text-md hover:border-black border-2 hover:border-2 hover:bg-white hover:text-black text-white rounded-full ">
                        Contact Us
                    </button>
                </Link>
            </div>
        </>
    )
}

export default StickyImageStack