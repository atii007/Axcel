import React from 'react'
import type { TeamMemberData } from '@utils/types/landingData'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Image from 'next/image'
type TeamCardProps = {
  member: TeamMemberData
}

const TeamCard = ({ member }: TeamCardProps) => {
  return (
    <div
      key={member.id}
      className=" bg-[#f8f8f9] rounded-lg overflow-hidden shadow-[0px_5px_15px_rgba(0,0,0,0.35)] min-h-[500px] col-span-1"
    >
      <div className="relative">
        <div
          className="absolute -top-52 left-0 right-0 h-[400px] bg-secondary-dark"
          style={{
            clipPath: 'polygon(50% 50%, 140% 50%, 50% 90%, -40% 50%)',
          }}
        />
        <div className="h-12" />
        <div className="relative z-10">
          <div className="w-72 h-72 mx-auto rounded-full border-8 border-white bg-secondary overflow-hidden mb-6 ">
            <Image
              src={member.image}
              alt={member.name}
              width={300}
              height={300}
              className="w-full h-full object-cover border-8 border-secondary-dark rounded-full"
            />
          </div>
          <div className="text-center flex flex-col">
            <h4 className="text-2xl font-bold text-neutral">{member.name}</h4>
            <p className="text-gray-600 text-lg mb-6">{member.designation}</p>
            <div className="flex justify-center gap-3">
              <a
                href={member.socialLinks.facebook}
                className="w-8 h-8 flex items-center justify-center bg-secondary-dark rounded-full text-white transition-colors"
              >
                <FaFacebook className="w-4 h-4" />
              </a>
              <a
                href={member.socialLinks.twitter}
                className="w-8 h-8 flex items-center justify-center bg-secondary-dark rounded-full text-white transition-colors"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
              <a
                href={member.socialLinks.instagram}
                className="w-8 h-8 flex items-center justify-center bg-secondary-dark rounded-full text-white transition-colors"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href={member.socialLinks.linkedin}
                className="w-8 h-8 flex items-center justify-center bg-secondary-dark rounded-full text-white transition-colors"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamCard
