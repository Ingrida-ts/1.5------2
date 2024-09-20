import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
Swiper.use([Navigation, Pagination])
let swiper;
function initSwiper() {
         
        if (window.innerWidth <= 767 && !swiper) {
            let pag = document.querySelector('.swiper-pagination');
            pag.style.display = 'block';

             swiper = new Swiper('.swiper', {
                loop: true,
                slidesPerView: 'auto',
                spaceBetween: 0,
        
                pagination: {
                el: '.swiper-pagination',
                autoHeight: true,
                clickable: true,
                },
            });

        } else if (window.innerWidth > 767 && swiper) {
                    
                    swiper.destroy();
                    swiper = null;
                    let pag = document.querySelector('.swiper-pagination');
                    pag.style.display = 'none';
                }
            }
            window. addEventListener('resize', initSwiper);
            initSwiper();
