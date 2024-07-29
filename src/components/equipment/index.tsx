import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import equipment1 from '@/assets/images/equipments/2.jpg';
import equipment2 from '@/assets/images/equipments/3.jpg';
import equipment3 from '@/assets/images/equipments/4.jpg';
import equipment4 from '@/assets/images/equipments/5.jpg';

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
`;

const equipments = [equipment1, equipment2, equipment3, equipment4];

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
        className="suplement-swiper"
      >
        {equipments.map((url, idx) => {
          return (
            <SwiperSlide key={idx}>
              <img src={url} alt={url} loading="lazy" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </ContainerWrapper>
  );
};

export default Equipment;
