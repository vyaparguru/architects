"use client"
import ProjectDetails from "@/components/ProjectDetails";

export default function Urban() {
    return (
        <>
            <div className="relative bg-cover bg-center h-[60vh]" style={{ backgroundImage: "url('/hero.jpg')" }}>
                <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-4xl md:text-6xl text-white font-semibold tracking-wide text-center">
                        Urban Arches
                    </h1>
                </div>
            </div>
            <ProjectDetails
                title="Urban Arches"
                category="Residential"
                size="6000 sq.ft"
                year="2024"
                intro={[
                    "For Emphasis Architects, the Urban Arches residence was more than just a home — it was a full-service design and delivery promise. From the first line drawn to the final cushion fluffed, this 6,000 sqft private residence was envisioned, detailed, and executed entirely by our team. The client entrusted us with a rare opportunity: complete freedom to design, construct, and deliver a fully styled and move-in-ready home — all they had to do was walk in with their clothes."

                ]}
                descriptionBlocks={[
                    "A Turnkey Dream, Delivered:From site clearing to civil structure, from waterproofing systems to final door handles, every stage was handled in-house or under our direct supervision. The concept was inspired by soft urban curves and transitional elements, which led to the birth of the name “Urban Arches.” These forms shaped everything — from façade elements and ceiling contours to window niches and even the custom furniture pieces.",
                    "Our architectural and interior teams worked seamlessly, ensuring each drawing, from structural grid lines to furniture joinery, flowed into the next. Materials were carefully sourced, with finishes mock-tested on-site. Lighting layouts, switch placements, HVAC grills, and automation points were all coordinated down to the wire.",
                    "Interiors That Feel Intentional:Custom-designed furniture, curated décor, and warm tactile finishes define the interiors. Every item, from the main dining table to the last planter, was handpicked or custom-made for the space. The home embodies layered luxury — elegant but lived-in, refined but relaxed.", ,
                    "Soft arches subtly recur throughout — in the wall mouldings, built-ins, and even the artwork framing. Each room opens up thoughtfully into the next, with natural light playing a central role in tying the interiors together. The muted palette is brought to life with intentional highlights — brass inlays, textured wallpapers, and ambient cove lighting.",
                    "Effortless Living, Thoughtfully Engineered:The final handover was more than a walkthrough — it was a reveal. Every towel folded, every candle lit, the entire space was ready for life to begin. Built-in wardrobes were finished, kitchens were fully fitted, curtains hung, and beds made. This was architecture not just completed, but curated for comfort.",
                    "The Urban Arches home stands as a proud example of what full-service design and execution can achieve — where the client’s only responsibility is to bring their presence.",
                ]}
                mainImage="/projects/2.JPG"
                galleryImages={[
                    { src: "/projects/urban-arches/1.JPG", colSpan: 2, aspect: "16/11" },
                    { src: "/projects/urban-arches/2.JPG", colSpan: 2, aspect: "16/11" },
                    { src: "/projects/urban-arches/3.JPG", colSpan: 2, aspect: "16/11" },
                    { src: "/projects/urban-arches/4.JPG", colSpan: 2, aspect: "16/11" },
                    { src: "/projects/urban-arches/5.JPG", colSpan: 2, aspect: "16/11" },
                    { src: "/projects/urban-arches/6.JPG", colSpan: 2, aspect: "16/11" },
                ]}
                mainImageHeight="w-full aspect-[16/11] md:aspect-[16/11] relative"
            />
        </>
    );
}
