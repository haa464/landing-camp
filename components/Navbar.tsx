'use client';

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';

const Navbar = () => {

    const [toggle, showMenu] = useState(false);
    const handleclick = () => showMenu(!toggle);

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
          const currentScrollPos = window.pageYOffset;
          setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
          setPrevScrollPos(currentScrollPos);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [prevScrollPos, visible]);

  return (
    <>
    <motion.nav className={`z-[999] bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] h-[6rem]  flexBetween px-6 md:px-[7.4rem] right-0 left-0 ${visible ? 'fixed duration-75' : 'hidden ease-in duration-100 opacity-0'}`}
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1, }}
    transition={{
        duration: 0.4
    }}    
    >
    <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
    </Link>
    <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                {link.label}
            </Link>
        ))}
    </ul>
    <div className="lg:flexCenter hidden">
        <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
        />
    </div>
    <div className="lg:hidden" onClick={handleclick}>
    { toggle ? <Image 
        src="close.svg"
        alt="close"
        width={32}
        height={32}
        className="inline-block cursor-pointer"/> : 
        <Image 
            src="menu.svg"
            alt="menu"
            width={32}
            height={32}
            className="inline-block cursor-pointer text-black" />
    }
    </div>
    </motion.nav>    
    <div className={toggle ? 'z-[999] bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] fixed w-[65%] h-screen ease-in duration-100 p-10' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
        {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className="text-lg font-medium text-gray-50 flex py-6 justify-start cursor-pointer pb-1.5 transition-all hover:font-bold">
                {link.label}
            </Link>
        ))}
    </div>
    </>
  )
}

export default Navbar