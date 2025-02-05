import Link from 'next/link';
import React from 'react';
import { MdEmail } from 'react-icons/md';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
} from 'react-icons/fa';
import Image from 'next/image';
import logo from '@assets/img/brand.webp';
import { IoMdArrowDropright } from 'react-icons/io';

function Footer() {
  return (
    <>
      <div className="w-full py-5 bg-overlay-default" data-wow-delay="0.2s">
        <div className="container mx-auto py-5">
          <div className="grid md:grid-cols-4 lg:grid-cols-8 xl:grid-cols-12 gap-10 xl:justify-items-center container mx-auto px-8 xl:px-0">
            <div className="md:col-span-2 lg:col-span-4 xl:col-span-3">
              <div className="flex flex-col items-start">
                <div className="flex flex-col gap-5">
                  <Image src={logo} alt="logo" width={140} height={140} />
                  <p className="text-neutral-light text-sm md:text-base md:pr-6 lg:pr-10">
                    Axcel is an IT solution providing company committed to
                    deliver best of everything either it is software solution or
                    human resource.
                  </p>
                  <h4 className="text-white text-lg font-semibold">
                    Follow Us
                  </h4>
                  <div className="flex gap-5">
                    <Link
                      href="#"
                      className="text-2xl text-secondary hover:text-neutral-light"
                    >
                      <FaFacebook />
                    </Link>
                    <Link
                      href="#"
                      className="text-2xl text-secondary hover:text-neutral-light"
                    >
                      <FaTwitter />
                    </Link>
                    <Link
                      href="#"
                      className="text-2xl text-secondary hover:text-neutral-light"
                    >
                      <FaLinkedin />
                    </Link>
                    <Link
                      href="#"
                      className="text-2xl text-secondary hover:text-neutral-light"
                    >
                      <FaInstagram />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 lg:col-span-4 xl:col-span-3 ">
              <div className="flex flex-col items-start gap-5">
                <h4 className="text-neutral-light text-xl font-semibold">
                  Explore
                </h4>
                <div className="flex flex-col gap-2">
                  <a
                    href="#"
                    className="text-neutral-light flex gap-3 items-center hover:text-secondary text-sm md:text-base font-medium"
                  >
                    <IoMdArrowDropright className=" text-xl" /> Home
                  </a>
                  <a
                    href="#"
                    className="text-neutral-light flex gap-3 items-center hover:text-secondary text-sm md:text-base font-medium"
                  >
                    <IoMdArrowDropright className=" text-xl" /> Services
                  </a>
                  <a
                    href="#"
                    className="text-neutral-light flex gap-3 items-center hover:text-secondary text-sm md:text-base font-medium"
                  >
                    <IoMdArrowDropright className=" text-xl" /> About Us
                  </a>
                  <a
                    href="#"
                    className="text-neutral-light flex gap-3 items-center hover:text-secondary text-sm md:text-base font-medium"
                  >
                    <IoMdArrowDropright className=" text-xl" /> Portfolio
                  </a>
                  <a
                    href="#"
                    className="text-neutral-light flex gap-3 items-center hover:text-secondary text-sm md:text-base font-medium"
                  >
                    <IoMdArrowDropright className=" text-xl" /> Blogs
                  </a>
                  <a
                    href="#"
                    className="text-neutral-light flex gap-3 items-center hover:text-secondary text-sm md:text-base font-medium"
                  >
                    <IoMdArrowDropright className=" text-xl" /> Testimonials
                  </a>
                  <a
                    href="#"
                    className="text-neutral-light flex gap-3 items-center hover:text-secondary text-sm md:text-base font-medium"
                  >
                    <IoMdArrowDropright className=" text-xl" /> Contact Us
                  </a>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 lg:col-span-4 xl:col-span-3 ">
              <div className="flex flex-col gap-5">
                <h4 className="text-white text-lg font-semibold">
                  Contact Info
                </h4>
                <a
                  href="#"
                  className="text-sm md:text-base text-neutral-light flex items-center gap-3 hover:text-secondary"
                >
                  <FaMapMarkerAlt /> Los Angles California, USA
                </a>
                <a
                  href="#"
                  className="text-sm md:text-base text-neutral-light flex items-center gap-3 hover:text-secondary"
                >
                  <MdEmail /> info@axcelworld.com
                </a>
                <a
                  href="#"
                  className="text-sm md:text-base text-neutral-light flex items-center gap-3 hover:text-secondary"
                >
                  <FaPhoneAlt /> +1(323) 825-3883
                </a>
              </div>
            </div>

            <div className="md:col-span-2 lg:col-span-4 xl:col-span-3 ">
              <div className="flex flex-column container">
                <div className="flex flex-col items-start container gap-5">
                  <h4 className="text-white text-xl font-semibold">
                    Newsletter
                  </h4>
                  <p className="text-neutral-light text-sm md:text-base md:pr-6 lg:pr-10">
                    We’ll help you figure out the best option or solution to
                    accomplish your goals. Subscribe to our weekly newsletter to
                    get the inside scoop.
                  </p>
                  <div className="relative">
                    <input
                      className=" rounded-full py-3 px-4"
                      type="text"
                      placeholder="Enter your email"
                    />
                    <button
                      type="button"
                      className="bg-secondary rounded-full absolute top-0 right-0 py-2 px-4 mt-1 mr-1 text-white text-base font-semibold hover:bg-secondary-dark"
                    >
                      SignUp
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-12 bg-[#121d37] text-white text-sm lg:text-lg font-semibold flex items-center ">
        <div className="container mx-auto flex items-center justify-between px-8 xl:px-0">
          <h5>Axcel &copy; 2016</h5>
          <h5>All Rights Reserved</h5>
        </div>
      </div>
    </>
  );
}

export default Footer;
