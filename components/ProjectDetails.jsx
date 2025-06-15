"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProjectDetails({
    title,
    category,
    size,
    year,
    intro,
    descriptionBlocks,
    mainImage,
    galleryImages,
    mainImageHeight
}) {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const openLightbox = (idx) => {
        setLightboxIndex(idx);
        setLightboxOpen(true);
    };

    const closeLightbox = () => setLightboxOpen(false);

    const prevImage = (e) => {
        e.stopPropagation();
        setLightboxIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    };

    const nextImage = (e) => {
        e.stopPropagation();
        setLightboxIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="max-w-screen bg-white mx-auto px-6 md:px-48 pt-40 pb-20">
            <div className="flex flex-col lg:flex-row gap-10">
                <div className="lg:w-1/2 w-full flex flex-col justify-between">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">{title}</h2>
                        <div className="mb-6 text-md text-black space-y-1">
                            <p><span className="font-extrabold">Category:</span> {category}</p>
                            <p><span className="font-extrabold">Size:</span> {size}</p>
                            <p><span className="font-extrabold">Year Completed:</span> {year}</p>
                        </div>
                        {Array.isArray(intro) ? (
                            intro.map((para, idx) => (
                                <p key={idx} className="text-lg font-light leading-relaxed text-black mb-4">{para}</p>
                            ))
                        ) : (
                            <p className="text-lg font-light leading-relaxed text-black">{intro}</p>
                        )}
                    </div>
                </div>

                <div className="lg:w-1/2 w-full">
                    <div className={`relative w-full overflow-hidden shadow-lg ${mainImageHeight}`}>
                        <Image
                            src={mainImage}
                            alt="image1"
                            fill
                            className="object-cover rounded-md"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-5 text-lg font-light leading-relaxed text-black">
                {descriptionBlocks.map((block, idx) => {
                    const headingMatch = block.match(/^(.+?:)\s*(.*)$/);
                    if (headingMatch) {
                        const heading = headingMatch[1];
                        const rest = headingMatch[2];
                        return (
                            <div key={idx} className="mb-6">
                                <h4 className="text-4xl font-semibold mb-2 mt-10">{heading}</h4>
                                <p>{rest}</p>
                            </div>
                        );
                    }
                    return <p key={idx}>{block}</p>;
                })}
            </div>

            {galleryImages?.length > 0 && (
                <div className="mt-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 ">
                        {galleryImages.map((img, idx) => (
                            <div
                                key={idx}
                                className={[
                                    "col-span-1",
                                    img.colSpan === 1 && "lg:col-span-1",
                                    img.colSpan === 2 && "lg:col-span-2",
                                    img.colSpan === 3 && "lg:col-span-3",
                                    img.colSpan === 4 && "lg:col-span-4",
                                    img.colSpan === 5 && "lg:col-span-5",
                                    img.colSpan === 6 && "lg:col-span-6",
                                    "relative",
                                    "overflow-hidden",
                                    img.aspect ? `aspect-[${img.aspect}]` : "aspect-[4/3]",
                                    "cursor-pointer"
                                ].filter(Boolean).join(" ")}
                                onClick={() => openLightbox(idx)}
                                tabIndex={0}
                                role="button"
                                aria-label="Open image in large view"
                            >
                                <Image
                                    src={img.src}
                                    alt={`image${idx + 1}`}
                                    fill
                                    className="object-cover object-center rounded-md"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Lightbox Modal */}
            {lightboxOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
                    onClick={closeLightbox}
                >
                    <button
                        className="absolute top-6 right-8 text-white text-4xl font-bold z-50"
                        onClick={closeLightbox}
                        aria-label="Close"
                    >
                        &times;
                    </button>
                    <button
                        className="absolute left-4 md:left-16 text-white text-3xl font-bold z-50 px-2 py-1 pb-3 bg-black/40 rounded-full"
                        onClick={prevImage}
                        aria-label="Previous image"
                    >
                        &#8592;
                    </button>
                    <div className="relative w-[90vw] h-[70vh] max-w-4xl flex items-center justify-center">
                        <Image
                            src={galleryImages[lightboxIndex].src}
                            alt={`Large image ${lightboxIndex + 1}`}
                            fill
                            className="object-contain rounded-lg"
                            priority
                        />
                    </div>
                    <button
                        className="absolute right-4 md:right-16 text-white text-3xl font-bold z-50 px-2 py-1 pb-3 bg-black/40 rounded-full"
                        onClick={nextImage}
                        aria-label="Next image"
                    >
                        &#8594;
                    </button>
                </div>
            )}

            <div className=" md:text-center pt-20">
                <h3 className="text-4xl font-semibold text-black">
                    Let’s discuss your project today.
                </h3>
                <p className="mt-4 text-black">
                    Email us at info@emphasisarchitects.com — we're here to help.
                </p>
                <Link href="/contact">
                    <button className="mt-6 px-7 p-3 bg-black text-lg md:text-md hover:border-black border-2 hover:border-2 hover:bg-white hover:text-black text-white rounded-full ">
                        Contact Us
                    </button>
                </Link>
            </div>
        </div>
    );
}