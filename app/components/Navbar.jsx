"use client";
import React, { useState } from "react";
import useMediaQuery from "../utils/useMediaQuery";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width: 1280px)");

  const linkStyle =
    "text-xl leading-6 font-jost text-primary-200 hover:underline ";

  return (
    <div className="max-w-[1200px] px-12 xl:px-0 m-auto w-full py-8 flex justify-between items-center ">
      <Link href="/" className="font-bold">
        {" "}
        App NextJs
      </Link>

      {matches && (
        <div className="flex flex-row gap-6 ">
          <Link href="/" className={linkStyle}>
            Inicio
          </Link>
          <Link href="/carrito" className={linkStyle}>
            Carrito
          </Link>
          <Link href="/admin" className={linkStyle}>
            ¿Eres admin?
          </Link>
        </div>
      )}

      {!matches && (
        <div
          onClick={() => setToggled(!toggled)}
          className="space-y-1 cursor-pointer"
        >
          <motion.span
            animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
            className="block h-0.5 w-8 bg-black"
          ></motion.span>
          <motion.span
            animate={{ width: toggled ? 0 : 24 }}
            className="block h-0.5 w-6 bg-black"
          ></motion.span>
          <motion.span
            animate={{
              rotateZ: toggled ? -45 : 0,
              y: toggled ? -8 : 0,
              width: toggled ? 32 : 16,
            }}
            className="block h-0.5 w-4 bg-black"
          ></motion.span>
        </div>
      )}

      {toggled && !matches && (
        <motion.nav
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col fixed h-screen bg-white w-[75%] md:w-[90%] text-black bottom-0 left-0 gap-6 items-center justify-center"
        >
          <Link href="/" className={linkStyle}>
            Inicio
          </Link>
          <Link href="/carrito" className={linkStyle}>
            Carrito
          </Link>
          <Link href="/admin" className={linkStyle}>
            ¿Eres admin?
          </Link>
        </motion.nav>
      )}
    </div>
  );
};

export default Navbar;
