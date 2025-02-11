import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "motion/react";

const Design = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="bg-clipPath h-[200vh] w-full bg-slate-100 mt-20"
    >
      <div className=" h-full w-[80%] mx-auto pt-32 md:pt-72">
        <div className="relative h-[500px] w-full text-end rounded-3xl">
          {/* text section  */}
          <div className="h-[70%] md:h-full rounded-3xl bg-white  max-md:p-5">
            <div className="max-w-[400px] md:absolute md:right-28 md:top-24 text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-bold">
                Easily add your design to a wide range of products
              </h1>

              <p className="mt-5 md:mt-10 text-gray-600">
                With our free design tools, you can easily add your custom
                designs to t-shirts, mugs, phone cases, and hundreds of other
                products.
              </p>

              <a
                href="#"
                className="flex items-center justify-center  gap-2 text-green-500 text-lg font-semibold mt-7 md:mt-12"
              >
                All Products <FaArrowRight size={20} />
              </a>
            </div>
          </div>

          <div className="h-[90vh] w-[450px] rounded-3xl absolute bottom-0 left-0 max-md:hidden">
            <img
              src="t-shirt-img.jpg"
              alt="t-shirt-img"
              className="h-full w-full rounded-3xl"
            />
          </div>

          <div className="h-60 w-48 absolute left-80 bottom-16  rounded-2xl border-2 p-4 bg-white max-md:hidden">
            <div className="flex flex-col items-center gap-4">
              <div className="flex gap-2">
                <button className="w-1/2 px-4 rounded-sm border border-gray-400">
                  Edit
                </button>
                <button className="w-1/2 px-4 rounded-sm border border-gray-400">
                  Preview
                </button>
              </div>
              <img src="t-shirt.png" alt="tshirt" className="h-40 w-40" />
            </div>
          </div>
        </div>

        <div className="w-full md:mt-32">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              768: {
                slidesPerView: 3, // Show 3 slides per view
              },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              {/* cart-1  */}
              <div className="w-full md:w-96 max-md:flex max-md:flex-col justify-center items-center">
                <img
                  src="https://printify.com/pfh/assets/legacy/custom-products.png"
                  alt="img-1"
                  className="h-40 w-40 mb-10"
                />
                <h1 className="text-xl text-green-500 uppercase font-semibold max-md:text-center">
                  Create
                </h1>
                <h1 className="text-xl uppercase font-semibold mb-5 max-md:text-center">
                  custom products
                </h1>
                <p className="text-gray-700 max-md:text-center">
                  Easily add your designs to a wide range of products using our
                  free tools
                </p>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              {/* cart-2  */}
              <div className="w-full md:w-96 max-md:flex max-md:flex-col justify-center items-center">
                <img
                  src="https://printify.com/pfh/assets/legacy/your-products.png"
                  alt="img-2"
                  className="h-40 w-40 mb-10"
                />
                <h1 className="text-xl text-green-500 uppercase font-semibold max-md:text-center">
                  Create
                </h1>
                <h1 className="text-xl uppercase font-semibold mb-5 max-md:text-center">
                  custom products
                </h1>
                <p className="text-gray-700 max-md:text-center">
                  Easily add your designs to a wide range of products using our
                  free tools
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* cart-3  */}
              <div className="w-full md:w-96 max-md:flex max-md:flex-col justify-center items-center">
                <img
                  src="https://printify.com/pfh/assets/legacy/fullfillment.png"
                  alt="img-3"
                  className="h-40 w-40 mb-10"
                />
                <h1 className="text-xl text-green-500 uppercase font-semibold max-md:text-center">
                  Create
                </h1>
                <h1 className="text-xl uppercase font-semibold mb-5 max-md:text-center">
                  custom products
                </h1>
                <p className="text-gray-700 max-md:text-center">
                  Easily add your designs to a wide range of products using our
                  free tools
                </p>
              </div>
            </SwiperSlide>
            <div className="text-center bg-red-500 mt-28">
              <Swiper pagination={true}></Swiper>
            </div>
          </Swiper>
        </div>
      </div>
    </motion.div>
  );
};

export default Design;

//
//
