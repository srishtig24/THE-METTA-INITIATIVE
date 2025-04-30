import { Activity, Eye, Globe, Lightbulb, Users } from 'lucide-react';

const Work = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-700 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Work</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover the various initiatives and programs we run to support communities around the world
          </p>
        </div>
      </section>

      {/* STEM Project */}
      <section id="stem" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mr-4">
                  <Lightbulb size={20} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">The STEM Project</h2>
              </div>
              <div className="h-1 w-24 bg-blue-600 mb-6"></div>
              <p className="text-gray-600 mb-4">
                Our STEM (Science, Technology, Engineering, and Mathematics) Project aims to inspire and equip children and young adults with the knowledge and skills needed to succeed in these critical fields.
              </p>
              <p className="text-gray-600 mb-4">
                Through interactive workshops, mentoring programs, and resource provision, we make STEM education accessible to underserved communities.
              </p>
              <h3 className="text-xl font-semibold mb-2">Key Components:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>Mobile STEM Labs that travel to remote schools</li>
                <li>Teacher training programs to improve STEM education</li>
                <li>Community science fairs and competitions</li>
              </ul>
              <a href="mailto:themettainitiative@gmail.com" className="px-6 py-2 bg-blue-700 text-white hover:bg-blue-800 rounded-md font-medium transition-colors duration-200 shadow-md inline-block">
                Support This Project
              </a>
            </div>
            <div className="md:w-1/2">
              <img src="https://mocha-cdn.com/0196552c-4056-73f6-b985-08586aa30f9f/IMG-20241109-WA0017[1].jpg" alt="STEM classroom session" className="h-80 w-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Eye Camp */}
      <section id="eye" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mr-4">
                  <Eye size={20} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Eye Camp</h2>
              </div>
              <div className="h-1 w-24 bg-blue-600 mb-6"></div>
              <p className="text-gray-600 mb-4">
                Our Eye Camp initiative provides essential eye care services to communities with limited access to healthcare facilities. We organize regular camps where we offer free eye examinations, treatments, and surgeries.
              </p>
              <p className="text-gray-600 mb-4">
                These camps help detect and address various eye conditions early, preventing blindness and improving quality of life for thousands of individuals.
              </p>
              <h3 className="text-xl font-semibold mb-2">Services Provided:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>Comprehensive eye examinations</li>
                <li>Distribution of prescription glasses</li>
                <li>Treatment for various eye conditions</li>
                <li>Eye health education and awareness</li>
              </ul>
              <a href="mailto:themettainitiative@gmail.com" className="px-6 py-2 bg-blue-700 text-white hover:bg-blue-800 rounded-md font-medium transition-colors duration-200 shadow-md inline-block">
                Support This Project
              </a>
            </div>
            <div className="md:w-1/2">
              <img src="https://mocha-cdn.com/0196552c-4056-73f6-b985-08586aa30f9f/Copy-of-WhatsApp-Image-2025-04-21-at-05.06.3.jpg" alt="Eye examination with specialized equipment" className="h-80 w-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Physiotherapy Camps */}
      <section id="physio" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mr-4">
                  <Activity size={20} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Physiotherapy Camps</h2>
              </div>
              <div className="h-1 w-24 bg-blue-600 mb-6"></div>
              <p className="text-gray-600 mb-4">
                Our Physiotherapy Camps bring specialized physical rehabilitation services to underserved communities, helping individuals recover from injuries, manage chronic conditions, and improve their quality of life.
              </p>
              <p className="text-gray-600 mb-4">
                Each camp is staffed with trained physiotherapists and equipped with essential tools to provide effective treatments and exercises tailored to individual needs.
              </p>
              <h3 className="text-xl font-semibold mb-2">Our Approach:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>Assessment and diagnosis of physical conditions</li>
                <li>Customized treatment plans for each patient</li>
                <li>Hands-on therapy sessions</li>
                <li>Training in home exercises and self-care</li>
              </ul>
              <a href="mailto:themettainitiative@gmail.com" className="px-6 py-2 bg-blue-700 text-white hover:bg-blue-800 rounded-md font-medium transition-colors duration-200 shadow-md inline-block">
                Support This Project
              </a>
            </div>
            <div className="md:w-1/2">
              <img src="https://mocha-cdn.com/0196552c-4056-73f6-b985-08586aa30f9f/Physiotherapy-Camp.jpg" alt="Physiotherapy session with patients" className="h-80 w-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Inclusive Futures */}
      <section id="inclusive" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mr-4">
                  <Users size={20} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Inclusive Futures</h2>
              </div>
              <div className="h-1 w-24 bg-blue-600 mb-6"></div>
              <p className="text-gray-600 mb-4">
                Our Inclusive Futures program supports grassroot NGOs and communities to challenge the ableist gaze, based on a socio-cultural model of disability that emphasizes problems with culture rather than individuals with disabilities.
              </p>
              <p className="text-gray-600 mb-4">
                We work to create inclusive environments where all individuals are valued and empowered, regardless of ability status.
              </p>
              <h3 className="text-xl font-semibold mb-2">Program Focus:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>Advocating for systemic cultural change</li>
                <li>Capacity building for grassroot disability organizations</li>
                <li>Community awareness and education campaigns</li>
                <li>Inclusive policy development assistance</li>
                <li>Cross-sector collaboration for inclusive practices</li>
              </ul>
              <a href="mailto:themettainitiative@gmail.com" className="px-6 py-2 bg-blue-700 text-white hover:bg-blue-800 rounded-md font-medium transition-colors duration-200 shadow-md inline-block">
                Support This Project
              </a>
            </div>
            <div className="md:w-1/2">
              <img src="https://mocha-cdn.com/0196552c-4056-73f6-b985-08586aa30f9f/Inclusive-Futures-1.jpg" alt="Inclusive Futures conference with attendees" className="h-80 w-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Green Tech-Zero */}
      <section id="greentech" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mr-4">
                  <Globe size={20} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Green Tech-Zero</h2>
              </div>
              <div className="h-1 w-24 bg-blue-600 mb-6"></div>
              <p className="text-gray-600 mb-4">
                Green Tech-Zero is our initiative focused on climate technology, inclusive STEM education, and green innovations in marginalized communities. The project aims to address environmental challenges while creating opportunities for sustainable development.
              </p>
              <p className="text-gray-600 mb-4">
                By combining technological innovation with community empowerment, we're building a future where environmental sustainability and social inclusion go hand in hand.
              </p>
              <h3 className="text-xl font-semibold mb-2">Program Components:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>Climate tech innovation workshops</li>
                <li>Inclusive STEM education focused on environmental solutions</li>
                <li>Green technology skills training for underserved communities</li>
                <li>Community-based renewable energy projects</li>
                <li>Sustainable agriculture and waste management initiatives</li>
              </ul>
              <a href="mailto:themettainitiative@gmail.com" className="px-6 py-2 bg-blue-700 text-white hover:bg-blue-800 rounded-md font-medium transition-colors duration-200 shadow-md inline-block">
                Support This Project
              </a>
            </div>
            <div className="md:w-1/2">
              <img src="https://mocha-cdn.com/0196552c-4056-73f6-b985-08586aa30f9f/Green-Tech-zero--1.jpg" alt="Environmental education classroom with students" className="h-80 w-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Impact Stories</h2>
            <div className="mt-2 h-1 w-24 bg-blue-600 mx-auto"></div>
            <p className="max-w-3xl mx-auto mt-4 text-gray-600">
              Real stories from people whose lives have been changed through our programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <blockquote className="text-gray-600 italic mb-4">
                "I am very glad children of my school are learning about STEM and innovating in their classes, in this changing world of rapid advancements it becomes crucial for every child to attain 21st century skills."
              </blockquote>
              <div className="flex items-center">
                <div className="h-12 w-12 bg-blue-200 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold">Ajay Garg</p>
                  <p className="text-sm text-gray-500">Principal Sacred Heart School</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <blockquote className="text-gray-600 italic mb-4">
                "I had been living with blurry vision for years. The eye camp came to our village, and they gave me glasses. It's like seeing the world for the first time. My grandchildren's faces are clear now. I can read again!"
              </blockquote>
              <div className="flex items-center">
                <div className="h-12 w-12 bg-blue-200 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold">Shahana</p>
                  <p className="text-sm text-gray-500">Eye Camp Recipient</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Help Us Make a Difference</h2>
          <p className="text-xl mb-8">
            Our work depends on the generosity of supporters like you. Together, we can create lasting change.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:themettainitiative@gmail.com" className="px-8 py-3 bg-white text-blue-700 hover:bg-gray-100 rounded-md font-medium transition-colors duration-200 shadow-md">
              Contact Us
            </a>
            <a href="https://forms.gle/VcqugWbB9KRQ9RPS9" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-blue-800 text-white hover:bg-blue-900 border border-white rounded-md font-medium transition-colors duration-200 shadow-md">
              Become a Volunteer
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
