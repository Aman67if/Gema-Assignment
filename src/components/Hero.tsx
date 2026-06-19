import Details from "./Details";
import { CarouselDefault } from "./Carousel";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-[#3e2723] w-full flex-1">
      <div className="container mx-auto flex flex-col lg:flex-row px-4 sm:px-6 lg:px-12 py-8 lg:py-16 gap-8 lg:gap-10 lg:items-stretch">
        {/* Left column: title + carousel + details */}
        <div className="w-full lg:w-3/5 h-[520px] sm:h-[580px] md:h-[640px] lg:h-[600px] flex flex-col rounded-lg p-4 gap-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            AI & Robotics Summer Workshop
          </h1>
          <div className="flex-1 rounded-lg relative overflow-hidden min-h-0">
            <CarouselDefault />
          </div>
          <Details />
        </div>

        {/* Right column: learn + description + button */}
        <div className="w-full lg:w-2/5 flex flex-col justify-center lg:items-start items-center text-center lg:text-left gap-4 lg:gap-6">
          <h1 className="title-font text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-medium text-white">
            What you'll learn
          </h1>
          <p className="leading-relaxed text-gray-300 text-sm sm:text-base">
            Fun Robotics is Dubai's premium specialized technology hub enabling
            children to master automated engineering, coding games, and 3D
            modeling through hands-on play. The venue offers accessible access
            pathways, including single 2-hour introductory trial vouchers
            starting at AED 49 and professional 10-session comprehensive
            pipelines at AED 1,732.50. Furnished with expert instructors and
            micro-group structures, it builds logic-driven environments that
            make technical innovation genuinely entertaining.
          </p>
          <div className="flex justify-center lg:justify-start">
            <a href="#userform">
              <button className="inline-flex bg-white/10 backdrop-blur-md border-white/20 shadow-lg
            hover:bg-white/20 hover:border-white/40 duration-300 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 text-lg transition-colors text-white font-bold rounded-full">
                Enroll Now at ₹2,999
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
