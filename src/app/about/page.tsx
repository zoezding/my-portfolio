import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getLongDescription } from '@/lib/content';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Zoe Ding',
  description: 'Learn more about Zoe Ding, her background, skills, and experience in software development',
};

export default async function AboutPage() {
  const longDescription = await getLongDescription();

  return (
    <>
      <Header />
      
      <main className="flex-1">
        {/* About Hero Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get to know more about my journey, skills, and passion for creating digital experiences.
            </p>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
          <div className="max-w-3xl mx-auto">
            {/* Long Description Content */}
            <div 
              className="prose prose-lg prose-gray mx-auto mb-16 [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:text-gray-900 [&>h2]:mb-4 [&>h2]:mt-12 [&>p]:text-gray-700 [&>p]:leading-relaxed [&>p]:mb-6"
              dangerouslySetInnerHTML={{ __html: longDescription.content }}
            />
            
            {/* Skills Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-gray-900 mb-8">Technical Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Frontend */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Frontend</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>JavaScript / TypeScript</li>
                    <li>React / Next.js</li>
                    <li>HTML5 / CSS3</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
                
                {/* Backend */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Backend</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>Node.js / Python</li>
                    <li>REST APIs</li>
                    <li>Database Design</li>
                    <li>Cloud Services</li>
                  </ul>
                </div>
                
                {/* Tools */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Tools & Others</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>Git / GitHub</li>
                    <li>Docker</li>
                    <li>CI/CD</li>
                    <li>Testing Frameworks</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Experience Placeholder */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-gray-900 mb-8">Experience</h2>
              <div className="space-y-8">
                <div className="border-l-4 border-gray-200 pl-6">
                  <h3 className="text-lg font-medium text-gray-900">Current Position</h3>
                  <p className="text-gray-600 mb-2">Company Name • Present</p>
                  <p className="text-gray-700">
                    Brief description of your current role and key responsibilities. Highlight your main achievements and the technologies you work with.
                  </p>
                </div>
                
                <div className="border-l-4 border-gray-200 pl-6">
                  <h3 className="text-lg font-medium text-gray-900">Previous Position</h3>
                  <p className="text-gray-600 mb-2">Previous Company • Year - Year</p>
                  <p className="text-gray-700">
                    Description of your previous role, key projects, and accomplishments. Focus on the impact you made and skills you developed.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="text-center bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Let&apos;s Work Together</h2>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                I&apos;m always interested in hearing about new opportunities and exciting projects. 
                Feel free to reach out if you&apos;d like to collaborate!
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}