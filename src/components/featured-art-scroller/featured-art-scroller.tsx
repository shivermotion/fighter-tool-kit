import React, { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Autoplay, Pagination, Navigation } from "swiper"

// Application Screen || Define Imports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import "../featured-scroll-banner/featured-scroll-banner.scss"
import MultiCard from "../non-featured-media-card/multi-card"
import duo from "../../assets/featured-art/sf-tekken.jpg"
import chizuru from "../../assets/featured-art/chizuru.jpg"
import kyo from "../../assets/featured-art/kyo-concept-art.jpg"
// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
export default function FeaturedArtScroller() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><MultiCard image={duo} title="" description="" /></SwiperSlide>
        <SwiperSlide><MultiCard image={chizuru} title="" description="" /></SwiperSlide>
        <SwiperSlide><MultiCard image={kyo} title="" description="" /></SwiperSlide>
      </Swiper>
    </>
  )
}
