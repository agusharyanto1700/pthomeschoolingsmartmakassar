'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import LogoComponent from './LogoComponent'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <LogoComponent />
            <div>
              <span className="text-xl font-bold text-gray-900">PT HOMESCHOOLING</span>
              <span className="text-xl font-bold text-emerald-600 block">SMART MAKASSAR</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Beranda
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Tentang Kami
            </Link>
            <Link href="/programs" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Program
            </Link>
            <Link href="/privacy" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Terms & Conditions
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-emerald-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-emerald-600 transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Beranda
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-emerald-600 transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Tentang Kami
              </Link>
              <Link 
                href="/programs" 
                className="text-gray-700 hover:text-emerald-600 transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Program
              </Link>
              <Link 
                href="/privacy" 
                className="text-gray-700 hover:text-emerald-600 transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Privacy
              </Link>
              <Link 
                href="/terms" 
                className="text-gray-700 hover:text-emerald-600 transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Terms & Conditions
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}