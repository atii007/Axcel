'use client'

import React from 'react'
import { TeamMembersData } from '@utils/constants/landingData'
import TeamCard from './TeamCard'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'

export function TeamSlider() {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= TeamMembersData.length ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? TeamMembersData.length - 3 : prevIndex - 1
    )
  }

  const visibleMembers = TeamMembersData.slice(currentIndex, currentIndex + 3)

  return (
    <section className="my-16">
      <div className="container mx-auto flex flex-col gap-5 relative">
        <div className="text-center mx-auto pb-5">
          <h5 className="text-secondary text-2xl font-semibold mb-3">
            Our Team
          </h5>
          <h1 className="px-5 text-xl lg:text-3xl font-bold text-neutral">
            Meet our expert Team
          </h1>
        </div>

        <div className="w-full flex lg:justify-end absolute gap-7 ">
          <button
            className="rounded-full bg-secondary hover:bg-secondary-dark z-10 border-none text-white w-12 h-12 flex items-center justify-center"
            onClick={prevSlide}
          >
            <FaArrowLeftLong className="h-4 w-4" />
          </button>
          <button
            className="rounded-full bg-secondary hover:bg-secondary-dark z-10 border-none text-white w-12 h-12 flex items-center justify-center"
            onClick={nextSlide}
          >
            <FaArrowRightLong className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 transition-transform duration-300 ease-in-out">
          {visibleMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}
