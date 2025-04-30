import { useState } from 'react';
import { Download, ExternalLink } from 'lucide-react';

const Resources = () => {
  // Gallery images - authentic project images
  const [galleryImages] = useState([
    { id: 1, src: 'https://mocha-cdn.com/0196552c-4056-73f6-b985-08586aa30f9f/IMG-20241109-WA0017[1].jpg', alt: 'STEM classroom with children learning technology concepts', category: 'STEM' },
    { id: 2, src: 'https://mocha-cdn.com/0196552c-4056-73f6-b985-08586aa30f9f/WhatsApp-Image-2025-04-21-at-05.06.3.jpg', alt: 'Eye examination at camp', category: 'Eye Camp' },
    { id: 3, src: 'https://mocha-cdn.com/0196552c-4056-73f6-b985-08586aa30f9f/Physiotherapy-Camp.jpg', alt: 'Physiotherapy session with patients', category: 'Physiotherapy' },
    { id: 4, src: 'https://mocha-cdn.com/0196552c-4056-73f6-b985-08586aa30f9f/Community--1.jpg', alt: 'Community gathering', category: 'Community' },
    { id: 5, src: 'https://mocha-cdn.com/0196552c-4056-73f6-b985-08586aa30f9f/IMG_8133.jpg', alt: 'Environmental education classroom with Earth drawings', category: 'Education' },
    { id: 6, src: 'https://mocha-cdn.com/0196552c-4056-73f6-b985-08586aa30f9f/Copy-of-WhatsApp-Image-2025-04-21-at-05.06.3.jpg', alt: 'Eye examination equipment', category: 'Eye Camp' },
    { id: 7, src: 'https://mocha-cdn.com/0196552c-4056-73f6-b985-08586aa30f9f/Community---2.jpg', alt: 'Community outreach program', category: 'Community' },
    { id: 8, src: 'https://mocha-cdn.com/0196552c-4056-73f6-b985-08586aa30f9f/Green-Tech-zero--1.jpg', alt: 'Environmental education classroom', category: 'Education' },
  ]);

  // Reports data - normally these would come from a database or API
  const [reports] = useState([
    { id: 1, title: 'Annual Impact Report 2024', description: 'A comprehensive overview of our projects and their impact over the past year', fileSize: '3.2 MB', url: 'https://drive.google.com/file/d/1XYHS_ZfP6JxRHcQmRpRt-Vv6TbOLT9-x/view?usp=sharing' },
    { id: 2, title: 'STEM Education Outcomes', description: 'Research findings on the effectiveness of our STEM education initiatives', fileSize: '1.8 MB', url: null },
    { id: 3, title: 'Eye Camp Success Stories', description: 'Testimonials and case studies from our eye camp beneficiaries', fileSize: '2.5 MB', url: null },
    { id: 4, title: 'Physiotherapy Program Evaluation', description: 'Analysis of our physiotherapy program outcomes and recommendations', fileSize: '4.1 MB', url: null },
    { id: 5, title: 'Financial Transparency Report', description: 'Detailed breakdown of our funding sources and expenditures', fileSize: '1.5 MB', url: null },
  ]);

  // State for gallery filter
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', 'STEM', 'Eye Camp', 'Physiotherapy', 'Community', 'Education'];

  // Filtered gallery images
  const filteredImages = activeFilter === 'All' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeFilter);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-700 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Resources</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Access our gallery of images and download reports to learn more about our work and impact
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Gallery</h2>
            <div className="mt-2 h-1 w-24 bg-blue-600 mx-auto"></div>
            <p className="max-w-3xl mx-auto mt-4 text-gray-600">
              Visual documentation of our programs and the communities we serve
            </p>
          </div>

          {/* Gallery Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeFilter === category
                    ? 'bg-blue-700 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image) => (
              <div key={image.id} className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="relative group h-48 sm:h-64">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                      <p className="font-medium">{image.alt}</p>
                      <p className="text-sm">{image.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports Section */}
      <section id="reports" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Reports</h2>
            <div className="mt-2 h-1 w-24 bg-blue-600 mx-auto"></div>
            <p className="max-w-3xl mx-auto mt-4 text-gray-600">
              Download our reports to learn more about our projects, outcomes, and financial transparency
            </p>
          </div>

          {/* Reports List */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <ul className="divide-y divide-gray-200">
              {reports.map((report) => (
                <li key={report.id} className="p-6 hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-lg font-semibold text-gray-900">{report.title}</h3>
                      <p className="text-gray-600 mt-1">{report.description}</p>
                      <p className="text-sm text-gray-500 mt-2">PDF • {report.fileSize}</p>
                    </div>
                    <div className="flex space-x-3">
                      {report.url ? (
                        <>
                          <a 
                            href={report.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center text-blue-700 hover:text-blue-900 transition-colors duration-200"
                          >
                            <ExternalLink size={18} className="mr-1" />
                            <span>Preview</span>
                          </a>
                          <a 
                            href={report.url} 
                            className="flex items-center px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors duration-200 shadow-sm"
                          >
                            <Download size={18} className="mr-2" />
                            <span>Download</span>
                          </a>
                        </>
                      ) : (
                        <span className="text-gray-400">Coming soon</span>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8">
            Subscribe to our newsletter to receive updates on our work, upcoming events, and new resources.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-md text-gray-900 focus:outline-none"
              />
              <button className="px-6 py-3 bg-blue-700 text-white rounded-md font-medium hover:bg-blue-800 transition-colors duration-200 shadow-md font-montserrat">
                Subscribe
              </button>
            </div>
            <p className="text-sm mt-4 text-blue-100">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
