import { useEffect, useRef, useState } from "react";
import img1 from "../../../assets/bananer.png";
const slides = [
  {
    id: 1,
    image: img1,
    title: "",
    description: "OUR DRY FISH COLLECTION  FRESH AND CLEAN ",
  },
  {
    id: 2,
    image: img1,
    title: "",
    description: "OUR DRY FISH COLLECTION FRESH AND CLEAN ",
  },
  {
    id: 3,
    image: img1,
    title: "",
    description: "OUR DRY FISH COLLECTION FRESH AND CLEAN ",
  },
];

const HomeBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef(null);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval.current);
  }, []);

  return (
    <div className="relative w-full overflow-hidden ">
      <div
        className="flex transition-transform duration-[1500ms] ease-[cubic-bezier(0.77, 0, 0.175, 1)]"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-fill"
            />
            <div className="absolute inset-0 flex text-white ">
              <div className="mt-[17%] ml-[7%]">
                <div className="flex items-center">
                  <h2 className="responsive-heading inria-sans ">
                    {slide.title}
                  </h2>
                </div>
                <p className="responsive-banner-text inria-sans">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-10 h-1 rounded-xl transition-all duration-300 ${
              currentSlide === index ? "bg-white" : "bg-[#AEEE6A]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeBanner;
