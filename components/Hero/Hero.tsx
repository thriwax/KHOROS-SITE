import Image from 'next/image';
import slider from '../../utils/slider';
import iconHero from '../../public/icon-hero.svg'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import Link from 'next/link';

const Hero = () => {

  const slide1 = [slider[0]]
  const slide2 = [slider[1]]
  const slide3 = [slider[2]]
  return (
    <>
      <Swiper
        rewind={true}
        mousewheel={true}
        effect={'fade'}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}>
        {slide1.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Link href={`./albums/${slide.id}`}><div>
              <div className='image-container'>
                <Image src={slide.img} width={1280} height={697} alt='test' className='image' id='px1440'/>
                <Image src={slide.img} width={1100} height={550} alt='test' className='image' id='px1280'/>
                <Image src={slide.img} width={950} height={550} alt='test' className='image' id='px1024'/>
                <Image src={slide.img} width={700} height={550} alt='test' className='image' id='px800'/>
                <Image src={slide.img} width={500} height={500} alt='test' className='image' id='px600'/>
                <Image src={slide.img} width={280} height={400} alt='test' className='image' id='px300'/>
              </div>
              <div className='hero-title'>
                <div className='hero-title-wrapper'>
                  <Image src={iconHero} width={13} height={13} alt='test' />
                  <p>NEW RELEASE</p>
                </div>
                <p>{slide.album}</p>
              </div>
            </div></Link>
          </SwiperSlide>
        ))}
        {slide2.map((slide) => (
          <SwiperSlide key={slide.id}>
          <Link href={`./albums/${slide.id}`}><div>
            <div className='image-container'>
              <Image src={slide.img} width={1280} height={697} alt='test' className='image' id='px1440'/>
              <Image src={slide.img} width={1100} height={550} alt='test' className='image' id='px1280'/>
              <Image src={slide.img} width={950} height={550} alt='test' className='image' id='px1024'/>
              <Image src={slide.img} width={700} height={550} alt='test' className='image' id='px800'/>
              <Image src={slide.img} width={500} height={500} alt='test' className='image' id='px600'/>
              <Image src={slide.img} width={280} height={400} alt='test' className='image' id='px300'/>
            </div>
            <div className='hero-title'>
              <div className='hero-title-wrapper'>
                <Image src={iconHero} width={13} height={13} alt='test' />
                <p>NEW RELEASE</p>
              </div>
              <p>{slide.album}</p>
            </div>
          </div></Link>
        </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default Hero;