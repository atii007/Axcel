'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

import logo from '@assets/img/brand.webp'
import NavMenu from './NavMenu'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
} from 'react-icons/fa'
import { MdMail } from 'react-icons/md'
import { FaLocationDot } from 'react-icons/fa6'
import { BiMenu, BiX } from 'react-icons/bi'

function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  const isActive = (path: string) => pathname === path

  return (
    <>
      <div className="w-full py-2 bg-overlay-default h-16 hidden lg:block border-b border-overlay-light">
        <div className="w-11/12 flex items-center justify-between h-full mx-auto">
          <div className="flex gap-3">
            <Link
              href="#"
              className="flex items-center gap-2 text-base text-neutral-light hover:text-secondary me-8"
            >
              <FaLocationDot className="text-lg text-secondary me-2" />
              Los Angles California, USA
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 text-base text-neutral-light hover:text-secondary me-8"
            >
              <FaPhoneAlt className="text-lg text-secondary me-2" />
              +1(323) 825-3883
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 text-base text-neutral-light hover:text-secondary me-8"
            >
              <MdMail className="text-lg text-secondary me-2" />
              info@axcelworld.com
            </Link>
          </div>
          <div className="flex justify-between items-center w-40">
            <Link href="#" className="">
              <FaFacebook className="text-xl text-white hover:text-secondary" />
            </Link>
            <Link href="#">
              <FaTwitter className="text-xl text-white hover:text-secondary" />
            </Link>
            <Link href="#">
              <FaInstagram className="text-xl text-white hover:text-secondary" />
            </Link>
            <Link href="#">
              <FaLinkedin className="text-xl text-white hover:text-secondary" />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-overlay-default w-full  shadow-lg md:h-20  sticky top-0 z-30 ">
        <div className="w-11/12 mx-auto bg-overlay-default  flex items-center justify-between h-full py-4">
          <div className="w-1/3">
            <Image src={logo} alt="logo" width={120} height={120} />
          </div>

          <NavMenu isActive={isActive} className="hidden lg:flex gap-7" />
          <div className="lg:hidden">
            <button
              type="button"
              className="text-white hover:text-gray-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <BiX className="block h-8 w-8" aria-hidden="true" />
              ) : (
                <BiMenu className="block h-8 w-8" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu button */}

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="w-full lg:hidden bg-overlay-default px-5">
            <NavMenu
              isActive={isActive}
              className="flex-col gap-2"
              handleLinkClick={handleLinkClick}
            />
          </div>
        )}
      </div>
    </>
  )
}

export default Header
