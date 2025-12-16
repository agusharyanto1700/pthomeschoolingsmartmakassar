'use client'

import React, { useState } from 'react'
import { GraduationCap, Loader2 } from 'lucide-react'

export default function LogoComponent() {
  const [logoUrl, setLogoUrl] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const generateLogo = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      
      const data = await response.json()
      
      if (data.success && data.image) {
        // Convert base64 to blob and create URL
        const base64Data = data.image.split(',')[1] // Remove data:image/png;base64, prefix
        const byteCharacters = atob(base64Data)
        const byteNumbers = new Array(byteCharacters.length)
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i)
        }
        const byteArray = new Uint8Array(byteNumbers)
        const blob = new Blob([byteArray], { type: 'image/png' })
        const url = URL.createObjectURL(blob)
        
        setLogoUrl(url)
        
        // Save to localStorage
        localStorage.setItem('homeschooling-logo', url)
      }
    } catch (error) {
      console.error('Failed to generate logo:', error)
    } finally {
      setIsLoading(false)
    }
  }

  // Check if logo exists in localStorage on mount
  React.useEffect(() => {
    const savedLogo = localStorage.getItem('homeschooling-logo')
    if (savedLogo) {
      setLogoUrl(savedLogo)
    }
  }, [])

  return (
    <div className="flex flex-col items-center space-y-4">
      {logoUrl ? (
        <img 
          src={logoUrl} 
          alt="PT HOMESCHOOLING SMART MAKASSAR Logo" 
          className="w-16 h-16 object-contain"
        />
      ) : (
        <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
          <GraduationCap className="w-10 h-10 text-white" />
        </div>
      )}
      
      <button
        onClick={generateLogo}
        disabled={isLoading}
        className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin inline mr-2" />
            Generating...
          </>
        ) : (
          'Generate Logo'
        )}
      </button>
    </div>
  )
}