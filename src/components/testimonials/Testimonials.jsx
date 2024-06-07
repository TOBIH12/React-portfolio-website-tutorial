import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    id: 1,
    image: AVTR1,
    name: 'Skyler White',
  },
  {
    id: 2,
    image: AVTR2,
    name: 'Jesse Pinkman',
  },
  {
    id: 3,
    image: AVTR3,
    name: 'Walter White',
  },
  {
    id: 4,
    image: AVTR4,
    name: 'Aishat Muhammed',
  },
]

const Testimonials = () => {
  return (
    <section id="testimonial">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[Navigation, Pagination, Scrollbar, A11y]}
       spaceBetween={40}
       slidesPerView={1}
       navigation
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
       onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
       >
        {
          data.map(({id, image, name }) => {
            return (
              <SwiperSlide key={id} className="testimonial">
          <div className="client__avatar">
            <img src={image} />
          </div>
          <h5 className="client__name">{name}</h5>
            <small className="client__review">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias magni quos distinctio ipsum doloribus eaque nobis aut fugit alias, minima, in voluptas nihil voluptatem adipisci amet rem repellendus dolor enim.
            </small>
        </SwiperSlide>
            ) 
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
