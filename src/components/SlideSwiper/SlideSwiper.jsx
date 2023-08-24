import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { ImageOverlay } from '../ImageOverlay/ImageOverlay';

export const SlideSwiper = ({images}) => {
    const pagination = {
        clickable: true,
    }
    return (
        <Swiper pagination={pagination} modules={[Pagination]}> 
        {images.map(image => (<SwiperSlide key={image.id}><ImageOverlay url={image.url}/></SwiperSlide>))}
        </Swiper>
    );
  }
  