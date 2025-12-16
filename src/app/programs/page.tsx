import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { BookOpen, Users, Award, Clock, Star, CheckCircle, ArrowRight, GraduationCap, Target, Brain, Palette, Heart } from 'lucide-react'

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Program <span className="text-yellow-300">Homeschooling</span>
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Pilihan program homeschooling yang komprehensif dan disesuaikan 
              dengan kebutuhan belajar setiap anak.
            </p>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Program Unggulan Kami
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Setiap program dirancang khusus untuk mengembangkan potensi maksimal siswa
                sesuai dengan tahapan perkembangan dan kebutuhan mereka.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {/* Program SD */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow border border-emerald-100">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
                  <div className="flex items-center space-x-3 mb-3">
                    <GraduationCap className="w-8 h-8" />
                    <h3 className="text-2xl font-bold">Program SD</h3>
                  </div>
                  <p className="text-blue-100">
                    Kelas 1-6 • Usia 6-12 tahun
                  </p>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-6">
                    Program pendidikan dasar dengan fokus pada pembentukan karakter 
                    dasar, literasi, numerasi, dan pengembangan keterampilan fundamental.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <span className="text-gray-700">Kurikulum Nasional Plus</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <span className="text-gray-700">Pembelajaran Berbasis Proyek</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <span className="text-gray-700">Pengembangan Soft Skills</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <span className="text-gray-700">Ekstrakurikuler Menarik</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">Rp 1.5jt</span>
                      <span className="text-gray-500">/bulan</span>
                    </div>
                    <button className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors flex items-center">
                      Detail Program
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Program SMP */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow border border-emerald-100">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 text-white">
                  <div className="flex items-center space-x-3 mb-3">
                    <Target className="w-8 h-8" />
                    <h3 className="text-2xl font-bold">Program SMP</h3>
                  </div>
                  <p className="text-purple-100">
                    Kelas 7-9 • Usia 12-15 tahun
                  </p>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-6">
                    Program pendidikan menengah pertama dengan persiapan menuju 
                    jenjang SMA dan pengembangan keterampilan abad 21.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <span className="text-gray-700">Kurikulum Merdeka</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <span className="text-gray-700">STEM Education</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <span className="text-gray-700">Leadership Training</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <span className="text-gray-700">Persiapan SMA</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">Rp 2jt</span>
                      <span className="text-gray-500">/bulan</span>
                    </div>
                    <button className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors flex items-center">
                      Detail Program
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Program SMA */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow border border-emerald-100">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white">
                  <div className="flex items-center space-x-3 mb-3">
                    <Brain className="w-8 h-8" />
                    <h3 className="text-2xl font-bold">Program SMA</h3>
                  </div>
                  <p className="text-orange-100">
                    Kelas 10-12 • Usia 15-18 tahun
                  </p>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-6">
                    Program pendidikan menengah atas dengan fokus pada persiapan 
                    perguruan tinggi dan pengembangan karir.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <span className="text-gray-700">Jurusan IPA/IPS/Bahasa</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <span className="text-gray-700">Persiapan UTBK/SNBT</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <span className="text-gray-700">Career Guidance</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <span className="text-gray-700">TOEFL Preparation</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">Rp 2.5jt</span>
                      <span className="text-gray-500">/bulan</span>
                    </div>
                    <button className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors flex items-center">
                      Detail Program
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Program Special Needs */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow border border-emerald-100">
                <div className="bg-gradient-to-r from-pink-500 to-pink-600 p-6 text-white">
                  <div className="flex items-center space-x-3 mb-3">
                    <Heart className="w-8 h-8" />
                    <h3 className="text-2xl font-bold">Program Special Needs</h3>
                  </div>
                  <p className="text-pink-100">
                    Semua usia • Program khusus
                  </p>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-6">
                    Program pendidikan khusus untuk anak berkebutuhan khusus 
                    dengan pendekatan individual dan terapi integratif.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <span className="text-gray-700">Kurikulum Adaptif</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <span className="text-gray-700">Terapi Wicara & Okupasi</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <span className="text-gray-700">Life Skills Training</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <span className="text-gray-700">Support Group</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">Rp 3jt</span>
                      <span className="text-gray-500">/bulan</span>
                    </div>
                    <button className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors flex items-center">
                      Detail Program
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Programs */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                Program Tambahan
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-emerald-100">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <Palette className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Ekstrakurikuler</h3>
                  <p className="text-gray-600 mb-4">
                    Seni, musik, olahraga, robotik, dan berbagai kegiatan menarik lainnya.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Seni & Kriya</li>
                    <li>• Musik & Vokal</li>
                    <li>• Olahraga</li>
                    <li>• Robotik & Coding</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-emerald-100">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Bimbingan Belajar</h3>
                  <p className="text-gray-600 mb-4">
                    Persiapan ujian, pengayaan materi, dan bimbingan intensif.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Persiapan UTBK</li>
                    <li>• Pengayaan Matematika</li>
                    <li>• Bahasa Inggris</li>
                    <li>• Science Camp</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-emerald-100">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Character Building</h3>
                  <p className="text-gray-600 mb-4">
                    Pengembangan karakter, leadership, dan soft skills.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Leadership Camp</li>
                    <li>• Public Speaking</li>
                    <li>• Financial Literacy</li>
                    <li>• Social Service</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">
                Siap Memulai Perjalanan Pendidikan?
              </h2>
              <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                Konsultasikan kebutuhan pendidikan anak Anda dengan tim kami secara gratis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition-colors">
                  Konsultasi Gratis
                </button>
                <a href="tel:085353887288" className="px-8 py-3 bg-white/20 backdrop-blur text-white font-semibold rounded-lg hover:bg-white/30 transition-colors border border-white/30">
                  Hubungi Kami
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}