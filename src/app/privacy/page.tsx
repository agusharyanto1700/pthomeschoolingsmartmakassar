import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Shield, Eye, Lock, Database, UserCheck, AlertCircle } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-12 h-12 text-yellow-300" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Kebijakan Privasi
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              PT HOMESCHOOLING SMART MAKASSAR berkomitmen untuk melindungi 
              privasi dan keamanan data pribadi Anda.
            </p>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              
              {/* Introduction */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <UserCheck className="w-6 h-6 text-emerald-600 mr-2" />
                  Pendahuluan
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Selamat datang di Kebijakan Privasi PT HOMESCHOOLING SMART MAKASSAR. 
                  Dokumen ini menjelaskan bagaimana kami mengumpulkan, menggunakan, 
                  melindungi, dan membagikan informasi pribadi Anda ketika menggunakan 
                  layanan pendidikan homeschooling kami.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Dengan menggunakan layanan kami, Anda menyetujui praktik-praktik 
                  yang dijelaskan dalam kebijakan privasi ini.
                </p>
              </div>

              {/* Information We Collect */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Database className="w-6 h-6 text-emerald-600 mr-2" />
                  Informasi yang Kami Kumpulkan
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Informasi Pribadi Siswa
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Nama lengkap siswa</li>
                      <li>Tempat dan tanggal lahir</li>
                      <li>Alamat lengkap</li>
                      <li>Nomor telepon</li>
                      <li>Email</li>
                      <li>Informasi kesehatan relevan</li>
                      <li>Riwayat pendidikan sebelumnya</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Informasi Orang Tua/Wali
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Nama lengkap orang tua/wali</li>
                      <li>Hubungan dengan siswa</li>
                      <li>Nomor telepon dan email</li>
                      <li>Informasi pekerjaan</li>
                      <li>Data darurat</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Informasi Akademik
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Nilai dan prestasi akademik</li>
                      <li>Kehadiran dan partisipasi</li>
                      <li>Hasil evaluasi dan tes</li>
                      <li>Laporan perkembangan belajar</li>
                      <li>Portofolio karya siswa</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Eye className="w-6 h-6 text-emerald-600 mr-2" />
                  Cara Kami Menggunakan Informasi
                </h2>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                    <p className="text-gray-700">
                      <strong>Penyediaan Layanan Pendidikan:</strong> Untuk menyelenggarakan 
                      program homeschooling dan memberikan pengajaran yang efektif.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                    <p className="text-gray-700">
                      <strong>Komunikasi:</strong> Untuk menghubungi orang tua/wali mengenai 
                      perkembangan siswa, jadwal, dan informasi penting lainnya.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                    <p className="text-gray-700">
                      <strong>Peningkatan Layanan:</strong> Untuk menganalisis dan meningkatkan 
                      kualitas program pendidikan yang kami tawarkan.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                    <p className="text-gray-700">
                      <strong>Kepatuhan Hukum:</strong> Untuk memenuhi kewajiban hukum 
                      dan regulasi pendidikan yang berlaku.
                    </p>
                  </div>
                </div>
              </div>

              {/* Data Protection */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Lock className="w-6 h-6 text-emerald-600 mr-2" />
                  Perlindungan Data
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  PT HOMESCHOOLING SMART MAKASSAR mengimplementasikan berbagai 
                  langkah keamanan untuk melindungi informasi pribadi Anda:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Enkripsi data saat disimpan dan ditransmisikan</li>
                  <li>Akses terbatas hanya untuk staf yang berwenang</li>
                  <li>Backup data secara teratur</li>
                  <li>System monitoring dan audit berkala</li>
                  <li>Pelatihan staf mengenai keamanan data</li>
                </ul>
              </div>

              {/* Data Sharing */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <AlertCircle className="w-6 h-6 text-emerald-600 mr-2" />
                  Pembagian Informasi
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Kami tidak menjual, menyewakan, atau membagikan informasi pribadi 
                  Anda kepada pihak ketiga tanpa persetujuan Anda, kecuali dalam 
                  kondisi berikut:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Dengan persetujuan eksplisit dari orang tua/wali</li>
                  <li>Untuk kepentingan hukum atau perintah pengadilan</li>
                  <li>Dengan pihak berwenang pendidikan (Kemdikbud, Dinas Pendidikan)</li>
                  <li>Dengan mitra layanan yang membantu operasional kami</li>
                </ul>
              </div>

              {/* Rights */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Hak Anda
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Sebagai orang tua/wali siswa, Anda memiliki hak untuk:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Mengakses informasi pribadi yang kami simpan</li>
                  <li>Memperbaiki informasi yang tidak akurat</li>
                  <li>Meminta penghapusan data yang tidak lagi diperlukan</li>
                  <li>Menolak penggunaan data untuk tujuan tertentu</li>
                  <li>Memindahkan data ke layanan pendidikan lain</li>
                </ul>
              </div>

              {/* Contact */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Hubungi Kami
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Jika Anda memiliki pertanyaan atau keluhan mengenai kebijakan 
                  privasi kami, silakan hubungi:
                </p>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <strong>PT HOMESCHOOLING SMART MAKASSAR</strong>
                  </p>
                  <p className="text-gray-700 mb-1">
                    Jln. Adhiyaksa Lama No. 1 Makassar
                  </p>
                  <p className="text-gray-700 mb-1">
                    Kota Makassar, Sulawesi Selatan 90231
                  </p>
                  <p className="text-gray-700 mb-1">
                    Email: privacy@homeschoolingsmartmakassar.com
                  </p>
                  <p className="text-gray-700">
                    Telepon: 085353887288
                  </p>
                </div>
              </div>

              {/* Update Policy */}
              <div className="border-t pt-6">
                <p className="text-sm text-gray-600 text-center">
                  Kebijakan Privasi ini terakhir diperbarui pada {new Date().toLocaleDateString('id-ID')}. 
                  PT HOMESCHOOLING SMART MAKASSAR berhak mengubah kebijakan ini sewaktu-waktu 
                  dengan memberitahukan perubahan kepada orang tua/wali siswa.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}