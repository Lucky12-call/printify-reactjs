import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FaArrowRight } from "react-icons/fa";

const Design = () => {
  return (
    <div className="bg-clipPath h-[200vh] w-full bg-slate-100 mt-20">
      <div className=" h-full w-[80%] mx-auto pt-72">
        <div className="relative h-[500px] w-full text-end rounded-3xl">
          {/* text section  */}
          <div className="h-full rounded-3xl bg-white">
            <div className="max-w-[400px] absolute right-28 top-24 text-left">
              <h1 className="text-3xl font-bold">
                Easily add your design to a wide range of products
              </h1>

              <p className="mt-10 text-gray-600">
                With our free design tools, you can easily add your custom
                designs to t-shirts, mugs, phone cases, and hundreds of other
                products.
              </p>

              <a
                href="#"
                className="flex items-center gap-2 text-green-500 text-lg font-semibold mt-12"
              >
                All Products <FaArrowRight size={20} />
              </a>
            </div>
          </div>

          <div className="h-[90vh] w-[450px] rounded-3xl bg-blue-500 absolute bottom-0 left-0">
            <img
              src="t-shirt-img.jpg"
              alt="t-shirt-img"
              className="h-full w-full rounded-3xl"
            />
          </div>

          <div className="h-60 w-48 absolute left-80 bottom-16  rounded-2xl border-2 p-4 bg-white">
            <div className="flex flex-col items-center gap-4">
              <div className="flex">
                <button className="w-1/2 px-4 rounded-sm border border-gray-500">
                  Edit
                </button>
                <button className="w-1/2 px-4 rounded-sm border border-gray-500">
                  Preview
                </button>
              </div>
              <img src="t-shirt.png" alt="tshirt" className="h-40 w-40" />
            </div>
          </div>
        </div>

        <div className="w-full mt-32">
          <Swiper
            // spaceBetween={}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            pagination={true}
          >
            <SwiperSlide>
              {/* cart-1  */}
              <div className="w-96">
                <img
                  src="https://printify.com/pfh/assets/legacy/custom-products.png"
                  alt="img-1"
                  className="h-40 w-40 mb-10"
                />
                <h1 className="text-xl text-green-500 uppercase font-semibold">
                  Create
                </h1>
                <h1 className="text-xl uppercase font-semibold mb-5">
                  custom products
                </h1>
                <p className="text-gray-700">
                  Easily add your designs to a wide range of products using our
                  free tools
                </p>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide>
              {/* cart-2  */}
              <div className="w-96">
                <img
                  src="https://printify.com/pfh/assets/legacy/your-products.png"
                  alt="img-2"
                  className="h40 w-40 mb-10"
                />
                <h1 className="text-xl text-green-500 uppercase font-semibold">
                  Create
                </h1>
                <h1 className="text-xl uppercase font-semibold mb-5">
                  custom products
                </h1>
                <p className="text-gray-700">
                  Easily add your designs to a wide range of products using our
                  free tools
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* cart-3  */}
              <div className="w-96">
                <img
                  src="https://printify.com/pfh/assets/legacy/fullfillment.png"
                  alt="img-3"
                  className="h-40 w-40 mb-10"
                />
                <h1 className="text-xl text-green-500 uppercase font-semibold">
                  Create
                </h1>
                <h1 className="text-xl uppercase font-semibold mb-5">
                  custom products
                </h1>
                <p className="text-gray-700">
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
    </div>
  );
};

export default Design;

//
//
