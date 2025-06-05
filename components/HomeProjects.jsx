"use client"
import Image from "next/image";
export default function HomeProjectsSection() {
  const projects = [
    {
      title: "RESIDENTIAL",
      author: "Kevin Johnson",
      category: "Interior",
      date: "07/02/2017",
      description:
        "We create warm, inviting residential spaces that reflect the lifestyle and personality of every homeowner. With attention to detail and quality craftsmanship, we turn houses into cherished homes.",
      image: "/residential.JPG", 
    },
    {
      title: "COMMERCIAL",
      author: "Kevin Johnson",
      category: "Interior",
      date: "07/03/2017",
      description:
        "We provide tailored solutions for commercial spaces, ensuring functionality, efficiency, and a professional aesthetic. Our team is committed to delivering high-quality results that meet the unique needs of businesses.",
      image: "/3.jpg", 
    },
    {
      title: "INSTITUTIONAL",
      author: "Kevin Johnson",
      category: "Interior",
      date: "07/04/2017",
      description:
        "Our institutional projects focus on building environments that support learning, growth, and service. From schools to healthcare facilities, we design with purpose and long-term impact in mind.",
      image: "/institutional.JPG", 
    },
    // {
    //   title: "RELIGIOUS",
    //   description:
    //     "We design and develop sacred spaces that inspire peace, reflection, and community. With respect for tradition and attention to spiritual significance, our work honors the values and vision of every faith-based project.",
    //   image: "/religious.jpg", 
    // },
  ];

  return (
    <section className="max-w-full mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24 bg-white text-gray-900">
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
            <div className="w-full h-64 md:h-96 lg:h-[300px] overflow-hidden">
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
            {/* <p className="text-sm text-gray-500">
              by {project.author} / {project.category} / {project.date}
            </p> */}

            {/* Description */}
            <p className="text-gray-600 mt-2 max-w-md">{project.description}</p>

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
