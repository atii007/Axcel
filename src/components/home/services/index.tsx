import React from 'react'
import { ServicesData } from '@utils/constants/landingData'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <div className="container my-16 mx-auto">
      <div className="container mx-auto flex flex-col gap-3">
        <div className="text-center mx-auto pb-5">
          <h5 className="text-secondary text-2xl font-semibold mb-3">
            Our Services
          </h5>
          <h1 className="px-5 text-xl lg:text-3xl font-bold text-neutral">
            Services Built Specifically For Your Business
          </h1>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center">
          {ServicesData.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
