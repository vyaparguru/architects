"use client"
import ProjectDetails from "@/components/ProjectDetails";

export default function Grid() {
    return (
        <>
            <div className="relative bg-cover bg-center h-[50vh] md:h-[60vh]" style={{ backgroundImage: "url('/hero.jpg')" }}>
                <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-4xl md:text-6xl text-white font-semibold tracking-wide text-center">
                        The Grid House
                    </h1>
                </div>
            </div>
            <ProjectDetails
                title="The Grid House"
                category="Residential"
                size="5000 sq.ft"
                year="Under Execution – Ceiling Stage"
                intro={[
                    "Currently in the ceiling phase of construction, The Grid House stands as a bold expression of geometry and rhythm in architectural form. Designed for Mr. Jimmy Salhotra, this 5,000 sqft urban home features a dynamic interplay of vertical fins, floating slabs, and deeply carved volumes — all grounded by a strong, linear material palette."
                ]}
                descriptionBlocks={[
                    "The façade, as seen here, is a sculptural composition of light and shadow. Vertical screens offer both privacy and drama, while wood-toned soffits and strategic landscaping soften the otherwise crisp architectural grid. Glass insertions and open terraces add breathability and contrast, allowing indoor and outdoor spaces to flow seamlessly.",
                    "Design Language & Progress:True to its name, The Grid House is driven by a precise modularity — reflected not only in its visual aesthetic but also in its structural and service planning. The interiors are being designed with the same clarity: clean lines, bold accents, and minimalist luxury. The home has now reached the ceiling stage, with electrical, HVAC, and framing works underway.",
                    "Each step is being executed with precision, aligned with our signature detailing process. Every junction — be it material, lighting, or layout — is orchestrated to reinforce the home’s structured elegance.",
                    "This residence is poised to become a landmark of modern residential design in its neighborhood — bold, refined, and unmistakably Emphasis."
                ]}
                mainImage="/projects/4.jpg"
                galleryImages={[
                    // { src: "/projects/the-grid-house/1.jpg", colSpan: 2, height: 64 },
                    // { src: "/projects/the-grid-house/2.jpg", colSpan: 2, height: 64 },
                    // { src: "/projects/the-grid-house/3.jpg", colSpan: 2, height: 64 },
                    // { src: "/projects/the-grid-house/4.jpg", colSpan: 2, height: 64 },
                    // { src: "/projects/the-grid-house/5.jpg", colSpan: 2, height: 64 },
                    // { src: "/projects/the-grid-house/6.jpg", colSpan: 2, height: 64 },
                ]}
                mainImageHeight = "w-full aspect-[16/9] md:aspect-[16/9] relative"
            />
        </>
    );
}
