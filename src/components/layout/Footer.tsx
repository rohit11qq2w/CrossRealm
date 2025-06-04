import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-800 border-t border-dark-600 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-light-500">
              &copy; {new Date().getFullYear()} CrossRealm. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center">
            <p className="text-sm text-light-500 mr-4">
              Powered by The Root Network
            </p>
            <p className="text-sm text-light-500 flex items-center">
              Made with <Heart size={14} className="mx-1 text-error-500" /> on TRN
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;