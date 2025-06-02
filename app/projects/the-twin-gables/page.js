"use client"
import ProjectDetails from "@/components/ProjectDetails";

export default function Gables() {
    return (
        <>
            <div className="relative bg-cover bg-center h-[50vh] md:h-[60vh]" style={{ backgroundImage: "url('/hero.jpg')" }}>
                <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-4xl md:text-6xl text-white font-semibold tracking-wide text-center">
                        The Twin Gables
                    </h1>
                </div>
            </div>
            <ProjectDetails
                title="The Twin Gables"
                category="Residential"
                size="14,000 sq.ft"
                year="Wood Work Stage Ongoing"
                intro={[]}
                descriptionBlocks={[]}
                mainImage="/projects/8.jpg"
                galleryImages={[
                    { src: "/projects/the-twin-gables/1.jpg", colSpan: 2, height: 64 },
                    { src: "/projects/the-twin-gables/2.jpg", colSpan: 2, height: 64 },
                    { src: "/projects/the-twin-gables/3.jpg", colSpan: 2, height: 64 },
                    { src: "/projects/the-twin-gables/4.jpg", colSpan: 2, height: 64 },
                    { src: "/projects/the-twin-gables/5.jpg", colSpan: 2, height: 64 },
                    { src: "/projects/the-twin-gables/6.jpg", colSpan: 2, height: 64 },
                ]}
                mainImageHeight = "h-[200px] md:h-[400px]"
            />
        </>
    );
}
