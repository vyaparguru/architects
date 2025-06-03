"use client"
import ProjectDetails from "@/components/ProjectDetails";

export default function Glass() {
    return (
        <>
            <div className="relative bg-cover bg-center h-[50vh] md:h-[60vh]" style={{ backgroundImage: "url('/hero.jpg')" }}>
                <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-4xl md:text-6xl text-white font-semibold tracking-wide text-center">
                        The Glass House
                    </h1>
                </div>
            </div>
            <ProjectDetails
                title="The Glass House"
                category="Residential"
                size="6000 sq.ft"
                year="2023"
                intro={[
                    "Completed in 2023, The Glass House is a bold architectural statement nestled in the heart of Eldeco — a home that reflects light, openness, and clarity in design. Designed for Mr. Gopal Ji, this 6,000 sqft residence reimagines urban living through a striking façade composed of large glazed panels, sculpted balconies, and organic vertical surfaces."
                ]}
                descriptionBlocks={[
                    "Transparency Meets Texture:The defining feature of this villa is its play of transparency and material contrast. The extensive use of glass not only amplifies natural light but also fosters a seamless indoor-outdoor dialogue, blurring boundaries between the built form and its landscape. Wooden cantilevered balconies and brick-clad curves soften the geometry, creating a rhythm of solidity and openness.",
                    "The modern angular roof canopy and metal lattice crown the structure — adding a sense of elevation and architectural drama while shading the upper deck. Vertical gardens and planters weave greenery throughout, balancing structure with softness.",
                    "Crafted for Modern Living:Internally, the design is curated to reflect warmth and functionality. With spacious lounges, double-height volumes, and integrated terraces, the home is tailored for both everyday comfort and grand hosting. Carefully executed interiors echo the modern exterior — clean lines, layered lighting, and curated details.",
                    "Delivered as a turnkey home, The Glass House reflects Emphasis Architects’ belief in complete design responsibility — from concept to key handover. It stands as a timeless example of architecture that breathes, welcomes, and uplifts."
                ]}
                mainImage="/projects/5.jpg"
                galleryImages={[
                    // { src: "/projects/the-glass-house/1.jpg", colSpan: 2, height: 64 },
                    // { src: "/projects/the-glass-house/2.jpg", colSpan: 2, height: 64 },
                    // { src: "/projects/the-glass-house/3.jpg", colSpan: 2, height: 64 },
                    // { src: "/projects/the-glass-house/4.jpg", colSpan: 2, height: 64 },
                    // { src: "/projects/the-glass-house/5.jpg", colSpan: 2, height: 64 },
                    // { src: "/projects/the-glass-house/6.jpg", colSpan: 2, height: 64 },
                ]}
                mainImageHeight = "w-full aspect-[16/9] md:aspect-[16/9] relative"
            />
        </>
    );
}
