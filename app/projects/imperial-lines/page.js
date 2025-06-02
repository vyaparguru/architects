"use client"
import ProjectDetails from "@/components/ProjectDetails";

export default function Imperial() {
    return (
        <>
            <div className="relative bg-cover bg-center h-[60vh]" style={{ backgroundImage: "url('/hero.jpg')" }}>
                <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-4xl md:text-6xl text-white font-semibold tracking-wide text-center">
                        Imperial Lines
                    </h1>
                </div>
            </div>
            <ProjectDetails
                title="Imperial Lines"
                category="Residential"
                size="15,000 sq.ft"
                year="Wood Work Stage Ongoing"
                intro={[]}
                descriptionBlocks={[]}
                mainImage="/projects/9.jpg"
                galleryImages={[
                    { src: "/projects/imperial-lines/1.jpg", colSpan: 2, height: 64 },
                    { src: "/projects/imperial-lines/2.jpg", colSpan: 2, height: 64 },
                    { src: "/projects/imperial-lines/3.jpg", colSpan: 2, height: 64 },
                    { src: "/projects/imperial-lines/4.jpg", colSpan: 2, height: 64 },
                    { src: "/projects/imperial-lines/5.jpg", colSpan: 2, height: 64 },
                    { src: "/projects/imperial-lines/6.jpg", colSpan: 2, height: 64 },
                ]}
                mainImageHeight = "h-[200px] md:h-[400px]"
            />
        </>
    );
}
