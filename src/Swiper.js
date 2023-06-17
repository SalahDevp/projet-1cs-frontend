import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import config from "./config.json";
import maison from "./pic/pic8.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import pic from "./pic/pic8.png"

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function SliderComponent({ images }) {
  return (
    <>
      <Swiper
        spaceBetween={50}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="rounded-xl overflow-x-hidden w-[290px] sm:w-[500px] md:w-[680px] lg:w-[890px] xl:w-[700px]"
        width={360}
        slidesPerView={1}
        breakpoints={{
          1140: { width: 700, slidesPerView: 1 }, //xl
          960: { width: 890, slidesPerView: 1 }, //lg
          720: { width: 680, slidesPerView: 1 }, //md
          540: { width: 500, slidesPerView: 1 }, //sm
        }}
      >
        {images.length > 0 ? (
          images.map((img) => (
            <SwiperSlide key={img}>
              <img
                //src={config.serverUrl + img}
                src={pic}
                className="object-fill h-96 w-full"
                alt=""
              />
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <img src={maison} className="object-fill h-96 w-full" alt="" />
          </SwiperSlide>
        )}
      </Swiper>
    </>
  );
}