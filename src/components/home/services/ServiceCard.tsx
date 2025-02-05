import React from 'react'
import type { ServicesDataType } from '@utils/types/landingData'

interface ServiceCardProps {
  service: ServicesDataType
}

function ServiceCard({ service }: ServiceCardProps) {
  const { title, description } = service
  return (
    <div
      key={title}
      className="relative shadow-[0px_5px_15px_rgba(0,0,0,0.35)] bg-[#f8f8f9] hover:shadow-lg hover:text-white rounded-lg min-h-[425px] w-72 lg:w-96 flex justify-center items-center group overflow-hidden cursor-pointer"
    >
      <div className="absolute rounded-lg inset-0 bg-overlay-default transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
      <div className="relative  flex flex-col justify-center items-center text-center gap-7 z-10">
        <service.icon className="text-secondary group-hover:text-primary transition-colors duration-300 text-8xl font-bold " />
        <h4 className="text-neutral font-semibold lg:text-3xl text-xl group-hover:text-white transition-colors duration-300">
          {service.title}
        </h4>
        <p className=" text-neutral-medium text-base px-5 text-balance lg:text-center lg:px-0 group-hover:text-white transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  )
}

export default ServiceCard
