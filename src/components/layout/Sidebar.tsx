import React from 'react';
import { NavLink } from 'react-router-dom';
import { X, Home, BarChart3, Gamepad2, ArrowLeftRight, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile sidebar backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-dark-900 bg-opacity-80 z-40 md:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 z-50 h-full w-64 bg-dark-800 shadow-lg border-r border-dark-600 md:relative md:translate-x-0 md:hidden"
          >
            <div className="p-4 border-b border-dark-600 flex items-center justify-between">
              <h2 className="text-xl font-bold gradient-text">CrossRealm</h2>
              <button
                onClick={onClose}
                className="rounded-md text-light-400 hover:text-light-100 focus:outline-none"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="p-4 space-y-1">
              <SidebarLink to="/" icon={<Home size={20} />} label="Home" />
              <SidebarLink to="/dashboard" icon={<BarChart3 size={20} />} label="DeFi Dashboard" />
              <SidebarLink to="/game" icon={<Gamepad2 size={20} />} label="Game World" />
              <SidebarLink to="/bridge" icon={<ArrowLeftRight size={20} />} label="Asset Bridge" />
              <SidebarLink to="/marketplace" icon={<ShoppingBag size={20} />} label="Marketplace" />
            </nav>
            
            <div className="absolute bottom-0 w-full p-4 border-t border-dark-600">
              <div className="card-glass p-3">
                <h3 className="text-sm font-medium mb-1">Quick Stats</h3>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-light-400">TRN Balance:</span>
                  <span className="text-light-100">1,245.78</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-light-400">NFTs Owned:</span>
                  <span className="text-light-100">7</span>
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar - Always visible on md screens and up */}
      <aside className="hidden md:block w-64 h-full bg-dark-800 border-r border-dark-600">
        <div className="p-4 border-b border-dark-600">
          <h2 className="text-xl font-bold gradient-text">CrossRealm</h2>
        </div>

        <nav className="p-4 space-y-1">
          <SidebarLink to="/" icon={<Home size={20} />} label="Home" />
          <SidebarLink to="/dashboard" icon={<BarChart3 size={20} />} label="DeFi Dashboard" />
          <SidebarLink to="/game" icon={<Gamepad2 size={20} />} label="Game World" />
          <SidebarLink to="/bridge" icon={<ArrowLeftRight size={20} />} label="Asset Bridge" />
          <SidebarLink to="/marketplace" icon={<ShoppingBag size={20} />} label="Marketplace" />
        </nav>

        <div className="absolute bottom-0 w-64 p-4 border-t border-dark-600">
          <div className="card-glass p-3">
            <h3 className="text-sm font-medium mb-1">Quick Stats</h3>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-light-400">TRN Balance:</span>
              <span className="text-light-100">1,245.78</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-light-400">NFTs Owned:</span>
              <span className="text-light-100">7</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

interface SidebarLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ to, icon, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center space-x-3 px-3 py-2 rounded-md transition-colors duration-200 ${
          isActive
            ? 'bg-primary-500 bg-opacity-20 text-primary-400'
            : 'text-light-400 hover:text-light-100 hover:bg-dark-700'
        }`
      }
    >
      <span>{icon}</span>
      <span>{label}</span>
    </NavLink>
  );
};

export default Sidebar;