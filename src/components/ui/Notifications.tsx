import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  icon?: React.ReactNode;
}

const Notifications: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  // Mock notifications for demo purposes
  useEffect(() => {
    const mockNotifications = [
      {
        id: '1',
        title: 'Quest Completed',
        message: 'You earned 50 TRN tokens for completing "The Forbidden Cave"',
        type: 'success' as const,
      },
      {
        id: '2',
        title: 'Yield Harvested',
        message: 'Successfully claimed 23.5 TRN from your staking rewards',
        type: 'info' as const,
      }
    ];

    const timer = setTimeout(() => {
      setNotifications(mockNotifications);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const removeNotification = (id: string) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id));
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2 max-w-sm">
      <AnimatePresence>
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            transition={{ duration: 0.3 }}
            className={`card-glass shadow-lg p-4 flex items-start ${
              notification.type === 'success' ? 'border-success-500' :
              notification.type === 'error' ? 'border-error-500' :
              notification.type === 'warning' ? 'border-warning-500' :
              'border-primary-500'
            }`}
          >
            <div className="flex-shrink-0 mr-3">
              {notification.type === 'success' && (
                <div className="h-8 w-8 rounded-full bg-success-500 bg-opacity-20 flex items-center justify-center text-success-400">
                  <svg xmlns="http://www.w3.org/2000/svg\" className="h-5 w-5\" viewBox="0 0 20 20\" fill="currentColor">
                    <path fillRule="evenodd\" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z\" clipRule="evenodd" />
                  </svg>
                </div>
              )}
              {notification.type === 'error' && (
                <div className="h-8 w-8 rounded-full bg-error-500 bg-opacity-20 flex items-center justify-center text-error-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
              {notification.type === 'warning' && (
                <div className="h-8 w-8 rounded-full bg-warning-500 bg-opacity-20 flex items-center justify-center text-warning-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
              {notification.type === 'info' && (
                <div className="h-8 w-8 rounded-full bg-primary-500 bg-opacity-20 flex items-center justify-center text-primary-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className="text-sm font-medium">{notification.title}</h3>
                <button
                  onClick={() => removeNotification(notification.id)}
                  className="ml-4 flex-shrink-0 text-light-400 hover:text-light-100 focus:outline-none"
                >
                  <X size={16} />
                </button>
              </div>
              <p className="mt-1 text-xs text-light-400">{notification.message}</p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Notifications;