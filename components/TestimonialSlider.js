



import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/grid';

import { Grid, Pagination } from "swiper";
import Image from 'next/image';
import Link from 'next/link';

import { BsArrowRight } from 'react-icons/bs';

const testimonialData = [
  {
    image: '/Einstein.jpeg',
    name: 'Albert Einstein',
    position: 'Theoretical Web Developer Extraordinaire',
    message:
      "As they say, imagination is more important than knowledge. And Miri's web skills have shown me a new universe of creative possibilities! If only I could've wrapped my head around JavaScript.",
  },
  {
    image: '/Hermione.jpeg',
    name: 'Hermione Granger',
    position: 'Wizard of Web Development',
    message:
      "Believe me, I've delved into countless magical tomes, but Miri's web development skills have left me more spellbound than any incantation. They've managed to infuse code with the enchantment only seen at Hogwarts!",
  },
  {
    image: '/Rick.jpeg',
    name: 'Rick Sanchez',
    position: 'Multiverse Coding Genius',
    message:
      "Morty, listen here. This Miri kid knows their stuff. They've mastered the interdimensional complexities of coding, making me wonder if I need to rewrite the laws of the multiverse!",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={3}
      loop={true}
      pagination={{
        clickable: true
      }}
      grid={{
        rows: 1,
      }}
      modules={[Grid, Pagination]}
      className="h-[300px]"
    >
      {testimonialData.map((person, index) => (
        <SwiperSlide key={index}>
          <div>
            <div>
              <div>
                <div>
                  avatar image   
                </div>
                <div> avatar name</div>
                <div>position</div>
              </div>
              <div>message</div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;