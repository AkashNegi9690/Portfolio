import React from 'react';
import { Link } from 'react-scroll';
import { Github, Linkedin, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuItems = [
    { label: 'About', to: 'about' },
    { label: 'Skills', to: 'skills' },
    { label: 'Projects', to: 'projects' },
    { label: 'Contact', to: 'contact' },
  ];

  return (
    <nav className="fixed w-full backdrop-blur-sm z-50 py-4 border-b-2 border-gray-400">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="hero" smooth={true} className="text-2xl font-bold text-white cursor-pointer">
            Portfolio
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {menuItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-300 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-gray-800 rounded-lg p-4">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex space-x-4 pt-4 border-t border-gray-700">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                   className="text-gray-300 hover:text-white transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                   className="text-gray-300 hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}