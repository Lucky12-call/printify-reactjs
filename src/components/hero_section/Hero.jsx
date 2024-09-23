import { IoMdCheckmark } from "react-icons/io";
import { FaRegPlayCircle } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <section className="h-[90vh]">
        <div className="w-full h-full flex items-center justify-between px-5 mt-32">
          {/* text section  */}
          <div className="w-1/2">
            <h1 className="text-[53px] font-bold leading-snug pr-5">
              Create and sell custom products
            </h1>

            <div className="mt-4">
              <div className="flex items-center space-x-2 mb-2 font-normal">
                <IoMdCheckmark size={26} color="#39B75D" />{" "}
                <span>100% Free to use</span>
              </div>
              <div className="flex items-center space-x-2  mb-2  font-normal">
                <IoMdCheckmark size={26} color="#39B75D" />{" "}
                <span>900+ High-Quality Products</span>
              </div>
              <div className="flex items-center space-x-2  mb-2 font-normal">
                <IoMdCheckmark size={26} color="#39B75D" />{" "}
                <span>Large global print network</span>
              </div>
            </div>

            <div className="flex items-center space-x-4 mt-12">
              <button className="px-8 py-3 bg-[#39B75D] text-white font-bold rounded-sm">
                Start for free
              </button>
              <button className="flex items-center justify-center gap-2 px-8 py-3 border-2 font-bold rounded-sm">
                <FaRegPlayCircle size={20} />
                How it works?
              </button>
            </div>

            <p className="text-[#39B75D] font-semibold mt-3">Trusted by over 8M sellers around the world</p>
          </div>

          {/* image section  */}
          <div className="w-1/2 flex justify-end">
            <img src="main.webp" alt="main-img" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
