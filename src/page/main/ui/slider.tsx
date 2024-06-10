'use client';

import Image from 'next/image';
import Logo from './logo';

import 'swiper/css';
import '../style/slide.css';
import '../style/logo.css';

const { Swiper, SwiperSlide } = require('swiper/react');

const SLIDE_DATA = [
  { des: 'minyoung', img: '/images/minyoung.webp' },
  { des: 'eunji', img: '/images/eunji.webp' },
  { des: 'yuna', img: '/images/yuna.webp' },
];

const Slider = () => {
  return (
    <Swiper>
      {SLIDE_DATA.map(slide => (
        <SwiperSlide key={slide.des} className="slide-image-wrapper">
          <Image
            className="slide-image"
            src={slide.img}
            alt={slide.des}
            fill
            priority
            unoptimized
            blurDataURL={slide.img}
          />
          <div className="front-filter" />
        </SwiperSlide>
      ))}
      <Logo />
      <div className="main-arrow-guide-wrapper">
        <span className="main-arrow-guide-text">
          새로운 브브걸의 여정을 응원해 주세요.
        </span>
        <Image
          className="main-arrow-guide"
          src="/svgs/down-arrow.svg"
          width={24}
          height={24}
          alt="guide-arrow"
        />
      </div>
    </Swiper>
  );
};

export default Slider;
