import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getShortDescription } from '@/lib/content';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zoe Ding - Developer',
  description: 'Personal portfolio of Zoe Ding, a passionate developer creating meaningful digital experiences',
};

export default async function HomePage() {
  const shortDescription = await getShortDescription();
  const basePath = process.env.NODE_ENV === 'production' && process.env.GITHUB_ACTIONS === 'true' ? '/my-portfolio' : '';

  return (
    <>
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="text-center">
            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6">
              Zoe Ding
            </h1>
            
            {/* Professional Title */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-600 mb-8">
              Software Developer & Digital Creator
            </h2>
            
            {/* Short Description */}
            <div className="max-w-2xl mx-auto mb-12">
              <div 
                className="prose prose-lg prose-gray mx-auto text-gray-700 [&>p]:text-xl [&>p]:leading-relaxed"
                dangerouslySetInnerHTML={{ __html: shortDescription.content }}
              />
            </div>
            
            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href={`${basePath}/about`}
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
              >
                Learn More About Me
                <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </Link>
              
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </section>
        
        {/* Spacer for future content */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center text-gray-500">
            <p className="text-sm">More sections coming soon...</p>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}