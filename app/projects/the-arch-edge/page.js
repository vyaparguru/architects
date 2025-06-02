"use client"
import ProjectDetails from "@/components/ProjectDetails";

export default function Arch() {
    return (
        <>
            <div className="relative bg-cover bg-center h-[60vh]" style={{ backgroundImage: "url('/hero.jpg')" }}>
                <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-4xl md:text-6xl text-white font-semibold tracking-wide text-center">
                        the Arch edge
                    </h1>
                </div>
            </div>
            <ProjectDetails
                title="The Arch Edge"
                category="Residential"
                size="6000 sq.ft"
                year="Site Under Process Ceiling Stage"
                intro={[]}
                descriptionBlocks={[]}
                mainImage="/projects/7.jpg"
                galleryImages={[
                    { src: "/projects/the-arch-edge/1.jpg", colSpan: 2, height: 64 },
                    { src: "/projects/the-arch-edge/2.jpg", colSpan: 2, height: 64 },
                    { src: "/projects/the-arch-edge/3.jpg", colSpan: 2, height: 64 },
                    { src: "/projects/the-arch-edge/4.jpg", colSpan: 2, height: 64 },
                    { src: "/projects/the-arch-edge/5.jpg", colSpan: 2, height: 64 },
                    { src: "/projects/the-arch-edge/6.jpg", colSpan: 2, height: 64 },
                ]}
                mainImageHeight = "h-[200px] md:h-[400px]"
            />
        </>
    );
}
