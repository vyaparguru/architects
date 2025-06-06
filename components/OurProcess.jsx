import {
  FaClipboardList,
  FaPalette,
  FaCubes,
  FaFileSignature,
  FaHardHat,
} from "react-icons/fa";

const steps = [
  {
    title: "Client Briefing And Site Visit",
    icon: <FaClipboardList className="text-white text-3xl" />,
    color: "bg-blue-600",
  },
  {
    title: "Concept Design And Mood Boards",
    icon: <FaPalette className="text-white text-3xl" />,
    color: "bg-green-600",
  },
  {
    title: "Design Development And 3D Modeling",
    icon: <FaCubes className="text-white text-3xl" />,
    color: "bg-indigo-600",
  },
  {
    title: "Final Drawings And Documentation",  
    icon: <FaFileSignature className="text-white text-3xl" />,
    color: "bg-yellow-500",
  },
  {
    title: "Project Supervision And Site Coordination",
    icon: <FaHardHat className="text-white text-3xl" />,
    color: "bg-red-600",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-white py-16 px-6 lg:px-16 ">
      <div className="mb-12">
        <h2 className="text-4xl md:text-6xl font-semibold text-gray-800 md:text-center">
          Our Process
        </h2>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto md:text-center text-xl">
          From the first meeting to final execution, we ensure transparency and excellence at every step.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-8 md:px-32">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center px-2 py-10 md:px-6 md:py-16 bg-white shadow-lg hover:shadow-lg transition-shadow duration-300"
          >
            <div
              className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 bg-amber-900`}
            >
              {step.icon}
            </div>
            <h4 className="text-lg font-medium text-gray-800">
              {step.title}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}
