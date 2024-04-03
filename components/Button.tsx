'use client';

import Image from "next/image";
import { motion } from 'framer-motion';

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
}

const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  return (
    <motion.button
    className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`}
    type={type}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </motion.button>
  )
}

export default Button