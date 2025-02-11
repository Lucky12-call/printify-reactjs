import { motion } from "motion/react";

const StartSelling = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="h-[85vh] mb-20 mt-32 px-5 md:relative"
      >
        {/* under section  */}
        <div className="h-full w-full max-md:flex max-md:flex-col justify-center items-center rounded-3xl bg-[#203741] text-white p-5 md:px-28 md:py-20">
          <div className="flex flex-col gap-4 md:gap-7 w-full md:w-1/2 md:pr-28">
            <h1 className="text-3xl md:text-4xl font-semibold max-md:text-center">
              Make Money, Risk-Free
            </h1>

            <p className="font-normal max-md:text-center">
              You pay for fulfillment only when you make a sale
            </p>

            {/* price board */}
            <div className="h-52 md:h-60 w-full md:w-96 flex flex-col gap-6 rounded-2xl bg-[#17262b] p-4 md:p-10">
              <div className="flex justify-between items-center font-semibold">
                <span>You sell a t-shirt</span>
                <span>$30</span>
              </div>

              <div className="flex justify-between items-center font-semibold mb-2">
                <span>You pay for its production</span>
                <span>$12</span>
              </div>

              <hr />
              <div className="flex justify-between items-center text-xl font-semibold text-green-500">
                <span>Your profit</span>
                <span>$ 80</span>
              </div>
            </div>
            <div>
              <button className="px-5 py-1.5 rounded-sm bg-green-500 ">
                Start selling
              </button>
            </div>

            <p className="text-sm text-gray-300">
              100% Free to use · 900+ Products · Largest print network
            </p>
          </div>
        </div>

        {/* upper section  */}
        <div className="min-h-[108%] w-[550px] rounded-3xl absolute right-0 bottom-0 max-md:hidden">
          <img
            src="girl-svg.png"
            alt="girl-img"
            className="h-full w-full rounded-3xl"
          />
        </div>
      </motion.div>
    </>
  );
};

export default StartSelling;
