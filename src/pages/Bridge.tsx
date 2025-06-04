import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftRight, ArrowRight, AlertCircle, TrendingUp, Clock, CheckCircle, Info } from 'lucide-react';
import CountUp from 'react-countup';

const Bridge: React.FC = () => {
  const [fromAsset, setFromAsset] = useState('TRN');
  const [toAsset, setToAsset] = useState('gTRN');
  const [amount, setAmount] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleSwapDirection = () => {
    setFromAsset(toAsset);
    setToAsset(fromAsset);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || parseFloat(amount) <= 0) return;
    
    setIsProcessing(true);
    
    // Simulate transaction processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);
      
      // Reset after showing success
      setTimeout(() => {
        setIsComplete(false);
        setAmount('');
      }, 5000);
    }, 3000);
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card-glass p-6 md:p-8"
      >
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Cross-Realm Bridge</h1>
            <p className="text-light-400">Move assets between gaming and DeFi ecosystems seamlessly</p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-2"
        >
          <div className="card p-6">
            <h2 className="text-xl font-bold mb-6">Bridge Assets</h2>
            
            {isComplete ? (
              <div className="bg-success-500 bg-opacity-10 border border-success-500 rounded-lg p-6 text-center mb-6">
                <div className="flex justify-center mb-3">
                  <div className="h-16 w-16 rounded-full bg-success-500 bg-opacity-20 flex items-center justify-center">
                    <CheckCircle size={32} className="text-success-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Transaction Complete!</h3>
                <p className="text-light-400 mb-3">Your assets have been successfully bridged.</p>
                <div className="flex justify-center items-center space-x-3 text-lg font-medium">
                  <span>{parseFloat(amount)} {fromAsset}</span>
                  <ArrowRight size={20} />
                  <span>{(parseFloat(amount) * 0.98).toFixed(2)} {toAsset}</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <div className="flex justify-between mb-1">
                    <label htmlFor="fromAsset" className="block text-sm font-medium text-light-300">From</label>
                    <span className="text-sm text-light-500">Balance: 1,245.78 TRN</span>
                  </div>
                  
                  <div className="flex space-x-3 mb-4">
                    <select
                      id="fromAsset"
                      value={fromAsset}
                      onChange={(e) => setFromAsset(e.target.value)}
                      className="select flex-shrink-0 w-32"
                    >
                      <option value="TRN">TRN</option>
                      <option value="gTRN">gTRN</option>
                      <option value="XRPL">XRPL</option>
                    </select>
                    
                    <div className="relative flex-grow">
                      <input
                        type="number"
                        placeholder="0.0"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="input pr-20"
                      />
                      <button
                        type="button"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-primary-400 hover:text-primary-300 font-medium"
                        onClick={() => setAmount('1245.78')}
                      >
                        MAX
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex justify-center my-4">
                    <button
                      type="button"
                      onClick={handleSwapDirection}
                      className="p-3 rounded-full bg-dark-700 hover:bg-dark-600 transition-colors duration-200"
                    >
                      <ArrowLeftRight size={20} className="text-primary-400" />
                    </button>
                  </div>
                  
                  <div className="flex justify-between mb-1">
                    <label htmlFor="toAsset" className="block text-sm font-medium text-light-300">To</label>
                    <span className="text-sm text-light-500">Balance: 85.42 gTRN</span>
                  </div>
                  
                  <div className="flex space-x-3">
                    <select
                      id="toAsset"
                      value={toAsset}
                      onChange={(e) => setToAsset(e.target.value)}
                      className="select flex-shrink-0 w-32"
                    >
                      <option value="TRN">TRN</option>
                      <option value="gTRN">gTRN</option>
                      <option value="XRPL">XRPL</option>
                    </select>
                    
                    <div className="relative flex-grow">
                      <input
                        type="text"
                        placeholder="0.0"
                        value={amount ? (parseFloat(amount) * 0.98).toFixed(2) : ''}
                        readOnly
                        className="input text-light-500"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="bg-dark-700 rounded-lg p-4 mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-light-400">Bridge Fee</span>
                    <span className="text-sm">{amount ? (parseFloat(amount) * 0.02).toFixed(2) : '0.00'} {fromAsset}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-light-400">Estimated Time</span>
                    <span className="text-sm">~2 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-light-400">You will receive</span>
                    <span className="text-sm font-medium">{amount ? (parseFloat(amount) * 0.98).toFixed(2) : '0.00'} {toAsset}</span>
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={!amount || parseFloat(amount) <= 0 || isProcessing}
                  className="btn-primary w-full flex items-center justify-center"
                >
                  {isProcessing ? (
                    <>
                      <div className="animate-spin h-5 w-5 border-2 border-light-100 border-t-transparent rounded-full mr-2"></div>
                      Processing Transaction...
                    </>
                  ) : (
                    'Bridge Assets'
                  )}
                </button>
              </form>
            )}
            
            <div className="mt-6 bg-primary-500 bg-opacity-10 rounded-lg p-4 flex items-start">
              <Info size={20} className="text-primary-400 mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-sm">
                <span className="font-medium">Bridging Info:</span> Moving assets between realms enables you to use the same tokens in both gaming and DeFi ecosystems. gTRN is the gaming version of TRN that can be used for in-game purchases and quest rewards.
              </p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="card p-6">
            <h2 className="text-xl font-bold mb-4">Bridge Stats</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-light-400 mb-1">Total Value Locked</p>
                <div className="text-2xl font-bold">
                  <CountUp 
                    end={2845625} 
                    prefix="$"
                    separator="," 
                    duration={2.5}
                  />
                </div>
              </div>
              
              <div>
                <p className="text-sm text-light-400 mb-1">24h Volume</p>
                <div className="text-xl font-bold flex items-center">
                  <CountUp 
                    end={342856} 
                    prefix="$"
                    separator="," 
                    duration={2} 
                  />
                  <span className="text-success-400 text-sm font-normal ml-2 flex items-center">
                    <TrendingUp size={14} className="mr-1" />
                    +12.4%
                  </span>
                </div>
              </div>
              
              <div>
                <p className="text-sm text-light-400 mb-1">Total Transactions</p>
                <div className="text-xl font-bold">
                  <CountUp 
                    end={58421} 
                    separator="," 
                    duration={2} 
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="card p-6">
            <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>
            <div className="space-y-3">
              <TransactionItem 
                from="TRN" 
                to="gTRN" 
                amount={250} 
                time="2 min ago" 
                status="completed" 
              />
              <TransactionItem 
                from="XRPL" 
                to="TRN" 
                amount={500} 
                time="15 min ago" 
                status="completed" 
              />
              <TransactionItem 
                from="gTRN" 
                to="TRN" 
                amount={75.5} 
                time="32 min ago" 
                status="completed" 
              />
              <TransactionItem 
                from="TRN" 
                to="XRPL" 
                amount={1000} 
                time="1 hour ago" 
                status="completed" 
              />
            </div>
          </div>
          
          <div className="card p-6">
            <h2 className="text-xl font-bold mb-4">Bridging Benefits</h2>
            <div className="space-y-3">
              <BenefitItem 
                title="Unified Liquidity" 
                description="Access your assets across both gaming and DeFi ecosystems" 
              />
              <BenefitItem 
                title="Earn While Playing" 
                description="Bridge game rewards to DeFi platforms for additional yield" 
              />
              <BenefitItem 
                title="Unlock Game Perks" 
                description="DeFi activities unlock exclusive in-game content and abilities" 
              />
              <BenefitItem 
                title="Cross-Chain Support" 
                description="Bridge assets from XRPL and other chains into the TRN ecosystem" 
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

interface TransactionItemProps {
  from: string;
  to: string;
  amount: number;
  time: string;
  status: 'pending' | 'completed' | 'failed';
}

const TransactionItem: React.FC<TransactionItemProps> = ({ from, to, amount, time, status }) => {
  return (
    <div className="flex items-center p-3 bg-dark-700 rounded-lg">
      <div className="mr-3">
        {status === 'pending' && <Clock size={16} className="text-warning-400" />}
        {status === 'completed' && <CheckCircle size={16} className="text-success-400" />}
        {status === 'failed' && <AlertCircle size={16} className="text-error-400" />}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center">
          <span className="font-medium truncate">{amount} {from}</span>
          <ArrowRight size={14} className="mx-1 text-light-500" />
          <span className="font-medium truncate">{(amount * 0.98).toFixed(2)} {to}</span>
        </div>
        <p className="text-xs text-light-500">{time}</p>
      </div>
    </div>
  );
};

interface BenefitItemProps {
  title: string;
  description: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ title, description }) => {
  return (
    <div className="p-3 bg-dark-700 rounded-lg">
      <h3 className="text-sm font-medium mb-1">{title}</h3>
      <p className="text-xs text-light-400">{description}</p>
    </div>
  );
};

export default Bridge;