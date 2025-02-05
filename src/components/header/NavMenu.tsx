import React from 'react'
import Link from 'next/link'

type NavMenuProps = {
  isActive: (path: string) => boolean
  className?: string
  handleLinkClick?: () => void
}

function NavMenu({
  isActive,
  className = 'justify-between items-center w-1/2',
  handleLinkClick,
}: NavMenuProps) {
  return (
    <div className={`flex py-0 ${className}`}>
      <Link
        href="/"
        className={`text-xl font-medium  hover:text-secondary-dark py-1 ${
          isActive('/')
            ? 'border-y-2 border-secondary text-secondary w-full'
            : 'text-white'
        }`}
        onClick={handleLinkClick}
      >
        Home
      </Link>
      <Link
        href="/services"
        className={`text-xl font-medium  hover:text-secondary-dark py-1 ${
          isActive('/services')
            ? 'border-y-2 border-secondary text-secondary w-full'
            : 'text-white'
        }`}
        onClick={handleLinkClick}
      >
        Services
      </Link>
      <Link
        href="/about"
        className={`text-xl font-medium  hover:text-secondary-dark py-1 ${
          isActive('/about')
            ? 'border-y-2 border-secondary text-secondary w-full'
            : 'text-white'
        }`}
        onClick={handleLinkClick}
      >
        About
      </Link>
      <Link
        href="/portfolio"
        className={`text-xl font-medium  hover:text-secondary-dark py-1 ${
          isActive('/portfolio')
            ? 'border-y-2 border-secondary text-secondary w-full'
            : 'text-white'
        }`}
        onClick={handleLinkClick}
      >
        Portfolio
      </Link>
      <Link
        href="/blog"
        className={`text-xl font-medium  hover:text-secondary-dark py-1 ${
          isActive('/blog')
            ? 'border-y-2 border-secondary text-secondary w-full'
            : 'text-white'
        }`}
        onClick={handleLinkClick}
      >
        Blog
      </Link>
      <Link
        href="/contact"
        className={`text-xl font-medium  hover:text-secondary-dark py-1 ${
          isActive('/contact')
            ? 'border-y-2 border-secondary text-secondary w-full'
            : 'text-white'
        }`}
        onClick={handleLinkClick}
      >
        Contact
      </Link>
    </div>
  )
}

export default NavMenu
