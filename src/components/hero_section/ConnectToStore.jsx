import { motion } from "motion/react";

const ConnectToStore = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="h-[100vh] w-full"
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-5">Connect your store</h1>
        <p className="font-normal">
          Printify easily integrates with major e-commerce platforms and
          marketplaces
        </p>
      </div>

      {/* desktop viewport section  */}
      <div className="relative max-w-full h-3/4 flex justify-center max-md:hidden">
        <a
          href=""
          className="h-24 w-24 flex items-center justify-center rounded-2xl absolute top-60 left-[340px] custom-shadow hover:scale-110 transition-transform"
        >
          <img src="img-1.png" alt="img-1" className="rounded-2xl" />
        </a>

        <a
          href=""
          className="h-24 w-24 flex items-center justify-center rounded-2xl absolute top-0 right-0 custom-shadow hover:scale-110 transition-transform"
        >
          <img src="img-2.webp" alt="img-2" className="rounded-2xl" />
        </a>

        <a
          href=""
          className="h-20 w-20 flex items-center justify-center rounded-2xl absolute top-48 right-60 custom custom-shadow hover:scale-110 transition-transform"
        >
          <img src="img-3.png" alt="img-3" className="rounded-2xl" />
        </a>
        <a
          href=""
          className="h-24 w-24 flex items-center justify-center rounded-2xl absolute top-10 right-80 custom-shadow hover:scale-110 transition-transform"
        >
          <img src="img-4.png" alt="img-4" className="rounded-2xl" />
        </a>
        <a
          href=""
          className="h-36 w-36 flex items-center justify-center rounded-2xl absolute bottom-10 right-96 custom-shadow hover:scale-110 transition-transform"
        >
          <img src="img-5.png" alt="img-5" className="rounded-2xl" />
        </a>
        <a
          href=""
          className="h-20 w-20 flex items-center justify-center rounded-2xl absolute bottom-32 left-[460px] custom-shadow hover:scale-110 transition-transform"
        >
          <img src="img-6.jpg" alt="img-6" className="rounded-2xl" />
        </a>
        <a
          href=""
          className="h-40 w-40 flex items-center justify-center rounded-2xl absolute bottom-28 right-4 custom-shadow hover:scale-110 transition-transform"
        >
          <img src="img-7.png" alt="img-7" className="rounded-2xl" />
        </a>
        <a
          href=""
          className="h-40 w-40 flex items-center justify-center rounded-2xl absolute bottom-20 left-28 custom-shadow text-3xl font-bold hover:scale-110 transition-transform"
        >
          <h2>API</h2>
        </a>
        <a
          href=""
          className="h-20 w-20 flex items-center justify-center rounded-2xl absolute top-2 left-[430px] custom-shadow hover:scale-110 transition-transform"
        >
          <img src="img-8.jpg" alt="img-8" className="rounded-2xl" />
        </a>

        <div className="h-36 w-36 flex justify-center items-center bg-[#18C75A] rounded-3xl mt-36 hover:scale-110 transition-transform">
          <img src="img-9.png" alt="middle-img" className="rounded-3xl" />
        </div>
      </div>

      {/* mobile viewport section  */}
      <div className="w-full h-full md:h-3/4 flex flex-wrap justify-center items-center gap-8 mt-10 md:hidden">
        <a
          href=""
          className="h-24 w-24 flex items-center justify-center rounded-2xl custom-shadow hover:scale-110 transition-transform"
        >
          <img src="img-1.png" alt="img-1" className="rounded-2xl" />
        </a>

        <a
          href=""
          className="h-24 w-24 flex items-center justify-center rounded-2xl custom-shadow hover:scale-110 transition-transform"
        >
          <img src="img-2.webp" alt="img-2" className="rounded-2xl" />
        </a>

        <a
          href=""
          className="h-24 w-24 flex items-center justify-center rounded-2xl custom-shadow hover:scale-110 transition-transform"
        >
          <img src="img-3.png" alt="img-3" className="rounded-2xl" />
        </a>
        <a
          href=""
          className="h-24 w-24 flex items-center justify-center rounded-2xl custom-shadow hover:scale-110 transition-transform"
        >
          <img src="img-4.png" alt="img-4" className="rounded-2xl" />
        </a>
        <a
          href=""
          className="h-24 w-24 flex items-center justify-center rounded-2xl custom-shadow hover:scale-110 transition-transform"
        >
          <img src="img-5.png" alt="img-5" className="rounded-2xl" />
        </a>
        <a
          href=""
          className="h-24 w-24 flex items-center justify-center rounded-2xl custom-shadow hover:scale-110 transition-transform"
        >
          <img src="img-6.jpg" alt="img-6" className="rounded-2xl" />
        </a>
        <a
          href=""
          className="h-24 w-24 flex items-center justify-center rounded-2xl custom-shadow hover:scale-110 transition-transform"
        >
          <img src="img-7.png" alt="img-7" className="rounded-2xl" />
        </a>
        <a
          href=""
          className="h-24 w-24 flex items-center justify-center rounded-2xl custom-shadow hover:scale-110 transition-transform"
        >
          <h2>API</h2>
        </a>
        <a
          href=""
          className="h-24 w-24 flex items-center justify-center rounded-2xl custom-shadow hover:scale-110 transition-transform"
        >
          <img src="img-8.jpg" alt="img-8" className="rounded-2xl" />
        </a>

        <div className="h-24 w-24 flex items-center justify-center rounded-2xl custom-shadow hover:scale-110 transition-transform">
          <img src="img-9.png" alt="middle-img" className="rounded-2xl" />
        </div>
      </div>
    </motion.div>
  );
};

export default ConnectToStore;
