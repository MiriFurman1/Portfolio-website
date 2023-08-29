import React, { useState } from "react";
import {
  FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs
} from 'react-icons/fa'

import {
  SiNextdotjs, SiFramer, SiMongodb, SiMysql
} from 'react-icons/si'

import Avatar from '../../components/Avatar'
import Circles from '../../components/Circles'

import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

import CountUp from "react-countup";

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
          <FaReact key="react" />,
          <FaNodeJs key="nodejs" />,
          <SiMongodb key={"mongodb"} />,
          <SiMysql key={"mysql"} />,
          <SiNextdotjs key="nextjs" />,
          <SiFramer key="framer" />,

        ],
      },
    ],
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
        stage: '2023',
      },
      {
        title: 'Fullstack Bootcamp Appleseeeds',
        stage: '2022-2023',
      },
      {
        title: 'B.Sc Chemical Engineering Ben Gurion University ',
        stage: '2016-2020',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  const [repoNum, setRepoNum] = useState(36);

  //get the number of current pubic repos
  async function getRepoData() {
    const res = await fetch('https://api.github.com/users/MiriFurman1/repos')
    if (!res.ok) {
      console.log('Failed to fetch data')
    }
    let result = await res.json()
    setRepoNum(result.length)
    return result
  }
  getRepoData()

  return <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
    <Circles />


    <motion.div variants={fadeIn('right', 0.2)} initial="hidden" animate="show" exit="hidden" className="hidden xl:flex absolute -bottom-[200px] -left-[320px] w-[600px]">
      <Avatar />
    </motion.div>

    <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 ">

      <div className="flex-1 flex flex-col justify-center">
        <motion.h2 variants={fadeIn('right', 0.2)} initial="hidden" animate="show" exit="hidden" className="h2 xl:ml-[100px]"> Coding <span className="text-accent">Narratives</span>  Crafting Innovation.</motion.h2>
        <motion.p variants={fadeIn('right', 0.4)} initial="hidden" animate="show" exit="hidden" className="max-w-[600px] mx-auto xl:ml-[100px] mb-6 xl:mb-12 px-2 xl:px-0">Shifting from chemical engineering, I pursued software development driven by passion. Appleseeds Full Stack Developer Bootcamp graduate with analytical expertise and coding skills, ready for impactful roles in Fullstack or Frontend domains.</motion.p>

        {/* counters */}
        <motion.div variants={fadeIn('right', 0.6)} initial="hidden" animate="show" exit="hidden" className="hidden md:flex mdx:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
          <div className="flex flex-1 xl:gap-x-6 ">

            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0  xl:ml-[100px]">
              <div className="text-2xl xl:text:4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={1} duration={10} /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] xl:max-w-[100px] "> Years of experience</div>
            </div>

            <div className="relative flex-1  xl:ml-[100px] ">
              <div className="text-2xl xl:text:4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={`${repoNum}`} duration={7} /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] xl:max-w-[100px] ">repositories</div>
            </div>

          </div>
        </motion.div>
      </div>

      <motion.div variants={fadeIn('left', 0.4)} initial="hidden" animate="show" exit="hidden" className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">

          {aboutData.map((item, itemIndex) => {
            return (
              <div key={itemIndex} className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >{item.title}</div>
            )
          })}
        </div>
        <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
          {aboutData[index].info.map((item, itemIndex) => {
            return (
              <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                <div className="font-light mb-2 md:mb-0"> {item.title}</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4">
                  {item.icons?.map((icon, itemIndex) => {
                    return <div className="text-2xl text-white" key={itemIndex}>{icon}</div>
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </motion.div>
    </div>
  </div>;
};

export default About;
