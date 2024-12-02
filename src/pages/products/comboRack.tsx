import styled from 'styled-components'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import LazyLoad from 'react-lazyload'

import rack1 from '@/assets/images/products/comboRack/1.jpg'
import rack2 from '@/assets/images/products/comboRack/2.jpg'
import rack3 from '@/assets/images/products/comboRack/3.jpg'
import rack4 from '@/assets/images/products/comboRack/4.jpg'
import rack5 from '@/assets/images/products/comboRack/5.jpg'
import rack6 from '@/assets/images/products/comboRack/6.jpg'
import rack7 from '@/assets/images/products/comboRack/7.jpg'
import rack8 from '@/assets/images/products/comboRack/8.jpg'

const ContainerWrapper = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }

  .swiper {
    margin: 0;
    height: 100%;

    .swiper-slide {
      height: 100%;
      aspect-ratio: 9 / 16;

      img {
        object-fit: cover;
        object-position: center;
      }
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: var(--color-gray-500);
  }

  .lazyload-wrapper {
    height: 100%;
  }
`

const comboRacks = [rack1, rack2, rack3, rack4, rack5, rack6, rack7, rack8]

const ComboRack = () => {
  return (
    <ContainerWrapper>
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className='suplement-swiper'
      >
        {comboRacks.map((url, idx) => {
          return (
            <SwiperSlide key={idx}>
              <LazyLoad>
                <img src={url} alt={url} loading='lazy' />
              </LazyLoad>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </ContainerWrapper>
  )
}

export default ComboRack
