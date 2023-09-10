



import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation, Pagination } from "swiper";
import Image from 'next/image';
import Link from 'next/link';

import { FaQuoteLeft } from 'react-icons/fa';

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
      loop={true}
      navigation={true}
      pagination={{
        clickable: true
      }}
      modules={[Navigation,Pagination]}
      className="h-[450px] "
    >
      {testimonialData.map((person, index) => (
        <SwiperSlide key={index}>
          <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
            <div className='w-full max-w-[350px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
              <div className='flex flex-col justify-center'>
                <div className='w-[150px] xl:w-[200px] mb-2 mx-auto'>
                  <Image className="rounded-full hidden sm:block" src={person.image} width={200} height={200} alt=""/>
                </div>
                <div className='text-lg'>{person.name}</div>
                <div className='text-[12px] uppercase font-extralight tracking-widest hidden sm:block'>{person.position}</div>
              </div>
            </div>
            <div className=' flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20 '>
              <div className='mb-4 hidden md:block'><FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' /></div>
              <div className='xl:text-lg text-center md:text-left w-[300px]'>{person.message}</div>
            </div>
          </div>

        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;