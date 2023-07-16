import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import slider from '../../utils/slider';
import iconHero from '../../public/icon-hero.svg'

const Hero = () => {
  return (
    <>
      <Swiper 
      rewind={true}
      navigation={true} 
      modules={[Autoplay, Navigation]} 
      className="mySwiper"
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}>
        {slider.map((slide) => (
          <SwiperSlide>
            <div>
            <Image src={slide.img} width={1280} height={697} alt={slide.alt} />
            <div className='hero-title'>
              <div className='hero-title-wrapper'>
                <Image src={iconHero} width={17} height={17}/>
                <p>NEW RELEASE</p>
              </div>
              <p>{slide.album}</p>
            </div>
            </div>
            </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default Hero;