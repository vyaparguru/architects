"use client"

import { useEffect, useState, useRef } from 'react'

const AutoImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const touchStartX = useRef(null)
    const touchEndX = useRef(null)

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length)
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)

    useEffect(() => {
        const interval = setInterval(nextSlide, 4000)
        return () => clearInterval(interval)
    }, [images.length])

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX
    }

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX
    }

    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return
        const delta = touchStartX.current - touchEndX.current
        if (delta > 50) nextSlide()
        else if (delta < -50) prevSlide()
        touchStartX.current = null
        touchEndX.current = null
    }

    return (
        <div
            className="relative w-full h-[60vh] md:h-[100vh] overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {images.map((src, idx) => (
                <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                    <img
                        src={src}
                        alt={`image${idx + 1}`}
                        className="w-full h-full object-cover"
                    />

                    {/* Centered and styled number */}
                    {idx === currentIndex && (
                        <div className="absolute bottom-1 left-14 md:left-28 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-5xl font-extrabold bg-black bg-opacity-40 px-5 py-4 md:px-5 md:py-4 rounded-full shadow-xl backdrop-blur-md animate-zoomIn">
                            {idx + 1}
                        </div>
                    )}
                </div>
            ))}

            {/* Navigation Arrows (Desktop only) */}
            <button
                onClick={prevSlide}
                className="flex absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl bg-black bg-opacity-40 hover:bg-opacity-70 p-3 rounded-full z-20"
            >
                ‹
            </button>
            <button
                onClick={nextSlide}
                className="flex absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl bg-black bg-opacity-40 hover:bg-opacity-70 p-3 rounded-full z-20"
            >
                ›
            </button>
        </div>
    )
}
export default  AutoImageSlider