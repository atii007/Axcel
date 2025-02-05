'use client'

import React from 'react'
import { PortfolioData } from '@utils/constants/landingData'
import ProjectCard from './ProjectCards'
import Link from 'next/link'

function PortfolioSection() {
  const [activeFilter, setActiveFilter] = React.useState('all')

  const filteredProjects =
    activeFilter === 'all'
      ? PortfolioData
      : PortfolioData.filter((project) => project.category === activeFilter)

  return (
    <div className="container my-16 mx-auto ">
      <div className="container mx-auto flex flex-col gap-10">
        <div className="text-center mx-auto">
          <h5 className="text-secondary text-2xl font-semibold mb-3">
            Our Project
          </h5>
          <h1 className="px-5 text-xl lg:text-3xl font-bold text-neutral">
            Our Recently Completed Projects
          </h1>
        </div>

        {/* <div className="text-center mx-auto flex gap-5">
          <button
            onClick={() => setActiveFilter('all')}
            className={` border border-gray-300  text-lg font-semibold rounded-md px-6 py-3 flex items-center justify-center hover:border-secondary ${
              activeFilter === 'all'
                ? 'bg-secondary text-white hover:bg-secondary-dark'
                : 'text-secondary'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveFilter('web')}
            className={` border border-gray-300  text-lg font-semibold rounded-md px-6 py-3 flex items-center justify-center hover:border-secondary ${
              activeFilter === 'web'
                ? 'bg-secondary text-white hover:bg-secondary-dark'
                : 'text-secondary'
            }`}
          >
            Web Dvelopment
          </button>
          <button
            onClick={() => setActiveFilter('mobile')}
            className={` border border-gray-300  text-lg font-semibold rounded-md px-6 py-3 flex items-center justify-center hover:border-secondary ${
              activeFilter === 'mobile'
                ? 'bg-secondary text-white hover:bg-secondary-dark'
                : 'text-secondary'
            }`}
          >
            Mobile Development
          </button>
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              href={project.href}
            />
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Link
            href="/portfolio"
            className="bg-secondary text-white text-lg font-semibold rounded-full hover:bg-secondary-dark w-40 h-12 flex items-center justify-center hover:text-white"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PortfolioSection
