import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./carousel.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function Carousel() {
  const swiper = useSwiper();
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        // navigation={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper text-xl"
      >
        <SwiperSlide>
        At Patnan Investments we understand that finding the perfect home is more than just a transaction; it's about finding a sanctuary. Our website offers an unparalleled user experience, with intuitive search tools, detailed property listings, and personalized recommendations tailored to each client's unique preferences and needs..
        </SwiperSlide>
        <SwiperSlide>
        What sets us apart at Patnan Investments is our unwavering commitment to excellence. From our meticulously curated listings to our dedicated team of real estate professionals, we strive to exceed expectations at every turn. With a focus on transparency, integrity, and unparalleled customer service, we're here to make your real estate journey seamless and satisfying.
        </SwiperSlide>
        <SwiperSlide>
        At Patnan Investments, we believe that home is where the heart is, and we're passionate about helping people find their perfect match. Our website combines cutting-edge technology with a human touch, offering expert guidance, valuable insights, and a seamless browsing experience that makes finding your dream home a joyous adventure.
        </SwiperSlide>

        <div className="slider-controler flex max-md:justify-center  gap-3  mt-16">
          <div
            style={{ borderWidth: 1.5, borderRadius: 4 }}
            className={`swiper-button-prev static text-3xl font-semibold bg-red-500 border-2 border-red-500 px-5 py-0   duration-300 text-white hover:bg-white hover:text-red-500 transition-all `}
          >
            {"<"}
          </div>

          <div
            style={{ borderWidth: 1.5, borderRadius: 4 }}
            className={`swiper-button-next static text-3xl font-semibold bg-red-500 border-2 border-red-500 px-5 py-0   duration-300 text-white hover:bg-white hover:text-red-500 transition-all `}
          >
            {">"}
          </div>
        </div>
      </Swiper>
    </>
  );
}
