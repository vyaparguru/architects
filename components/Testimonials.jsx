// components/Testimonials.js
const testimonials = [
  {
    name: "Ravi Mehta",
    feedback: "Working with Emphasis Architects was a pleasure — they understood our dream and made it even better!",
  },
  {
    name: "Neha Kapoor",
    feedback: "They created a space that speaks of elegance and practicality. Highly recommended!",
  },
  
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-20 px-6 md:px-0">
      <div className="max-w-6xl mx-auto ">
        <h2 className="text-4xl md:text-6xl font-bold mb-10 md:text-center">Client Testimonials</h2>
        <div className="flex flex-col md:flex-row gap-10 ">
          {testimonials.map((item, index) => (
            <div key={index} className="text-lg bg-white p-6 shadow-md max-w-xl mx-auto">
              <p className="italic text-gray-600 mb-4">"{item.feedback}"</p>
              <p className="font-semibold ">— {item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
