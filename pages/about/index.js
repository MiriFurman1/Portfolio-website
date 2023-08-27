import React, { useState } from "react";
import {
  FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaFigma
} from 'react-icons/fa'

import {
  SiNextdotjs, SiFramer, SiAdobexd, SiAdobephotoshop
} from 'react-icons/si'

import Avatar from '../../components/Avatar'
import Circles from '../../components/Circles'

import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key="html" />,
          <FaCss3 key="css" />,
          <FaJs key="js" />,
          <FaReact key="react"/>,
          <SiNextdotjs key="nextjs"/>,
          <SiFramer key="framer"/>,

        ],
      },
    ],
  },
  {

  },
  {
    title: 'experience',
    info: [
      {
        title: 'Fullstack Developer Intern',
        stage: '2023',
      },
      {
        title: 'Chemical Analyst Hylabs Laboratories',
        stage: '2020 - 2022',
      },

    ],
  },
  {
    title: 'certificates',
    info: [
      {
        title: 'AI workshop Appleseeds ',
        stage: '2013',
      },
      {
        title: 'Fullstack Bootcamp Appleseeeds',
        stage: '2022-2023',
      },
      {
        title: 'B.Sc Chemical Engineering Ben Gurion University of The Negev',
        stage: '2015-2020',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
    <Circles />

    <motion.div variants={fadeIn('right', 0.2)} initial="hidden" animate="show" exit="hidden" className="hidden xl:flex absolute bottom-0 -left-[370px]">
      <Avatar />
    </motion.div>

    <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">

      <div className="flex-1 flex flex-col justify-center">text</div>
      <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
        {aboutData.map((item, itemIndex)=>{
          return(
            <div key={itemIndex} className={`${index=== itemIndex &&'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
            onClick={()=>setIndex(itemIndex)}
            >{item.title}</div>
          )
        })}
        </div>
        <div className="bg-pink-400/10 py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center">
          {aboutData[index].info.map((item,itemIndex)=>{
            return (
              <div key={itemIndex}>
                <div> {item.title}</div>
                </div>
            )
          })}
        </div>
      </div>
    </div>
  </div>;
};

export default About;
