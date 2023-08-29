import { RxCrop, RxPencil2, RxDesktop, RxUpload, RxSize, RxArrowTopRight } from "react-icons/rx";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from "swiper";


const serviceData = [
  {
    icon: <RxDesktop />,
    title: 'Front-End Development',
    description: 'Translating designs into interactive and responsive web interfaces using HTML, CSS, JavaScript, React and NextJS.',
  },
  {
    icon: <RxUpload />,
    title: 'Back-End Development:',
    description: 'Creating robust server-side systems, databases, and APIs to power the functionality of your websites.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Transforming ideas into captivating visual designs that resonate with your brand identity.',
  },
  {
    icon: <RxSize />,
    title: 'Responsive Design',
    description: 'Ensuring your website looks and functions flawlessly across all devices and screen sizes.',
  },
  {
    icon: <RxCrop />,
    title: 'Custom Development',
    description: 'Tailoring unique solutions that align perfectly with your specific project requirements.',
  },
];

const ServiceSlider = () => {
  return <Swiper breakpoints={{
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    700: {
      slidesPerView: 3,
      spaceBetween: 15,
    },

  }}
    freeMode={true}
    pagination={{
      clickable: true
    }}
    modules={[FreeMode, Pagination]}
    className="h-[240px] sm:h-[340px]"
  >
    {serviceData.map((item, index) => {
      return (<SwiperSlide key={index}>
        <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 xl:h-[350px]">
          <div className="text-4xl text-accent mb-4">{item.icon}</div>
          <div className="mb-8">
            <div className="mb-2 text-lg">{item.title}</div>
            <p className="max-w-[350px] leading-normal">{item.description}</p>
          </div> 

          <div className="text-3xl">
          <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"/>
          </div>

        </div>
      </SwiperSlide>
      )
    })}
  </Swiper>;
};

export default ServiceSlider;
