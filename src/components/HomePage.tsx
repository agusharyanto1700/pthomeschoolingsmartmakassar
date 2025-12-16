import Link from 'next/link'
import { ArrowRight, BookOpen, Users, Award, Clock, Target, Star } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              PT <span className="text-yellow-300">HOMESCHOOLING</span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-yellow-300">
              SMART MAKASSAR
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-emerald-100 max-w-3xl mx-auto">
              Solusi pendidikan homeschooling terpercaya di Makassar. 
              Memberikan pendidikan berkualitas dengan kurikulum komprehensif 
              dan pendekatan personal untuk setiap siswa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/programs"
                className="inline-flex items-center justify-center px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition-colors"
              >
                Lihat Program Kami
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/about"
                className="inline-flex items-center justify-center px-8 py-3 bg-white/20 backdrop-blur text-white font-semibold rounded-lg hover:bg-white/30 transition-colors border border-white/30"
              >
                Tentang Kami
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih Kami?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kami menawarkan pendidikan homeschooling terbaik dengan metode pembelajaran yang efektif dan menyenangkan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-emerald-100">
              <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Kurikulum Komprehensif</h3>
              <p className="text-gray-600">
                Kurikulum yang disesuaikan dengan kebutuhan siswa dan mengikuti standar nasional pendidikan.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-emerald-100">
              <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Pendekatan Personal</h3>
              <p className="text-gray-600">
                Perhatian khusus untuk setiap siswa dengan rasio guru-siswa yang optimal.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-emerald-100">
              <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Guru Berkualitas</h3>
              <p className="text-gray-600">
                Tim pengajar profesional dan berpengalaman dalam bidang pendidikan homeschooling.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-emerald-100">
              <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fleksibel Waktu</h3>
              <p className="text-gray-600">
                Jadwal belajar yang fleksibel dapat disesuaikan dengan kebutuhan dan aktivitas siswa.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-emerald-100">
              <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Pengembangan Karakter</h3>
              <p className="text-gray-600">
                Tidak hanya akademis, kami juga fokus pada pengembangan karakter dan soft skills.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-emerald-100">
              <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <Star className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Terpercaya</h3>
              <p className="text-gray-600">
                Lembaga homeschooling yang telah terbukti dan dipercaya oleh banyak orang tua di Makassar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Memulai Perjalanan Pendidikan Anak Anda?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Bergabunglah dengan PT HOMESCHOOLING SMART MAKASSAR dan berikan pendidikan terbaik untuk masa depan anak Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/programs"
              className="inline-flex items-center justify-center px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition-colors"
            >
              Lihat Program Lengkap
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a 
              href="tel:085353887288"
              className="inline-flex items-center justify-center px-8 py-3 bg-white/20 backdrop-blur text-white font-semibold rounded-lg hover:bg-white/30 transition-colors border border-white/30"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}