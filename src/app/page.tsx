import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HomePage from '@/components/HomePage'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HomePage />
      </main>
      <Footer />
    </div>
  )
}