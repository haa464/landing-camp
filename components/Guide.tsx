'use client';

import Image from 'next/image'
import React from 'react'

import { motion, Variants } from 'framer-motion';

const cardVariants: Variants = {
  offscreen: {
    y: 80
  },
  onscreen: {
    y: 2,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const Guide = () => {
  return (
    <motion.section className="flexCenter flex-col"
      initial = {{
        y: -40
      }}
      whileInView={{
        y: -50
      }}
      animate={{ y: -10 }}
      transition={{
        type: "spring", 
        stiffness: 100,
        ease: "linear",
        duration: 8,
        x: { duration: 2 }
      }}>
      <div className="padding-container max-container w-full pb-24" id='services'>
      
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Guide You to Easy Path</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain</p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image 
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <motion.div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={cardVariants}>
          <Image 
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className='flex w-full flex-col'>
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">48 min</p>
              </div>
              <p className="bold-20 mt-2">Aguas Calientes</p>
            </div>

            <div className='flex w-full flex-col'>
              <p className="regular-16 text-gray-20">Start track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Wonorejo Pasuruan</h4>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Guide