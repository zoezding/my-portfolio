'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const basePath = process.env.NODE_ENV === 'production' && process.env.GITHUB_ACTIONS === 'true' ? '/my-portfolio' : '';
  
  const isActive = (path: string) => {
    const fullPath = basePath + path;
    if (path === '/' && pathname === fullPath) return true;
    if (path !== '/' && pathname.startsWith(fullPath)) return true;
    return false;
  };

  const linkClasses = (path: string) => {
    const baseClasses = "inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200";
    const activeClasses = "text-gray-900 border-b-2 border-gray-900";
    const inactiveClasses = "text-gray-500 hover:text-gray-700 hover:border-gray-300 border-b-2 border-transparent";
    
    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`;
  };

  const mobileLinkClasses = (path: string) => {
    const baseClasses = "block pl-3 pr-4 py-2 text-base font-medium transition-colors duration-200";
    const activeClasses = "text-gray-900 bg-gray-50 border-l-4 border-gray-900";
    const inactiveClasses = "text-gray-500 hover:text-gray-700 hover:bg-gray-50 border-l-4 border-transparent";
    
    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`;
  };

  return (
    <header className="w-full bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <Link 
              href={`${basePath}/`}
              className="text-xl font-semibold text-gray-900 hover:text-gray-600 transition-colors duration-200"
            >
              Zoe Ding
            </Link>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link href={`${basePath}/`} className={linkClasses('/')}>
              Home
            </Link>
            <Link href={`${basePath}/about`} className={linkClasses('/about')}>
              About
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg 
                className="block h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth="1.5" 
                stroke="currentColor" 
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="pt-2 pb-3 space-y-1">
              <Link 
                href={`${basePath}/`}
                className={mobileLinkClasses('/')}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href={`${basePath}/about`}
                className={mobileLinkClasses('/about')}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}