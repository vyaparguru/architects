// components/FeaturedProjects.js
import Image from "next/image";

const projects = [
  { title: "The Glass House", image: "/archi/1.jpg" },
  { title: "The Grid House", image: "/archi/2.jpg" },
  { title: "The Arch Villa", image: "/archi/4.jpg" },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-amber-50 py-10 md:py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-10 md:text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="overflow-hidden shadow-md hover:shadow-xl transition">
              <Image src={project.image} alt={project.title} width={600} height={400} className="object-cover" />
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
