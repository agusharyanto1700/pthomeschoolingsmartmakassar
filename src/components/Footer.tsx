import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react'
import LogoComponent from './LogoComponent'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-emerald-900 to-teal-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <LogoComponent />
              <div>
                <span className="text-lg font-bold">PT HOMESCHOOLING</span>
                <span className="text-lg font-bold text-emerald-300 block">SMART MAKASSAR</span>
              </div>
            </div>
            <p className="text-emerald-100 mb-4">
              Solusi pendidikan homeschooling terpercaya di Makassar. 
              Memberikan pendidikan berkualitas dengan kurikulum yang komprehensif 
              dan pendekatan personal untuk setiap siswa.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-emerald-300 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-emerald-300 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-emerald-300 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Link Cepat</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-emerald-100 hover:text-white transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="/about" className="text-emerald-100 hover:text-white transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="/programs" className="text-emerald-100 hover:text-white transition-colors">
                  Program
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-emerald-100 hover:text-white transition-colors">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="/terms" className="text-emerald-100 hover:text-white transition-colors">
                  Syarat & Ketentuan
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak Kami</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-300 mt-0.5" />
                <div>
                  <p className="text-emerald-100">Jln. Adhiyaksa Lama No. 1 Makassar</p>
                  <p className="text-emerald-100">Desa/Kelurahan Pandang, Kec. Panakkukang</p>
                  <p className="text-emerald-100">Kota Makassar, Provinsi Sulawesi Selatan</p>
                  <p className="text-emerald-100">Kode Pos: 90231</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-300" />
                <a href="tel:085353887288" className="text-emerald-100 hover:text-white transition-colors">
                  085353887288
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-300" />
                <a href="mailto:info@homeschoolingsmartmakassar.com" className="text-emerald-100 hover:text-white transition-colors">
                  info@homeschoolingsmartmakassar.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-700 mt-8 pt-8 text-center">
          <p className="text-emerald-200">
            © {new Date().getFullYear()} PT HOMESCHOOLING SMART MAKASSAR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}