"use client"
import Image from "next/image";
export default function ProjectsSection() {
  const projects = [
    {
      title: "HOTELS",
      author: "Kevin Johnson",
      category: "Interior",
      date: "07/02/2017",
      description:
        "Ienean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullam corper ultricies nisi. Nam eget dui.",
      image: "/hero.jpg", // Replace with actual image path
    },
    {
      title: "FURNITURE",
      author: "Kevin Johnson",
      category: "Interior",
      date: "07/03/2017",
      description:
        "Nam imperdiet. Etiam ultricies nisi vel augue. Maecenas tempus, tellus eget condimentum rhoncus.",
      image: "/hos.jpg", // Replace with actual image path
    },
    {
      title: "BUILDINGS",
      author: "Kevin Johnson",
      category: "Interior",
      date: "07/04/2017",
      description:
        "Cenoan imperdiet. Etiam ultricies nisi vel augue. Curabitur ullam corper ultricies nisi. Nam eget dui.",
      image: "/hero.jpg", // Replace with actual image path
    },
  ];

  return (
    <section className="max-w-full mx-auto px-6 md:px-12 lg:px-28 py-16 md:py-24 bg-amber-50 text-gray-900">
      {/* Heading */}
      <h2 className="text-4xl md:text-6xl md:text-center">
        ARCHITECTURE PROJECTS
      </h2>

      {/* Subtitle */}
      <p className="text-black text-lg md:text-xl md:text-center mt-4 max-w-4xl mx-auto font-light leading-relxed">
      The profession of interior design has been a consequence of the development of society and the complex architecture that has resulted from the development of industrial processes. The pursuit of effective use of space, user well-being and functional design has contributed to the development of the contemporary interior design profession.
      </p>

      {/* Project Grid */}
      <div className="grid md:grid-cols-3 gap-8 mt-20">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col ">
            {/* Project Image */}
            <div className="w-full h-64 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Details */}
            <h3 className="text-xl font-medium mt-4">{project.title}</h3>
            <p className="text-sm text-gray-500">
              by {project.author} / {project.category} / {project.date}
            </p>

            {/* Description */}
            <p className="text-gray-600 mt-2 max-w-xs">{project.description}</p>

            {/* Read More Link */}
            <a
              href="#"
              className="mt-4 text-gray-900 font-medium flex items-center gap-2 hover:underline"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
