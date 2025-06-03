"use client"
import ProjectDetails from "@/components/ProjectDetails";

export default function Elan() {
    return (
        <>
            <div className="relative bg-cover bg-center h-[50vh] md:h-[60vh]" style={{ backgroundImage: "url('/hero.jpg')" }}>
                <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-4xl md:text-6xl text-white font-semibold tracking-wide text-center">
                        The Grand Elan
                    </h1>
                </div>
            </div>
            <ProjectDetails
                title="The Grand Elan"
                category="Residential"
                size="7000 sq.ft"
                year="Site Under Process Lanter Stage"
                intro={[]}
                descriptionBlocks={[]}
                mainImage="/projects/10.jpg"
                galleryImages={[
                    // { src: "/projects/the-grand-elan/1.jpg", colSpan: 2, height: 64 },
                    // { src: "/projects/the-grand-elan/2.jpg", colSpan: 2, height: 64 },
                    // { src: "/projects/the-grand-elan/3.jpg", colSpan: 2, height: 64 },
                    // { src: "/projects/the-grand-elan/4.jpg", colSpan: 2, height: 64 },
                    // { src: "/projects/the-grand-elan/5.jpg", colSpan: 2, height: 64 },
                    // { src: "/projects/the-grand-elan/6.jpg", colSpan: 2, height: 64 },
                ]}
                mainImageHeight = "w-full aspect-[7/6] md:aspect-[7/6] relative"
            />
        </>
    );
}
