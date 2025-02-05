import React from 'react'
import about_1 from '@assets/img/about-1.webp'
import about_2 from '@assets/img/about-2.webp'
import Image from 'next/image'
import Link from 'next/link'
import { companyStats } from '@utils/constants/landingData'
import { FaGlobe, FaRegStar } from 'react-icons/fa'
import { BiNetworkChart } from 'react-icons/bi'
import { HiOutlineLightBulb } from 'react-icons/hi'

function AboutSection() {
  return (
    <div className="w-full bg-[#f7fafb] py-8 my-16">
      <div className="container mx-auto ">
        <div className="container w-11/12 pt-5 mx-auto flex flex-col lg:flex-row justify-between items-center md:gap-10 ">
          <div className="w-2/3 md:w-1/2 lg:w-1/4 xl:w-1/4 relative">
            <Image
              src={about_1}
              alt=""
              layout="responsive"
              width={500}
              height={500}
              className="rounded-lg shadow-xl"
              style={{ marginBottom: '25%' }}
            />
            <div className="absolute top-1/4 left-1/4 w-10/12 md:w-full">
              <Image
                src={about_2}
                alt=""
                layout="responsive"
                width={500}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
          <div className="container w-11/12 lg:w-3/5 flex flex-col gap-3 text-balance">
            <h1 className="text-secondary-dark font-semibold lg:text-2xl text-base">
              About Us
            </h1>
            <h3 className="text-neutral xl:text-3xl text-lg font-semibold lg:font-bold tracking-wide">
              Committed To Deliver The Best Of Everything Either It Is Software
              Solution or Human Resource
            </h3>
            <div className="relative flex flex-col">
              <div className="absolute top-0 left-0 w-2 rounded-md h-full bg-secondary-dark hidden lg:block" />

              <p className="lg:pl-8 text-neutral-medium text-base font-normal tracking-wide">
                Axcel is a global leader in providing tailored IT solutions,
                comprehensive business services, and enterprise-grade
                applications. With a team of highly qualified professionals, we
                specialize in guiding through every stage of journey — from
                detailed requirements analysis to seamless product deployment.
                What sets Axcel apart is our focusing on delivering premium
                quality, addressing unique business challenges, and enhancing
                productivity. By understanding each goal, we craft innovative
                strategies and solutions that enable us to achieve sustainable
                growth and operational excellence.
              </p>
            </div>
            <div className="my-5 flex flex-col md:flex-row gap-3 md:gap-10">
              <div className="flex flex-col xl:w-2/3 gap-3 w-full">
                <p className="text-neutral text-lg flex items-center gap-3">
                  <BiNetworkChart className="text-secondary-dark text-3xl font-bold" />
                  End-to-End IT Solutions
                </p>
                <p className="text-neutral text-lg flex items-center gap-3">
                  <FaGlobe className="text-secondary-dark text-2xl w-7 font-bold" />
                  Global Expertise
                </p>
              </div>
              <div className="flex flex-col xl:w-2/3 gap-3 w-full">
                <p className="text-neutral text-lg flex items-center gap-3">
                  <HiOutlineLightBulb className="text-secondary-dark text-3xl font-bold" />
                  Quality-Driven Innovation
                </p>
                <p className="text-neutral text-lg flex items-center gap-3">
                  <FaRegStar className="text-secondary-dark text-2xl w-7 font-bold" />
                  Commitment to Excellence
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-between">
              <Link
                href="/about"
                className="bg-secondary text-white text-lg font-semibold rounded-full hover:bg-secondary-dark px-6 py-4 hover:text-white"
              >
                More About Us
              </Link>
              <div className="bg-overlay-default cursor-pointer flex flex-col items-center text-white text-lg font-semibold rounded-md px-6 py-2 shadow-lg">
                <p className="text-xl font-semibold">100+ Trusted</p>
                <p className="text-base">Global Clients</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 text-center items-center justify-between mt-6">
              {companyStats.map((stat) => (
                <div
                  key={stat.count}
                  className="bg-secondary hover:bg-secondary-dark cursor-pointer rounded-2xl w-60 shadow-sm hover:shadow-lg h-32 xl:h-36 flex flex-col items-center justify-center gap-3"
                >
                  <div className="flex gap-2 items-center">
                    <span className="text-white xl:text-4xl text-3xl font-bold">
                      {stat.count}
                    </span>
                    <h4 className="text-white font-bold xl:text-4xl text-3xl">
                      {stat.operator}
                    </h4>
                  </div>
                  <div className="w-100 d-flex align-items-center justify-content-center">
                    <p className="text-white xl:text-xl text-base">
                      {stat.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
