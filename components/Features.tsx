'use client';

import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'

import { motion, Variants } from 'framer-motion';

const cardVariants: Variants = {
  offscreen: {
    y: 100,
  },
  onscreen: {
    y: -20,
    x: -100,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const Features = () => {
  return (
    <motion.section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24"
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
      <div className="max-container padding-container relative w-full flex justify-end" id='pricing'>
        <motion.div className="flex flex-1 lg:min-h-[900px]"
         initial="offscreen"
         whileInView="onscreen"
         viewport={{ once: true, amount: 0.8 }}
         variants={cardVariants}>
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </motion.div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className='relative'>
            <Image
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            />
            <h2 className="bold-40 lg:bold-64">Our Features</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem 
                key={feature.title}
                title={feature.title} 
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  )
}

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
}

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 bg-green-50">
        <Image src={icon} alt="map" width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
        {title}
      </h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  )
}

export default Features