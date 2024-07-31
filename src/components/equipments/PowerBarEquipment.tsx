import styled from 'styled-components'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import LazyLoad from 'react-lazyload'
import 'swiper/css'
import 'swiper/css/navigation'

import bar1 from '@/assets/images/equipments/bars/1.jpg'
import bar2 from '@/assets/images/equipments/bars/2.jpg'
import bar3 from '@/assets/images/equipments/bars/3.jpg'

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

const equipments = [bar1, bar2, bar3]

const Equipment = () => {
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
        {equipments.map((url, idx) => {
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

export default Equipment
