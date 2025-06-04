import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Wallet } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Logo from '../components/ui/Logo';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username) {
      setError('Username is required');
      return;
    }
    
    setError('');
    setIsSubmitting(true);
    
    try {
      await login(username, password);
      navigate('/');
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const connectWallet = () => {
    setIsSubmitting(true);
    
    // Simulate connecting to FuturePass wallet
    setTimeout(async () => {
      try {
        await login('Demo User', '');
        navigate('/');
      } catch (error) {
        setError('Wallet connection failed. Please try again.');
        setIsSubmitting(false);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="mb-8 text-center">
          <div className="flex justify-center mb-4">
            <Logo className="h-12 w-12" />
          </div>
          <h1 className="text-3xl font-bold gradient-text mb-2">CrossRealm</h1>
          <p className="text-light-400">Gaming + DeFi Ecosystem on TRN</p>
        </div>

        <div className="card-glass p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back</h2>

          {error && (
            <div className="mb-4 p-3 bg-error-500 bg-opacity-20 border border-error-500 rounded-md">
              <p className="text-sm text-error-400">{error}</p>
            </div>
          )}

          <button
            onClick={connectWallet}
            disabled={isSubmitting}
            className="btn w-full flex items-center justify-center space-x-2 mb-6 bg-primary-500 hover:bg-primary-600 text-light-100 transition-colors duration-200"
          >
            {isSubmitting ? (
              <div className="animate-spin h-5 w-5 border-2 border-light-100 border-t-transparent rounded-full"></div>
            ) : (
              <>
                <Wallet size={20} />
                <span>Connect with FuturePass</span>
              </>
            )}
          </button>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-dark-500"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-2 bg-dark-600 text-sm text-light-500">or</span>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-light-300 mb-1">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={isSubmitting}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-light-300 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isSubmitting}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn w-full bg-secondary-500 hover:bg-secondary-600 text-dark-900 font-medium transition-colors duration-200"
            >
              {isSubmitting ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <p className="mt-6 text-sm text-light-500 text-center">
            Don't have an account? Just connect your FuturePass wallet to get started.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;