import { IoMdCheckmark } from "react-icons/io";
import { FaRegPlayCircle } from "react-icons/fa";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="w-full h-[90vh] flex flex-col-reverse md:flex-row items-center md:justify-between gap-10 md:gap-0 px-5 mt-32"
    >
      {/* text section  */}
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl md:text-[53px] font-bold leading-snug pr-5">
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
          <button className="px-4 md:px-8 py-1.5 md:py-3 bg-[#39B75D] hover:bg-green-600 text-white font-bold rounded-sm">
            Start for free
          </button>
          <button className="flex items-center justify-center gap-2 px-4 md:px-8 py-1.5 md:py-3 border-2 hover:text-[#39B75D] font-bold rounded-sm">
            <FaRegPlayCircle size={20} />
            How it works?
          </button>
        </div>

        <p className="text-[#39B75D] font-semibold mt-3">
          Trusted by over 8M sellers around the world
        </p>
      </div>

      {/* image section  */}
      <div className="w-full md:w-1/2 flex justify-center items-center md:justify-end">
        <img src="main.webp" alt="main-img" className="h-72 md:h-96" />
      </div>
    </motion.div>
  );
};

export default Hero;
