import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import SwiperCore, {Pagination} from 'swiper';

SwiperCore.use([Pagination]);

const Swiperbar = () => {
    return (
        <div className="swiperbar">
            <Swiper className="mySwiper" pagination={true} centeredSlides={true}>
                <SwiperSlide><img className="swiperImg" src="coffee1.jpg" alt="Coffee pour"/></SwiperSlide>
                <SwiperSlide><img className="swiperImg" src="coffee2.jpg" alt="Coffee art"/></SwiperSlide>
                <SwiperSlide><img className="swiperImg" src="coffee3.jpg" alt="Coffee bean heart"/></SwiperSlide>
                <SwiperSlide><img className="swiperImg" src="coffee4.jpg" alt="Smiley coffee"/></SwiperSlide>
            </Swiper>
        </div>
    );
}
 
export default Swiperbar;