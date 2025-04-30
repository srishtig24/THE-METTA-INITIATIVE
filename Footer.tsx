import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone, Rss, Twitter } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo className="text-white" />
            <p className="text-sm mt-4">
              The Metta Initiative is dedicated to improving lives through education, healthcare, and community support.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://x.com/MettaInitiative" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/themettainitative/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/the-metta-initiative/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Rss size={20} title="LinkedIn" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-300 transition-colors duration-200">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-300 transition-colors duration-200">About Us</Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-blue-300 transition-colors duration-200">Our Work</Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-blue-300 transition-colors duration-200">Resources</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/work#stem" className="hover:text-blue-300 transition-colors duration-200">STEM Project</Link>
              </li>
              <li>
                <Link to="/work#eye" className="hover:text-blue-300 transition-colors duration-200">Eye Camp</Link>
              </li>
              <li>
                <Link to="/work#physio" className="hover:text-blue-300 transition-colors duration-200">Physiotherapy Camps</Link>
              </li>
              <li>
                <Link to="/work#inclusive" className="hover:text-blue-300 transition-colors duration-200">Inclusive Futures</Link>
              </li>
              <li>
                <Link to="/work#greentech" className="hover:text-blue-300 transition-colors duration-200">Green Tech-Zero</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin size={18} className="mr-2 text-blue-400" />
                <span>First Floor B-216 Jhilmil, Delhi 110095</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-blue-400" />
                <span>+91 8800464880</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 text-blue-400 flex-shrink-0" />
                <span className="break-all">themettainitiative@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} The Metta Initiative. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
