"use client"
import ProjectDetails from "@/components/ProjectDetails";

export default function Casa() {
    return (
        <>
            <div className="relative bg-cover bg-center h-[50vh] md:h-[60vh]" style={{ backgroundImage: "url('/hero.jpg')" }}>
                <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-4xl md:text-6xl text-white font-semibold tracking-wide text-center">
                        Casa Flora
                    </h1>
                </div>
            </div>
            <ProjectDetails
                title="Casa Flora"
                category="Residential"
                size="35,000 sq.ft"
                year="Foundation Stage"
                intro={[]}
                descriptionBlocks={[]}
                mainImage="/projects/11.jpg"
                galleryImages={[
                    // { src: "/projects/casa-flora/1.jpg", colSpan: 2, height: 64 },
                    // { src: "/projects/casa-flora/2.jpg", colSpan: 2, height: 64 },
                    // { src: "/projects/casa-flora/3.jpg", colSpan: 2, height: 64 },
                    // { src: "/projects/casa-flora/4.jpg", colSpan: 2, height: 64 },
                    // { src: "/projects/casa-flora/5.jpg", colSpan: 2, height: 64 },
                    // { src: "/projects/casa-flora/6.jpg", colSpan: 2, height: 64 },
                ]}
                mainImageHeight = "w-full aspect-[5/4] md:aspect-[5/4] relative"
            />
        </>
    );
}
