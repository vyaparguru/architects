"use client"
import ProjectDetails from "@/components/ProjectDetails";

export default function Villa() {
    return (
        <>
            {/* <div className="relative bg-cover bg-center h-[50vh] md:h-[60vh]" style={{ backgroundImage: "url('/hero.jpg')" }}>
                <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-4xl md:text-6xl text-white font-semibold tracking-wide text-center">
                        The Arch Villa
                    </h1>
                </div>
            </div> */}
            <ProjectDetails
                title="The Arch Villa"
                category="Residential"
                size="10,000 sq.ft"
                year="Under Execution – Woodwork Stage"
                intro={[
                    "Currently under execution, The Arch Villa is a classical French-themed farmhouse nestled in the serene surroundings of Patara. Spanning 10,000 sqft, this residence blends timeless European elegance with modern comforts, featuring proportioned facades, ornamental mouldings, and sweeping arches true to its name."
                ]}
                descriptionBlocks={[
                    "Designed for an NRI client placing their full trust in our team, this home is being handled with complete architectural and interior responsibility. The project has now progressed to the woodwork stage, where rich textures, carved details, and handcrafted finishes are beginning to bring the design vision to life.",
                    "This villa embodies the spirit of a classical retreat — a refined statement of trust, design, and craftsmanship in progress."
                ]}
                mainImage="/projects/6.JPG"
                galleryImages={[
                //     { src: "/projects/the-arch-villa/1.jpg", colSpan: 2, height: 64 },
                //     { src: "/projects/the-arch-villa/2.jpg", colSpan: 2, height: 64 },
                //     { src: "/projects/the-arch-villa/3.jpg", colSpan: 2, height: 64 },
                //     { src: "/projects/the-arch-villa/4.jpg", colSpan: 2, height: 64 },
                //     { src: "/projects/the-arch-villa/5.jpg", colSpan: 2, height: 64 },
                //     { src: "/projects/the-arch-villa/6.jpg", colSpan: 2, height: 64 },
                ]}
                mainImageHeight = "h-[200px] md:h-[310px]"
            />
        </>
    );
}
