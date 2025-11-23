import Swiper from 'swiper';
import 'swiper/css';

export const useHeroSlider = () => {
    new Swiper('.hero__slider--first', {
        slidesPerView: '3',
        watchSlidesVisibility: false,
        spaceBetween: 32,
        loop: true,
        centeredSlides: false,
        breakpoints: {
            320: {
                slidesPerView: '1',
                loop: true,
            },

            769: {
                slidesPerView: '2',
                loop: true,
            },

            1025: {
                slidesPerView: 'auto',
                loop: true,
            },
        },
    });
};
