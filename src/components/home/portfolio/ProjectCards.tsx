import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: StaticImageData
  href: string
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  href,
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="group relative block hover:text-white rounded-md w-72 lg:w-96 cursor-pointer "
    >
      <div className="p-3 relative">
        <div className="">
          <div className="absolute top-0 left-0 w-28 h-28 bg-primary rounded-tr-md rounded-tl-md rounded-bl-md  group-hover:opacity-0 transition-opacity duration-300" />

          <div className="absolute bottom-0 right-0 w-28 h-28 bg-secondary rounded-tr-md rounded-bl-md rounded-br-md  group-hover:opacity-0 transition-opacity duration-300" />

          <div className="relative bg-[#f8f8f9] rounded-md group hover:shadow-[0px_5px_15px_rgba(0,0,0,0.35)] shadow-xl">
            <div className="relative h-72 w-full">
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover rounded-md"
              />
            </div>

            <div className="absolute rounded-md w-2/3 mx-auto shadow-2xl bg-secondary text-center top-1/3 -inset-x-full flex flex-col gap-2 justify-center items-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="text-gray-200 text-center">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
