import Link from "next/link";

export default function OurServices() {
  const services = [
    {
      title: "Architectural Design",
      image: "/archi/7.jpg",
      description:
        "We craft modern, functional architecture tailored to your needs and vision.",
      href: "/services/architecture",
    },
    {
      title: "Interior Design",
      image: "/int/1.jpg",
      description:
        "Our interiors combine beauty and utility, creating personalized spaces.",
      href: "/services/interior-design",
    },
    {
      title: "Construction Management",
      image: "/const/1.webp",
      description:
        "Efficient layouts that maximize space and enhance workflow and comfort.",
      href: "/services/construction-management",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto bg-amber-50 py-0 md:py-16 px-6 md:px-8 lg:px-16">
      <div className=" mb-12">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-800 md:text-center">Our Services</h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto md:text-center text-lg">
          We offer a wide range of professional services to bring your vision to life with style and precision.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={service.image}
              alt="service"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
              <Link href={service.href} className="mt-4 text-sm text-gray-900  font-bold hover:underline">
                View service →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
