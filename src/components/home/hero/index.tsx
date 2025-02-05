import Link from 'next/link'
import Image from 'next/image'
import heroImage from '@assets/img/heroImage.webp'

function HeroSection() {
  return (
    <div className="w-full overflow-hidden">
      <div className="relative px-0 max-auto w-full overflow-hidden">
        <div className=" bg-black/70 w-full min-h-[90vh] lg:px-6 py-12 relative z-10 flex items-center justify-center">
          <div className="w-11/12 mx-auto flex flex-col text-2xl gap-7 items-center">
            <h5 className="text-secondary font-bold text-base lg:text-lg">
              Best IT Solutions
            </h5>
            <h1 className="font-bold text-xl text-center lg:text-4xl md:text-2xl text-white">
              An Innovative IT Solutions Agency
            </h1>
            <p className="w-11/12 text-center text-base md:text-lg lg:text-2xl lg:w-3/5 mx-auto text-white">
              We Have the Power to Make Your Dreams Come True with the help of
              professional and experienced website and mobile app designers and
              developers.
            </p>

            <div className="flex flex-col md:flex-row gap-4 items-center">
              <Link
                href="/contact"
                className="bg-secondary text-white text-lg font-semibold rounded-full hover:bg-secondary-dark w-40 h-12 flex items-center justify-center hover:text-white"
              >
                Contact Us
              </Link>
              <Link
                href="/about"
                className="bg-primary text-white text-lg font-semibold rounded-full hover:bg-primary-dark w-40 h-12 flex items-center justify-center hover:text-white"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
        <Image
          className="absolute inset-0 object-cover w-full h-full"
          src={heroImage}
          alt={'heroImage'}
          width={1440}
          height={1440}
        />

        {/* <div className="absolute rounded-full opacity-25 w-96 h-96 top-0 right-0 border-[70px] border-primary bg-transparent"></div>

        <div className="absolute opacity-25 w-32 h-[750px] -bottom-40  left-28  bg-primary -rotate-45"></div>
        <div className="absolute opacity-25 w-60 h-[750px] -bottom-52  -left-28  bg-secondary -rotate-45"></div> */}
      </div>
    </div>
  )
}

export default HeroSection
