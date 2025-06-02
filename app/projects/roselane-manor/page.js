"use client"
import ProjectDetails from "@/components/ProjectDetails";

export default function Roselane() {
    return (
        <>
            <div className="relative bg-cover bg-center h-[50vh] md:h-[60vh]" style={{ backgroundImage: "url('/hero.jpg')" }}>
                <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-4xl md:text-6xl text-white font-semibold tracking-wide text-center">
                        Roselane Manor
                    </h1>
                </div>
            </div>
            <ProjectDetails
                title="Roselane Manor"
                category="Residential"
                size="5500 sq.ft"
                year="2024"
                intro={[]}
                descriptionBlocks={[]}
                mainImage="/projects/6.JPG"
                galleryImages={[
                    { src: "/projects/roselane-manor/1.jpg", colSpan: 2, height: 64 },
                    { src: "/projects/roselane-manor/2.jpg", colSpan: 2, height: 64 },
                    { src: "/projects/roselane-manor/3.jpg", colSpan: 2, height: 64 },
                    { src: "/projects/roselane-manor/4.jpg", colSpan: 2, height: 64 },
                    { src: "/projects/roselane-manor/5.jpg", colSpan: 2, height: 64 },
                    { src: "/projects/roselane-manor/6.jpg", colSpan: 2, height: 64 },
                ]}
                mainImageHeight = "h-[200px] md:h-[340px]"
            />
        </>
    );
}
