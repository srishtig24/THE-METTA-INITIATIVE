import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Heart, Users } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section with Video */}
      <section className="relative h-[70vh] bg-gray-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Background with hero image and overlay */}
          <img src="https://mocha-cdn.com/0196552c-4056-73f6-b985-08586aa30f9f/Copy-of-Hero-Section.jpg" alt="People collaborating on community projects" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>
        <div className="relative z-20 text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-tenor animate-fade-in">Building Positive Change Through Community Bonds</h1>
          <p className="text-xl md:text-2xl mb-8">Join us in our mission to improve lives through education, healthcare, and community support.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/about" className="px-8 py-3 bg-blue-700 hover:bg-blue-800 rounded-md font-medium transition-colors duration-200 shadow-lg font-montserrat">
              Learn More
            </Link>
            <a href="mailto:themettainitiative@gmail.com" className="px-8 py-3 bg-white text-blue-700 hover:bg-gray-100 rounded-md font-medium transition-colors duration-200 shadow-lg font-montserrat">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">About The Metta Initiative</h2>
            <div className="mt-2 h-1 w-24 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="h-12 w-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mb-4">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600">To foster compassion and bring positive change to communities through sustainable programs in education and healthcare.</p>
              <Link to="/about" className="mt-4 inline-flex items-center text-blue-700 hover:text-blue-900">
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="h-12 w-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Team</h3>
              <p className="text-gray-600">A dedicated group of professionals and volunteers committed to making a difference in the lives of those in need.</p>
              <Link to="/about" className="mt-4 inline-flex items-center text-blue-700 hover:text-blue-900">
                Meet the team <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="h-12 w-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mb-4">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Programs</h3>
              <p className="text-gray-600">Innovative initiatives that address the needs of communities, focusing on education, healthcare, and well-being.</p>
              <Link to="/work" className="mt-4 inline-flex items-center text-blue-700 hover:text-blue-900">
                Explore programs <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Featured Projects</h2>
            <div className="mt-2 h-1 w-24 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="https://mocha-cdn.com/0196552c-4056-73f6-b985-08586aa30f9f/IMG-20241109-WA0017[1].jpg" alt="STEM classroom session" className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">STEM Education</h3>
                <p className="text-gray-600 mb-4">Empowering students with knowledge and skills in Science, Technology, Engineering, and Mathematics.</p>
                <Link to="/work#stem" className="inline-flex items-center text-blue-700 hover:text-blue-900">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="https://mocha-cdn.com/0196552c-4056-73f6-b985-08586aa30f9f/WhatsApp-Image-2025-04-21-at-05.06.3.jpg" alt="Eye examination at camp" className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Eye Camp</h3>
                <p className="text-gray-600 mb-4">Providing essential eye care services to underserved communities around the world.</p>
                <Link to="/work#eye" className="inline-flex items-center text-blue-700 hover:text-blue-900">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="https://mocha-cdn.com/0196552c-4056-73f6-b985-08586aa30f9f/IMG_8133.jpg" alt="Environmental education classroom" className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Physiotherapy Camps</h3>
                <p className="text-gray-600 mb-4">Helping individuals recover and improve their physical health through specialized care.</p>
                <Link to="/work#physio" className="inline-flex items-center text-blue-700 hover:text-blue-900">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="https://mocha-cdn.com/0196552c-4056-73f6-b985-08586aa30f9f/Inclusive-Futures-1.jpg" alt="Inclusive Futures conference" className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Inclusive Futures</h3>
                <p className="text-gray-600 mb-4">Supporting grassroot NGOs and communities to challenge the ableist gaze through a socio-cultural model of disability.</p>
                <Link to="/work#inclusive" className="inline-flex items-center text-blue-700 hover:text-blue-900">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src="https://mocha-cdn.com/0196552c-4056-73f6-b985-08586aa30f9f/Green-Tech-zero--1.jpg" alt="Environmental education classroom with students" className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Green Tech-Zero</h3>
                <p className="text-gray-600 mb-4">Promoting climate tech, inclusive STEM education, and green innovations in marginalized communities.</p>
                <Link to="/work#greentech" className="inline-flex items-center text-blue-700 hover:text-blue-900">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our Impact</h2>
            <div className="mt-2 h-1 w-24 bg-white mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">10+</div>
              <p className="text-xl">Communities Served</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">1,500+</div>
              <p className="text-xl">Children Educated</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">700+</div>
              <p className="text-xl">Medical Treatments</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">5+</div>
              <p className="text-xl">Projects Launched</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl text-gray-600 mb-8">Join us in our mission to create a better world through compassion and action.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/about" className="px-8 py-3 bg-blue-700 text-white hover:bg-blue-800 rounded-md font-medium transition-colors duration-200 shadow-md font-montserrat">
              Get Involved
            </Link>
            <a href="mailto:themettainitiative@gmail.com" className="px-8 py-3 bg-blue-900 text-white hover:bg-blue-950 rounded-md font-medium transition-colors duration-200 shadow-md font-montserrat">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
