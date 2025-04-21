// src/components/Header.js
"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-indigo-900 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
              
            <span className="text-2xl font-bold">NepalEstates</span>
          </div>
         
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-indigo-300 transition">Home</Link>
            <Link href="/properties" className="hover:text-indigo-300 transition">Properties</Link>
            <Link href="/about" className="hover:text-indigo-300 transition">About</Link>
            <Link href="/contact" className="hover:text-indigo-300 transition">Contact</Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-3">
            <Link href="/" className="block hover:text-indigo-300 transition">Home</Link>
            <Link href="/properties" className="block hover:text-indigo-300 transition">Properties</Link>
            <Link href="/about" className="block hover:text-indigo-300 transition">About</Link>
            <Link href="/contact" className="block hover:text-indigo-300 transition">Contact</Link>
          </nav>
        )}
      </div>
    </header>
  );
}
