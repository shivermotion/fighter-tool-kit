import React, { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Autoplay, Pagination, Navigation } from "swiper"
import { FeaturedMediaCard } from "../featured-media-card/featured-media-card"
// Application Screen || Define Imports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import "./featured-scroll-banner.scss"
import honda from "../../assets/blog-assets/honda-sketch.jpg"
import ken from "../../assets/blog-assets/ken-blog.jpg"
import anime from "../../assets/icons/anime.png"

// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
export default function FeaturedScrollBanner() {
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
        <SwiperSlide><FeaturedMediaCard blogImage={ken} backgroundImg={honda} /></SwiperSlide>
        <SwiperSlide><FeaturedMediaCard blogImage={honda} backgroundImg={anime} /></SwiperSlide>
        <SwiperSlide><FeaturedMediaCard blogImage={anime} backgroundImg={ken} /></SwiperSlide>
      </Swiper>
    </>
  )
}
