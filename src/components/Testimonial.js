import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const NextArrow = ({ onClick }) => (
  <button
    className="slick-arrow slick-next"
    onClick={onClick}
    style={{
      position: "absolute",
      top: "-40px",
      right: "40px",
      zIndex: 1,
    }}
  >
    Next
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="slick-arrow slick-prev"
    onClick={onClick}
    style={{
      position: "absolute",
      top: "-40px",
      right: "80px",
      zIndex: 1,
    }}
  >
    Prev
  </button>
);

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: true, // Enable center mode
    centerPadding: "30px", // Adjust as needed to center the middle card
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <div className="mt-16 font-[sans-serif] max-w-6xl max-md:max-w-lg mx-auto relative">
      <div className="md:mb-16 mb-6 text-center relative">
        <h2 className="text-gray-800 text-3xl font-extrabold">What our happy client say</h2>
      </div>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-4">
            <div className="h-auto p-6 rounded-2xl bg-white relative max-md:shadow-md border-2 border-gray-300">
              <div className="mr-4">
                <img src={testimonial.img} className="w-10 h-10 rounded-full" alt="testimonials" />
                <h4 className="text-gray-800 text-sm whitespace-nowrap font-bold mt-3">{testimonial.name}</h4>
                <p className="mt-0.5 text-xs text-gray-600">{testimonial.position}</p>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 text-sm leading-relaxed">{testimonial.text}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const testimonials = [
  {
    img: "https://readymadeui.com/profile_2.webp",
    name: "John Doe",
    position: "Founder of Rubik",
    text: "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.",
  },
  {
    img: "https://readymadeui.com/profile_3.webp",
    name: "Mark Adair",
    position: "Founder of Alpha",
    text: "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.",
  },
  {
    img: "https://readymadeui.com/profile_4.webp",
    name: "Simon Konecki",
    position: "Founder of Labar",
    text: "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.",
  },
  {
    img: "https://readymadeui.com/profile_5.webp",
    name: "Emily Clark",
    position: "CEO of Tech",
    text: "The product quality is top-notch. The customer support is always ready to help and solve any issues quickly. Highly recommend!",
  },
  {
    img: "https://readymadeui.com/profile_6.webp",
    name: "Michael Scott",
    position: "Manager at Dunder Mifflin",
    text: "Excellent service! The team was very professional and the delivery was on time. Great experience overall.",
  },
];

export default Testimonials;
