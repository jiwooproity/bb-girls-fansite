'use client';

import 'swiper/css';
import '../style/slide.css';
import '../style/logo.css';

import Image from 'next/image';
import { ArrowGuide } from '@/shared/components';
import Logo from './logo';

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
            loading="eager"
          />
          <div className="front-filter" />
        </SwiperSlide>
      ))}
      <Logo />
      <ArrowGuide text="새로운 브브걸의 여정을 응원해 주세요." />
    </Swiper>
  );
};

export default Slider;
