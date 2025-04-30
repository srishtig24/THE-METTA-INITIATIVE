import { DollarSign, Heart, Info, Users } from 'lucide-react';

const About = () => {
  const teamMembers = [
    { name: 'Srishti Gulati', role: 'Founder and Educator', image: 'https://mocha-cdn.com/0196552c-4056-73f6-b985-08586aa30f9f/Copy-of-Srishti-Gulati.jpg' },
    { name: 'Avnish Kumar', role: 'Co-Founder', image: 'https://mocha-cdn.com/0196552c-4056-73f6-b985-08586aa30f9f/Avnish-Kumar.jpg' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-700 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Learn about our organization, our mission, and the people behind The Metta Initiative
          </p>
        </div>
      </section>

      {/* Meaning of Metta */}
      <section id="meaning" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mr-4">
                  <Info size={20} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">The Meaning of Metta</h2>
              </div>
              <div className="h-1 w-24 bg-blue-600 mb-6"></div>
              <p className="text-gray-600 mb-4">
                "Metta" is a Pali word that translates to friendship or maitreyi — a deep bond rooted in love, respect, benevolence, and goodwill. In Buddhist philosophy, it is celebrated as one of the four sublime states, encouraging the cultivation of unconditional love and kindness toward all beings.
              </p>
              <p className="text-gray-600">
                At The Metta Initiative, this spirit of metta guides everything we do. We believe that compassion knows no boundaries. Led largely by young changemakers, our work is built on the simple but powerful idea that through acts of loving-kindness and practical action, we can drive meaningful change — walking alongside communities, listening, learning, and growing together.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-blue-50 rounded-lg p-8 shadow-sm">
                <blockquote className="italic text-gray-700 text-lg">
                  "May all beings be happy and safe. May all beings have mental happiness, physical happiness, and ease of well-being."
                </blockquote>
                <p className="mt-4 text-right text-gray-500">— Traditional Metta Blessing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section id="mission" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mr-4">
                  <Heart size={20} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <div className="h-1 w-24 bg-blue-600 mb-6"></div>
              <p className="text-gray-600 mb-4">
                At The Metta Initiative, we believe that compassion, when paired with action, can change the world.
              </p>
              <p className="text-gray-600 mb-4">
                Led by young changemakers, we work hand-in-hand with communities to create sustainable solutions across education, healthcare, disability inclusion, and environmental well-being. Our approach is simple yet powerful: listen deeply, act thoughtfully, and build lasting partnerships rooted in dignity and respect.
              </p>
              <p className="text-gray-600">
                From empowering first-generation learners through STEM education, to advocating for disability rights, to driving grassroots ecological action — every initiative we take forward is shaped by the voices of the communities we serve.
              </p>
              <p className="text-gray-600 mt-4">
                Our mission is to foster meaningful change that doesn't just impact today, but creates a more inclusive, healthier, and sustainable future for generations to come.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="https://mocha-cdn.com/0196552c-4056-73f6-b985-08586aa30f9f/our-mission.jpg" alt="Our mission in action" className="h-64 w-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section id="team" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="h-10 w-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mr-4">
                <Users size={20} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Team</h2>
            </div>
            <div className="h-1 w-24 bg-blue-600 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              The Metta Initiative's dedicated team of professionals and volunteers is committed to making a difference in the lives of those in need.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="h-64 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-blue-700">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donor Support */}
      <section id="donors" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="h-10 w-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mr-4">
                <DollarSign size={20} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Donor Support</h2>
            </div>
            <div className="h-1 w-24 bg-blue-600 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              We are grateful for the generous support of our donors, who make our work possible. Their contributions enable us to reach more communities and create greater impact.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold mb-6">How Your Donation Helps</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold text-xl mb-2">Education</h4>
                <p className="text-gray-600">
                  Your donation helps provide educational resources, build learning centers, and support students in underserved communities.
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold text-xl mb-2">Healthcare</h4>
                <p className="text-gray-600">
                  Contributions fund medical camps, equipment, and treatments for those who would otherwise lack access to quality healthcare.
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold text-xl mb-2">Community Development</h4>
                <p className="text-gray-600">
                  Your support enables community programs that build infrastructure, provide training, and empower local leaders.
                </p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <a href="mailto:themettainitiative@gmail.com" className="px-8 py-3 bg-blue-700 text-white hover:bg-blue-800 rounded-md font-medium transition-colors duration-200 shadow-md inline-block">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
