import { motion } from "motion/react";

const TalkToSales = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mb-32 mt-20 px-20 max-md:hidden"
      >
        <div className="h-36 w-full flex justify-between items-center px-28 bg-img bg-green-100 rounded-3xl">
          <h1 className="text-2xl font-semibold text-green-800">
            Are you a large business looking <br /> for custom solutions?
          </h1>
          <button className="px-8 py-1.5 rounded-sm bg-white font-bold">
            Talk to sales
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default TalkToSales;
