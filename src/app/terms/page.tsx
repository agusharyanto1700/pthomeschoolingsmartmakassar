import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FileText, Users, Award, AlertTriangle, CheckCircle, BookOpen } from 'lucide-react'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <FileText className="w-12 h-12 text-yellow-300" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Syarat & Ketentuan
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Syarat dan ketentuan layanan pendidikan homeschooling 
              PT HOMESCHOOLING SMART MAKASSAR.
            </p>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              
              {/* Introduction */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <BookOpen className="w-6 h-6 text-emerald-600 mr-2" />
                  Pendahuluan
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Selamat datang di PT HOMESCHOOLING SMART MAKASSAR. Dokumen ini 
                  berisi syarat dan ketentuan yang mengatur penggunaan layanan 
                  pendidikan homeschooling yang kami sediakan.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Dengan mendaftarkan anak Anda untuk program homeschooling kami, 
                  Anda menyetujui untuk terikat oleh syarat dan ketentuan ini.
                </p>
              </div>

              {/* Acceptance of Terms */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mr-2" />
                  Penerimaan Syarat dan Ketentuan
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Dengan menggunakan layanan PT HOMESCHOOLING SMART MAKASSAR, Anda 
                  menyatakan bahwa:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mt-3">
                  <li>Anda telah membaca, memahami, dan menyetujui syarat dan ketentuan ini</li>
                  <li>Anda memiliki wewenang untuk mendaftarkan anak dalam program homeschooling</li>
                  <li>Anda akan mematuhi semua peraturan dan kebijakan yang berlaku</li>
                  <li>Informasi yang Anda berikan adalah akurat dan lengkap</li>
                </ul>
              </div>

              {/* Educational Services */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="w-6 h-6 text-emerald-600 mr-2" />
                  Layanan Pendidikan
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Program yang Ditawarkan
                    </h3>
                    <p className="text-gray-700 mb-2">
                      PT HOMESCHOOLING SMART MAKASSAR menyediakan:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Program pendidikan SD (Kelas 1-6)</li>
                      <li>Program pendidikan SMP (Kelas 7-9)</li>
                      <li>Program pendidikan SMA (Kelas 10-12)</li>
                      <li>Program khusus untuk anak berkebutuhan khusus</li>
                      <li>Program ekstrakurikuler dan pengembangan bakat</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Kurikulum
                    </h3>
                    <p className="text-gray-700">
                      Kami menggunakan kurikulum yang disesuaikan dengan standar 
                      nasional pendidikan Indonesia dan dikembangkan sesuai kebutuhan 
                      individual siswa. Kurikulum mencakup:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
                      <li>Mata pelajaran wajib sesuai jenjang pendidikan</li>
                      <li>Pengembangan karakter dan soft skills</li>
                      <li>Kegiatan ekstrakurikuler pilihan</li>
                      <li>Persiapan untuk jenjang pendidikan berikutnya</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Users className="w-6 h-6 text-emerald-600 mr-2" />
                  Tanggung Jawab
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Tanggung Jawab PT HOMESCHOOLING SMART MAKASSAR
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Menyediakan tenaga pengajar yang berkualifikasi</li>
                      <li>Menyelenggarakan pembelajaran sesuai kurikulum</li>
                      <li>Memberikan laporan perkembangan belajar siswa</li>
                      <li>Menyediakan fasilitas belajar yang memadai</li>
                      <li>Menjaga keamanan dan kenyamanan lingkungan belajar</li>
                      <li>Melindungi data pribadi siswa dan orang tua</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Tanggung Jawab Orang Tua/Wali
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Memastikan kehadiran siswa sesuai jadwal</li>
                      <li>Menyelesaikan pembayaran biaya pendidikan tepat waktu</li>
                      <li>Berkomunikasi aktif dengan pihak sekolah</li>
                      <li>Memberikan informasi kesehatan siswa yang relevan</li>
                      <li>Mendukung proses belajar siswa di rumah</li>
                      <li>Mematuhi peraturan dan kebijakan sekolah</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Fees and Payment */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Biaya dan Pembayaran
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Struktur Biaya
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Biaya pendaftaran (sekali)</li>
                      <li>SPP bulanan</li>
                      <li>Biaya seragam dan perlengkapan</li>
                      <li>Biaya kegiatan ekstrakurikuler (jika ada)</li>
                      <li>Biaya field trip dan kegiatan khusus</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Kebijakan Pembayaran
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Pembayaran SPP dilakukan setiap bulan sebelum tanggal 10</li>
                      <li>Pembayaran dapat dilakukan melalui transfer bank atau tunai</li>
                      <li>Keterlambatan pembayaran akan dikenakan denda 2% per bulan</li>
                      <li>Tidak ada pengembalian biaya untuk bulan yang telah berjalan</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Attendance */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Kehadiran dan Ketidakhadiran
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Siswa diharapkan hadir minimal 80% dari total hari belajar</li>
                  <li>Ketidakhadiran harus dilaporkan kepada pihak sekolah</li>
                  <li>Siswa yang sakit harus menyertakan surat dokter</li>
                  <li>Ketidakhadiran tanpa pemberitahuan akan dicatat</li>
                  <li>Kehadiran ekstrakurikuler bersifat sukarela namun disarankan</li>
                </ul>
              </div>

              {/* Code of Conduct */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Kode Etik
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Perilaku Siswa
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Menghormati guru, staf, dan teman sebaya</li>
                      <li>Mengikuti aturan dan peraturan sekolah</li>
                      <li>Menjaga kebersihan dan kerapihan</li>
                      <li>Tidak melakukan bullying atau kekerasan</li>
                      <li>Menggunakan fasilitas sekolah dengan bertanggung jawab</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Sanksi Pelanggaran
                    </h3>
                    <p className="text-gray-700">
                      Pelanggaran terhadap kode etik dapat mengakibatkan:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
                      <li>Peringatan lisan atau tertulis</li>
                      <li>Panggilan orang tua/wali</li>
                      <li>Suspensi sementara</li>
                      <li>Pemutusan hubungan pendidikan (untuk pelanggaran berat)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Termination */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <AlertTriangle className="w-6 h-6 text-emerald-600 mr-2" />
                  Pengakhiran Layanan
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Pengakhiran oleh Orang Tua/Wali
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Memberikan pemberitahuan tertulis 30 hari sebelumnya</li>
                      <li>Menyelesaikan semua pembayaran yang belum dibayar</li>
                      <li>Mengembalikan semua barang milik sekolah</li>
                      <li>Menyelesaikan proses administrasi yang diperlukan</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Pengakhiran oleh Sekolah
                    </h3>
                    <p className="text-gray-700">
                      PT HOMESCHOOLING SMART MAKASSAR berhak mengakhiri layanan jika:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
                      <li>Siswa melanggar kode etik secara berulang</li>
                      <li>Orang tua/wali tidak mematuhi kewajiban pembayaran</li>
                      <li>Adanya pemalsuan data atau informasi</li>
                      <li>Kondisi yang membahayakan lingkungan belajar</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Penafian
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  PT HOMESCHOOLING SMART MAKASSAR berusaha memberikan layanan pendidikan 
                  terbaik, namun tidak bertanggung jawab atas:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mt-3">
                  <li>Hasil akademik siswa yang tidak sesuai harapan</li>
                  <li>Kecelakaan yang terjadi di luar area sekolah</li>
                  <li>Kerusakan barang pribadi siswa</li>
                  <li>Pengaruh eksternal yang mempengaruhi proses belajar</li>
                </ul>
              </div>

              {/* Contact */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Hubungi Kami
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Untuk pertanyaan mengenai syarat dan ketentuan ini, silakan hubungi:
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
                    Email: info@homeschoolingsmartmakassar.com
                  </p>
                  <p className="text-gray-700">
                    Telepon: 085353887288
                  </p>
                </div>
              </div>

              {/* Update Policy */}
              <div className="border-t pt-6">
                <p className="text-sm text-gray-600 text-center">
                  Syarat dan Ketentuan ini terakhir diperbarui pada {new Date().toLocaleDateString('id-ID')}. 
                  PT HOMESCHOOLING SMART MAKASSAR berhak mengubah syarat dan ketentuan ini 
                  sewaktu-waktu dengan memberitahukan perubahan kepada orang tua/wali siswa.
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