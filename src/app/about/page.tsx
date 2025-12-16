import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { GraduationCap, Users, Award, BookOpen, Target, Heart, MapPin, Phone, Mail } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tentang <span className="text-yellow-300">PT HOMESCHOOLING</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-300">
              SMART MAKASSAR
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Mitra terpercaya dalam menyediakan pendidikan homeschooling berkualitas 
              di Makassar dan sekitarnya.
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Visi & Misi Kami
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-emerald-600 mb-3 flex items-center">
                      <Target className="w-6 h-6 mr-2" />
                      Visi
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Menjadi lembaga homeschooling terdepan di Indonesia yang menghasilkan 
                      generasi berkarakter, cerdas, dan berdaya saing global dengan pendekatan 
                      pendidikan yang personal dan berkualitas.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-emerald-600 mb-3 flex items-center">
                      <Heart className="w-6 h-6 mr-2" />
                      Misi
                    </h3>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <span className="text-emerald-500 mr-2">•</span>
                        Menyediakan pendidikan berkualitas dengan kurikulum yang komprehensif
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-500 mr-2">•</span>
                        Mengembangkan potensi siswa secara maksimal dengan pendekatan personal
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-500 mr-2">•</span>
                        Membangun karakter dan soft skills yang kuat untuk masa depan
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-500 mr-2">•</span>
                        Memberikan lingkungan belajar yang nyaman dan menyenangkan
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">10+</div>
                    <div className="text-gray-700">Tahun Pengalaman</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">500+</div>
                    <div className="text-gray-700">Siswa Aktif</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">50+</div>
                    <div className="text-gray-700">Guru Profesional</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">95%</div>
                    <div className="text-gray-700">Tingkat Kepuasan</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Values Section */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                Nilai-Nilai Kami
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Excellence</h3>
                  <p className="text-gray-600">
                    Selalu berusaha memberikan yang terbaik dalam setiap aspek pendidikan
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Compassion</h3>
                  <p className="text-gray-600">
                    Memahami dan peduli dengan kebutuhan setiap siswa secara individual
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Integrity</h3>
                  <p className="text-gray-600">
                    Berpegang teguh pada prinsip-prinsip moral dan etika pendidikan
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Collaboration</h3>
                  <p className="text-gray-600">
                    Bekerja sama dengan orang tua dan komunitas untuk kesuksesan siswa
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Hubungi Kami
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-yellow-300" />
                  <div>
                    <p className="font-semibold">Alamat</p>
                    <p className="text-emerald-100 text-sm">
                      Jln. Adhiyaksa Lama No. 1 Makassar
                    </p>
                    <p className="text-emerald-100 text-sm">
                      Kota Makassar, Sulawesi Selatan 90231
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-yellow-300" />
                  <div>
                    <p className="font-semibold">Telepon</p>
                    <a href="tel:085353887288" className="text-emerald-100 hover:text-white">
                      085353887288
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-yellow-300" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:info@homeschoolingsmartmakassar.com" className="text-emerald-100 hover:text-white">
                      info@homeschoolingsmartmakassar.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}