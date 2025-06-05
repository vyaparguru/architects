"use client"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow Components
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#222",
        borderRadius: "50%",
        right: window.innerWidth < 768 ? "-20px" : "-30px", // Responsive right position
        zIndex: 2,
        width: 36,
        height: 36,
      }}
      aria-label="Next"
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#222",
        borderRadius: "50%",
        left: window.innerWidth < 768 ? "-20px" : "-30px", // Responsive left position
        zIndex: 2,
        width: 36,
        height: 36,
      }}
      aria-label="Previous"
      onClick={onClick}
    />
  );
}


const testimonials = [
  {
    name: "Ginni Arora",
    feedback: "Working with Emphasis Architects was a pleasure — they understood our dream and made it even better!",
  },
  {
    name: "Harminder Singh",
    feedback: "They created a space that speaks of elegance and practicality. Highly recommended!",
  },
  {
    name: "Avtar Singh",
    feedback: "Professional, creative, and always on time. Our project turned out better than we imagined.",
  },
  {
    name: "Chatter Singh",
    feedback: "Excellent service and attention to detail. Would definitely work with them again!",
  },

];

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    adaptiveHeight: true,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 md:py-20 px-6 md:px-0 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-10 md:text-center">Client Testimonials</h2>
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="text-lg bg-white p-6 shadow-md max-w-xl mx-auto rounded-lg ">
              <p className="italic text-gray-600 mb-4">"{item.feedback}"</p>
              <p className="font-semibold">— {item.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}