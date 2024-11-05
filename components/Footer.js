import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Footer() {
  const [emailHovered, setEmailHovered] = useState(false)
  const [email, setEmail] = useState('')
  const [windowHeight, setWindowHeight] = useState(1000)
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    setWindowHeight(window.innerHeight)
    const handleResize = () => setWindowHeight(window.innerHeight)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/1942studio', 
      icon: (
        <motion.svg whileHover={{ scale: 1.2 }} className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
        </motion.svg>
      )
    },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/1942studio',
      icon: (
        <motion.svg whileHover={{ scale: 1.2 }} className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M2 4a2 2 0 114 0 2 2 0 01-4 0z" />
        </motion.svg>
      )
    },
    { name: 'Instagram', href: 'https://instagram.com/1942studio',
      icon: (
        <motion.svg whileHover={{ scale: 1.2 }} className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
        </motion.svg>
      )
    }
  ]

  return (
    <footer className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-dark-900">
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-accent-primary rounded-full"
              animate={{
                y: [-20, windowHeight],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              style={{ left: `${Math.random() * 100}%` }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative dark-glass">
        {/* Main Footer Content */}
        <div className="border-t border-dark-700">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              {/* Logo & Description */}
              <div className="md:col-span-4">
                <Link href="/">
                  <a className="text-2xl font-bold text-dark-50 glow-text">1942 Studio</a>
                </Link>
                <p className="mt-4 text-dark-100">
                  Revolutionizing digital presence through AI-driven solutions.
                </p>
                <div className="flex space-x-6 mt-6">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark-100 hover:text-accent-primary transition-colors"
                      whileHover={{ y: -3 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="md:col-span-4">
                <h3 className="text-lg font-semibold text-dark-50 mb-6">Quick Links</h3>
                <ul className="space-y-4">
                  {['Services', 'Case Studies', 'About', 'Contact'].map((item) => (
                    <motion.li key={item} whileHover={{ x: 5 }}>
                      <Link href={`/${item.toLowerCase().replace(' ', '-')}`}>
                        <a className="text-dark-100 hover:text-accent-primary transition-colors">
                          {item}
                        </a>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Contact Information */}
              <div className="md:col-span-4">
                <h3 className="text-lg font-semibold text-dark-50 mb-6">Contact Us</h3>
                <ul className="space-y-4">
                  <motion.li whileHover={{ x: 5 }} className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:info@1942studio.com" className="text-dark-100 hover:text-accent-primary transition-colors">
                      info@1942studio.com
                    </a>
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+919833812505" className="text-dark-100 hover:text-accent-primary transition-colors">
                      +91 98338 12505
                    </a>
                  </motion.li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-700">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="flex justify-center items-center text-dark-200">
              <p>© {currentYear} 1942 Studio. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 