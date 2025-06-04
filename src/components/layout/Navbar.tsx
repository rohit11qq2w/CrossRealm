import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Bell, Wallet, User } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import Logo from '../ui/Logo';

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  const location = useLocation();
  const { user, balance, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 bg-dark-800 bg-opacity-80 backdrop-blur-md border-b border-dark-600">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button 
              onClick={onMenuClick}
              className="md:hidden p-2 rounded-md text-light-400 hover:text-light-100 focus:outline-none"
            >
              <Menu size={24} />
            </button>
            <div className="ml-2 md:ml-0">
              <Link to="/" className="flex items-center">
                <Logo className="h-8 w-auto" />
                <span className="ml-2 text-xl font-display font-bold gradient-text">CrossRealm</span>
              </Link>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" active={location.pathname === '/'}>Home</NavLink>
            <NavLink to="/dashboard" active={location.pathname === '/dashboard'}>DeFi</NavLink>
            <NavLink to="/game" active={location.pathname === '/game'}>Game</NavLink>
            <NavLink to="/bridge" active={location.pathname === '/bridge'}>Bridge</NavLink>
            <NavLink to="/marketplace" active={location.pathname === '/marketplace'}>Market</NavLink>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full text-light-400 hover:text-light-100 focus:outline-none relative">
              <Bell size={20} />
              <span className="absolute top-0 right-0 h-2 w-2 bg-accent-500 rounded-full"></span>
            </button>
            
            <div className="hidden md:flex items-center bg-dark-700 rounded-full px-3 py-1.5">
              <Wallet size={16} className="text-primary-400 mr-2" />
              <span className="text-sm font-medium">{balance} TRN</span>
            </div>
            
            <div className="relative group">
              <button className="flex items-center justify-center h-8 w-8 rounded-full bg-primary-500 hover:bg-primary-400 transition-colors duration-200 focus:outline-none">
                <User size={16} className="text-light-100" />
              </button>
              
              <div className="absolute right-0 w-48 mt-2 origin-top-right bg-dark-700 border border-dark-500 rounded-md shadow-lg invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="py-2 px-4">
                  <p className="text-sm font-medium text-light-100">{user?.name}</p>
                  <p className="text-xs text-light-500 truncate">{user?.address}</p>
                </div>
                <div className="border-t border-dark-500"></div>
                <div className="py-1">
                  <button 
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-sm text-light-400 hover:bg-dark-600 hover:text-light-100"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  active: boolean;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, active, children }) => {
  return (
    <Link
      to={to}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
        active 
          ? 'text-light-100 bg-primary-500 bg-opacity-20' 
          : 'text-light-400 hover:text-light-100 hover:bg-dark-700'
      }`}
    >
      {children}
    </Link>
  );
};

export default Navbar;