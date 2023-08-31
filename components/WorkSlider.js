
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/grid';

import { Grid, Pagination } from "swiper";
import Image from 'next/image';

import { BsArrowRight } from 'react-icons/bs'
const workSlides = [{
  title: 'Happily Ever After',
  path: '/HappilyEverAfter.png',
  description:'Web app for wedding planning, including to-do lists, guest management, emails, and QR-based photo sharing.',
  demoLink:'https://happily-ever-after.netlify.app/',
  githubLink:'https://github.com/MiriFurman1/Happily-Ever-After'
},
{
  title: 'Happy Pet',
  path: '/HappyPet.png',
  description:'Web project using the PetFinder API to simplify pet adoption by connecting organizations and individuals to adoptable pets.',
  demoLink:'https://happy-pet-app.netlify.app/',
  githubLink:'https://github.com/MiriFurman1/Happy-pet'
},
{
  title: 'NextAd',
  path: '/NextAd.png',
  description:'Dynamic landing page Creation for Small Businesses',
  demoLink:'',
  githubLink:''
},
{
  title: 'Wether Vision',
  path: '/WeatherVision1.png',
  description:'Web app that showcases city weather via AccuWeather API with search, and favorites page',
  demoLink:'https://weather-app-miri.netlify.app/',
  githubLink:'https://github.com/MiriFurman1/Weather-App'
},]
 



const WorkSlider = () => {
  return <Swiper
    spaceBetween={10}
    slidesPerView={1}
    loop={true}
    pagination={{
      clickable: true
    }}
    grid={{
      rows: 1,
    }}
    modules={[Grid,Pagination]}
    className="h-[300px] "
  >
    {workSlides.map((slide, index) => {
      return (<SwiperSlide  key={index} >
        <div className=' gap-4 cursor pointer '>
              <div key={index} className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                <div className='flex flex-col items-center justify-center relative overflow-hidden '>
                  <Image src={slide.path} width={500} height={300} alt="" className='rounded-lg w-[500px]'/>
                  {/* overlay gradient */}
                  <div className='absolute inset-0 bg-gradient-to-r from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-60 transition-all duration-700'></div>
                  <div className='flex flex-col items-center absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                    <div>{slide.title}</div>
                    <div>{slide.description}</div>
                  </div>
                </div>
              </div>
        </div>
      </SwiperSlide>
      )
    })}
  </Swiper>;
};

export default WorkSlider;

