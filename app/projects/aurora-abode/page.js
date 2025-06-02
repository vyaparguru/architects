"use client"
import ProjectDetails from "@/components/ProjectDetails";

export default function Aurora() {
    return (
        <>
            <div className="relative bg-cover bg-center h-[60vh]" style={{ backgroundImage: "url('/hero.jpg')" }}>
                <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-4xl md:text-6xl text-white font-semibold tracking-wide text-center">
                        Aurora Abode
                    </h1>
                </div>
            </div>
            <ProjectDetails
                title="Aurora Abode"
                category="Residential"
                size="9000 sq.ft"
                year="2024"
                intro={[
                    "At Emphasis, the journey from vision to reality is as meticulously crafted as the blueprint itself. The Harminder Singh Residence, nestled in the quiet elegance of Ramneek Avenue, showcases our commitment to detail and delivery across every phase of execution.",
                    
                    "From the initial concept to on-ground coordination, we managed every aspect of execution — material procurement, on-site supervision, and coordination with structural, MEP, and HVAC teams — ensuring design integrity at every layer. The home’s scale demanded not just design finesse, but also logistical precision. Our team maintained close communication with the client and consultants to keep timelines on track and quality uncompromised."

                ]}
                descriptionBlocks={[
                    "Interior Drawings & Finishing Touches: Our interior drawing set was not just a technical roadmap but a design narrative — each elevation, joinery detail, and material specification was designed to reflect the calm elegance the client envisioned.",
                    "Every built-in was detailed with layered drawings, including exact edge profiles, handle cutouts, and electrical routing. Special attention was given to ceiling integrations and lighting troughs to enhance the ambience with hidden lighting and subtle highlights. Wall finishes, window detailing, and floor junctions were coordinated down to the millimeter.",
                    "The Foyer, A Thoughtful First Impression: Pictured here, the foyer sets the tone for the residence — intimate, inviting, and artfully composed. A neutral palette, offset by forest green accents and soft textures, creates a grounding calm as soon as one steps inside. Wall-mounted typographic frames curated by our in-house styling team add warmth and a sense of personality.",
                    "Details like the custom fluted stools, brass moon sculptures, and layered ceiling lighting bring a boutique-hotel-like charm to the space. Framed glass openings ensure the space feels connected, without compromising privacy. Every element, from the accent tables to the subtle shadow lines in the ceiling, was executed exactly as drawn — a testament to on-site precision and coordinated execution."
                ]}
                mainImage="/projects/1.JPG"
                galleryImages={[
                    { src: "/projects/aurora-abode/1.JPG", colSpan: 2, height: 64 },
                    { src: "/projects/aurora-abode/2.JPG", colSpan: 2, height: 64 },
                    { src: "/projects/aurora-abode/3.JPG", colSpan: 2, height: 64 },
                    { src: "/projects/aurora-abode/4.JPG", colSpan: 2, height: 64 },
                    { src: "/projects/aurora-abode/5.JPG", colSpan: 2, height: 64 },
                    { src: "/projects/aurora-abode/6.JPG", colSpan: 2, height: 64 },
                ]}
                mainImageHeight = "h-[200px] md:h-[300px]"
            />
        </>
    );
}
