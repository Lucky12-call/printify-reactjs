import { reviewData } from "../data/reviewData";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Swapper = () => {
  return (
    <>
      <Swiper
        // spaceBetween={}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={2.5}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={true}
      >
        {reviewData.map((user) => (
          <div key={user.id} className="h-full w-full inline">
            <SwiperSlide>
              <div className="h-[300px] w-[450px] rounded-2xl p-10 bg-white">
                <div className="flex items-start gap-6">
                  <img
                    src={user.image}
                    alt={user.name}
                    className="h-16 w-16 rounded-xl"
                  />
                  <div className="flex flex-col gap-1">
                    <h1 className="text-2xl font-semibold">{user.name}</h1>
                    <a
                      href="#"
                      className="no-underline text-md text-[#39B75D] underline-offset-2 hover:underline"
                    >
                      {user.business}
                    </a>

                    <div className="flex items-center gap-2">
                      <FaStar size={16} color="gold" />
                      <FaStar size={16} color="gold" />
                      <FaStar size={16} color="gold" />
                      <FaStar size={16} color="gold" />
                      <FaStar size={16} color="gold" />
                    </div>
                  </div>
                </div>
                <p className="font-normal mt-5">{user.description}</p>
              </div>
            </SwiperSlide>
          </div>
        ))}
        <div className="text-center bg-red-500 mt-28">
          <Swiper pagination={true}></Swiper>
        </div>
      </Swiper>
    </>
  );
};

export default Swapper;