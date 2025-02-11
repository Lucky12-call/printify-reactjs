import Swapper from "./Swapper";
import { motion } from "motion/react";

const ReviewSection = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="bg-clipPath2 h-[130vh] bg-gray-100 max-md:mt-52"
      >
        <div className="h-full w-[80%] mx-auto ">
          <div className="flex flex-col">
            <div className="h-full w-full flex flex-col md:flex-row justify-center md:justify-start max-md:items-center gap-2 md:gap-24 pt-5 md:pt-36">
              <h1 className="text-3xl md:text-4xl font-semibold leading-normal max-md:text-center">
                Trusted by over 8M sellers around the world
              </h1>
              <p className=" font-normal leading-6 max-md:text-center">
                Whether you are just getting started or run an enterprise-level
                e-commerce business, we do everything we can to ensure a
                positive merchant experience.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <Swapper />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ReviewSection;
