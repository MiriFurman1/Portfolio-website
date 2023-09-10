
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/grid';
import 'swiper/css/navigation';

import { Grid, Pagination, Navigation} from "swiper";
import Image from 'next/image';
import Link from 'next/link';


const workSlides = [{
  title: 'Happily Ever After',
  path: '/HappilyEverAfter.png',
  description: 'Web app for wedding planning, including to-do lists, guest management, emails, and QR-based photo sharing.',
  demoLink: 'https://happily-ever-after.netlify.app/',
  githubLink: 'https://github.com/MiriFurman1/Happily-Ever-After',
  technologies: ['React', 'NodeJs', 'Express', 'MongoDB']
},
{
  title: 'Happy Pet',
  path: '/HappyPet.png',
  description: 'Web project using the PetFinder API to simplify pet adoption by connecting individuals to adoptable pets.',
  demoLink: 'https://happy-pet-app.netlify.app/',
  githubLink: 'https://github.com/MiriFurman1/Happy-pet',
  technologies: ['React', 'Firebase']
},
{
  title: 'NextAd',
  path: '/NextAd.png',
  description: 'Dynamic landing page Creation for Small Businesses',
  demoLink: '',
  githubLink: '',
  technologies: ['NextJS', 'NodeJs', 'MySql']
},
{
  title: 'Wether Vision',
  path: '/WeatherVision1.png',
  description: 'Web app that showcases city weather via AccuWeather API with search, and favorites page',
  demoLink: 'https://weather-app-miri.netlify.app/',
  githubLink: 'https://github.com/MiriFurman1/Weather-App',
  technologies: ['React', 'MUI', 'Zustand']
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
    modules={[Grid, Pagination]}
    className="h-[300px] "
  >
    {workSlides.map((slide, index) => {
      return (<SwiperSlide key={index} >
        <div className=' gap-4 cursor pointer text-center text-white '>
          <div key={index} className="relative rounded-lg overflow-hidden flex items-center justify-center group">
            <div className='flex flex-col items-center justify-center relative overflow-hidden '>
              <Image src={slide.path} width={500} height={300} alt="" className='rounded-lg w-[500px]' />
              {/* overlay gradient */}
              <div className='absolute inset-0 bg-gradient-to-r from-[#787373] via-[#e24eca] to-[#351496] opacity-0 group-hover:opacity-75 transition-all duration-700'></div>
              <div className='flex flex-col w-[90%] items-center justify-center absolute bottom-0 translate-y-full group-hover:-translate-y-5  transition-all duration-300'>
                <div className='text-xl'>{slide.title}</div>
                <div className='hidden md:block'>{slide.description}</div>

                <div className='flex text-sm'>
                  <Link href={slide.demoLink} className='m-2 bg-white text-black p-2 rounded hover:bg-[#351496] hover:text-white transition-all duration-400'>Demo</Link>
                  <Link href={slide.githubLink} className='m-2 bg-white text-black p-2 rounded hover:bg-[#351496] hover:text-white transition-all duration-400'>Github</Link>
                </div>

                <div className='flex flex-row flex-wrap text-sm'>
                  {slide.technologies.map((tech, index) => {
                    return <p key={index} className='m-1'>
                      {tech}
                    </p>
                  })}
                </div>

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

