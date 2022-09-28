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
import shermie from "../../assets/blog-assets/shermie.jpg"
import honda from "../../assets/blog-assets/honda-sketch.jpg"
import team from "../../assets/blog-assets/team-samurai.jpg"
// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
export default function FeaturedArtScroller() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><MultiCard image={shermie} title="art" description="" /></SwiperSlide>
        <SwiperSlide><MultiCard image={team} title="art" description="" /></SwiperSlide>
        <SwiperSlide><MultiCard image={honda} title="art" description="" /></SwiperSlide>
      </Swiper>
    </>
  )
}
