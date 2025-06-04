import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, ArrowUpRight, Wallet, RefreshCw, Award, TrendingUp, DivideIcon as LucideIcon, Lock, Unlock, Info } from 'lucide-react';
import { 
  LineChart, Line, AreaChart, Area, RadialBarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
  PolarAngleAxis,
  PolarRadiusAxis
} from 'recharts';

// Mock data
const portfolioData = [
  { name: 'TRN', value: 65, amount: '1,245.78', usdValue: '$3,739.23', color: '#8A4FFF' },
  { name: 'XRPL', value: 20, amount: '250.50', usdValue: '$1,150.45', color: '#00E6FF' },
  { name: 'ETH', value: 10, amount: '0.25', usdValue: '$575.25', color: '#47F0FF' },
  { name: 'BTC', value: 5, amount: '0.008', usdValue: '$287.60', color: '#FF7D54' },
];

const yieldData = [
  { name: 'TRN Staking', apy: '12%', reward: '8.45 TRN/day', tvl: '$1.2M', platform: 'TRN DEX' },
  { name: 'XRPL-TRN LP', apy: '18%', reward: '3.25 TRN/day', tvl: '$890K', platform: 'TRN DEX' },
  { name: 'Game Boost Pool', apy: '22%', reward: '5.12 TRN/day', tvl: '$650K', platform: 'CrossRealm' },
];

const rewardsHistory = [
  { name: 'Jan', rewards: 125 },
  { name: 'Feb', rewards: 180 },
  { name: 'Mar', rewards: 210 },
  { name: 'Apr', rewards: 290 },
  { name: 'May', rewards: 310 },
  { name: 'Jun', rewards: 285 },
  { name: 'Jul', rewards: 355 },
];

const unlockablePerks = [
  { 
    name: 'Void Dragon Mount',
    requirement: 'Stake 500 TRN for 30 days',
    progress: 85,
    type: 'game',
    icon: Lock
  },
  { 
    name: 'Exclusive Game Zone',
    requirement: 'Stake 1000 TRN for 60 days',
    progress: 62,
    type: 'game',
    icon: Lock
  },
  { 
    name: 'Boosted APY (+5%)',
    requirement: 'Stake 2000 TRN for 90 days',
    progress: 45,
    type: 'defi',
    icon: Lock
  },
  { 
    name: 'Legendary Sword Skin',
    requirement: 'Completed',
    progress: 100,
    type: 'game',
    icon: Unlock
  },
];

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('portfolio');

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
            <h1 className="text-3xl md:text-4xl font-bold mb-2">DeFi Dashboard</h1>
            <p className="text-light-400">Manage your assets and earn rewards across the multiverse</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="btn-primary flex items-center">
              <RefreshCw size={16} className="mr-2" />
              Refresh
            </button>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard 
          title="Total Portfolio Value" 
          value="$5,752.53" 
          change="+12.4%" 
          icon={Wallet} 
          color="primary"
          delay={0.1}
        />
        <StatCard 
          title="Total Yield Earned" 
          value="842.6 TRN" 
          change="+28.2% this month" 
          icon={TrendingUp} 
          color="secondary"
          delay={0.2}
        />
        <StatCard 
          title="Game Perks Unlocked" 
          value="4/10" 
          change="2 perks close to unlock" 
          icon={Award} 
          color="accent"
          delay={0.3}
        />
      </div>

      <div className="card">
        <div className="flex flex-wrap border-b border-dark-600 mb-6">
          <button 
            className={`tab ${activeTab === 'portfolio' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('portfolio')}
          >
            Portfolio
          </button>
          <button 
            className={`tab ${activeTab === 'yield' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('yield')}
          >
            Yield Farming
          </button>
          <button 
            className={`tab ${activeTab === 'rewards' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('rewards')}
          >
            Rewards History
          </button>
          <button 
            className={`tab ${activeTab === 'gameperks' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('gameperks')}
          >
            Game Perks
          </button>
        </div>

        {activeTab === 'portfolio' && <PortfolioTab />}
        {activeTab === 'yield' && <YieldFarmingTab />}
        {activeTab === 'rewards' && <RewardsHistoryTab />}
        {activeTab === 'gameperks' && <GamePerksTab />}
      </div>
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  color: 'primary' | 'secondary' | 'accent';
  delay: number;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon: Icon, color, delay }) => {
  const bgColorClass = 
    color === 'primary' ? 'bg-primary-500' : 
    color === 'secondary' ? 'bg-secondary-500' : 
    'bg-accent-500';
  
  const textColorClass =
    color === 'primary' ? 'text-primary-400' : 
    color === 'secondary' ? 'text-secondary-400' : 
    'text-accent-400';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="card p-6"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-light-400 mb-1">{title}</p>
          <h3 className="text-2xl font-bold mb-1">{value}</h3>
          <p className="text-xs flex items-center text-success-400">
            <ArrowUpRight size={14} className="mr-1" />
            {change}
          </p>
        </div>
        <div className={`p-3 rounded-lg ${bgColorClass} bg-opacity-20`}>
          <Icon size={24} className={textColorClass} />
        </div>
      </div>
    </motion.div>
  );
};

const PortfolioTab: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
      <div className="lg:col-span-2">
        <h3 className="text-lg font-medium mb-4">Asset Allocation</h3>
        <div className="aspect-square max-w-[300px] mx-auto">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              innerRadius={40}
              outerRadius={80}
              data={portfolioData}
              startAngle={0}
              endAngle={360}
            >
              <PolarAngleAxis
                type="number"
                domain={[0, 100]}
                angleAxisId={0}
                tick={false}
              />
              <PolarRadiusAxis
                angle={30}
                domain={[0, 100]}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1E2139',
                  borderColor: '#232643',
                  borderRadius: '0.5rem',
                }}
                formatter={(value: number) => [`${value}%`, 'Allocation']}
              />
              <Bar
                dataKey="value"
                background={{ fill: '#282D4D' }}
                data={portfolioData.map(item => ({
                  ...item,
                  fill: item.color,
                }))}
              />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="lg:col-span-3">
        <h3 className="text-lg font-medium mb-4">Your Assets</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-dark-600">
                <th className="text-left py-3 px-4 font-medium text-light-400">Asset</th>
                <th className="text-right py-3 px-4 font-medium text-light-400">Amount</th>
                <th className="text-right py-3 px-4 font-medium text-light-400">Value (USD)</th>
                <th className="text-right py-3 px-4 font-medium text-light-400">Allocation</th>
                <th className="text-right py-3 px-4 font-medium text-light-400">Actions</th>
              </tr>
            </thead>
            <tbody>
              {portfolioData.map((asset, index) => (
                <tr key={index} className="border-b border-dark-700">
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full mr-2" style={{ backgroundColor: asset.color }}></div>
                      <span className="font-medium">{asset.name}</span>
                    </div>
                  </td>
                  <td className="text-right py-3 px-4">{asset.amount}</td>
                  <td className="text-right py-3 px-4">{asset.usdValue}</td>
                  <td className="text-right py-3 px-4">{asset.value}%</td>
                  <td className="text-right py-3 px-4">
                    <div className="flex justify-end space-x-2">
                      <button className="btn-ghost p-1">Stake</button>
                      <button className="btn-ghost p-1">Trade</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const YieldFarmingTab: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card p-6 bg-primary-500 bg-opacity-10">
          <h3 className="text-lg font-medium mb-2">TRN Staking</h3>
          <p className="text-3xl font-bold mb-4">12% <span className="text-sm font-normal text-light-400">APY</span></p>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-light-400">Your stake:</span>
              <span className="text-sm font-medium">750 TRN</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-light-400">Value:</span>
              <span className="text-sm font-medium">$2,250</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-light-400">Daily rewards:</span>
              <span className="text-sm font-medium">8.45 TRN</span>
            </div>
          </div>
          <div className="mt-4 flex space-x-2">
            <button className="btn-primary flex-1">Stake More</button>
            <button className="btn-outline flex-1">Unstake</button>
          </div>
        </div>
        
        <div className="card p-6 bg-secondary-500 bg-opacity-10">
          <h3 className="text-lg font-medium mb-2">XRPL-TRN LP</h3>
          <p className="text-3xl font-bold mb-4">18% <span className="text-sm font-normal text-light-400">APY</span></p>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-light-400">Your LP tokens:</span>
              <span className="text-sm font-medium">120.5</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-light-400">Value:</span>
              <span className="text-sm font-medium">$1,500</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-light-400">Daily rewards:</span>
              <span className="text-sm font-medium">3.25 TRN</span>
            </div>
          </div>
          <div className="mt-4 flex space-x-2">
            <button className="btn-secondary flex-1">Add Liquidity</button>
            <button className="btn-outline flex-1">Remove</button>
          </div>
        </div>
        
        <div className="card p-6 bg-accent-500 bg-opacity-10">
          <h3 className="text-lg font-medium mb-2">Game Boost Pool</h3>
          <p className="text-3xl font-bold mb-4">22% <span className="text-sm font-normal text-light-400">APY</span></p>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-light-400">Your stake:</span>
              <span className="text-sm font-medium">250 TRN</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-light-400">Value:</span>
              <span className="text-sm font-medium">$750</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-light-400">Daily rewards:</span>
              <span className="text-sm font-medium">5.12 TRN</span>
            </div>
          </div>
          <div className="mt-4 flex space-x-2">
            <button className="btn-accent flex-1">Stake More</button>
            <button className="btn-outline flex-1">Unstake</button>
          </div>
        </div>
      </div>
      
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Available Yield Opportunities</h3>
          <div className="flex items-center">
            <select className="select text-sm">
              <option>Sort by APY</option>
              <option>Sort by TVL</option>
              <option>Sort by Platform</option>
            </select>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-dark-600">
                <th className="text-left py-3 px-4 font-medium text-light-400">Pool</th>
                <th className="text-center py-3 px-4 font-medium text-light-400">APY</th>
                <th className="text-center py-3 px-4 font-medium text-light-400">Daily Reward</th>
                <th className="text-center py-3 px-4 font-medium text-light-400">TVL</th>
                <th className="text-center py-3 px-4 font-medium text-light-400">Platform</th>
                <th className="text-right py-3 px-4 font-medium text-light-400">Action</th>
              </tr>
            </thead>
            <tbody>
              {yieldData.map((pool, index) => (
                <tr key={index} className="border-b border-dark-700">
                  <td className="py-3 px-4 font-medium">{pool.name}</td>
                  <td className="text-center py-3 px-4 text-success-400">{pool.apy}</td>
                  <td className="text-center py-3 px-4">{pool.reward}</td>
                  <td className="text-center py-3 px-4">{pool.tvl}</td>
                  <td className="text-center py-3 px-4">{pool.platform}</td>
                  <td className="text-right py-3 px-4">
                    <button className="btn-primary py-1 px-3 text-xs">Stake</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const RewardsHistoryTab: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Monthly Rewards</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={rewardsHistory}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorRewards" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8A4FFF" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8A4FFF" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="date" 
                tick={{ fill: '#919AA3' }}
                axisLine={{ stroke: '#2A2A2A' }}
                tickLine={{ stroke: '#2A2A2A' }}
              />
              <YAxis 
                tick={{ fill: '#919AA3' }}
                axisLine={{ stroke: '#2A2A2A' }}
                tickLine={{ stroke: '#2A2A2A' }}
              />
              <CartesianGrid strokeDasharray="3 3" stroke="#2A2A2A" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1E2139', 
                  borderColor: '#232643', 
                  borderRadius: '0.5rem',
                }}
              />
              <Area 
                type="monotone" 
                dataKey="rewards" 
                stroke="#8A4FFF" 
                fillOpacity={1} 
                fill="url(#colorRewards)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-4">Rewards Summary</h3>
        <div className="card p-6 bg-dark-700 mb-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-light-400 mb-1">Total Rewards Earned</p>
              <p className="text-2xl font-bold">842.6 TRN</p>
              <p className="text-sm text-light-500">≈ $2,527.80</p>
            </div>
            <div>
              <p className="text-sm text-light-400 mb-1">This Month</p>
              <p className="text-2xl font-bold">115.2 TRN</p>
              <p className="text-sm text-success-400">+12.4% from last month</p>
            </div>
          </div>
        </div>
        
        <div className="card p-6 bg-dark-700">
          <h4 className="text-md font-medium mb-3">Rewards Breakdown</h4>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">TRN Staking</span>
                <span className="text-sm font-medium">450.8 TRN</span>
              </div>
              <div className="progress-bar">
                <div className="progress-bar-fill bg-primary-500" style={{ width: '55%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Liquidity Provision</span>
                <span className="text-sm font-medium">215.3 TRN</span>
              </div>
              <div className="progress-bar">
                <div className="progress-bar-fill bg-secondary-500" style={{ width: '25%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Game Rewards</span>
                <span className="text-sm font-medium">176.5 TRN</span>
              </div>
              <div className="progress-bar">
                <div className="progress-bar-fill bg-accent-500" style={{ width: '20%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const GamePerksTab: React.FC = () => {
  return (
    <div>
      <div className="bg-dark-700 p-4 rounded-lg mb-6 flex items-start">
        <Info size={20} className="text-primary-400 mr-2 flex-shrink-0 mt-1" />
        <p className="text-sm">
          Stake your TRN tokens to unlock exclusive in-game perks and abilities. The longer you stake, the more powerful perks you unlock!
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {unlockablePerks.map((perk, index) => (
          <div key={index} className="card p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium mb-1">{perk.name}</h3>
                <p className="text-sm text-light-400">{perk.requirement}</p>
              </div>
              <div className={`p-2 rounded-full ${perk.progress === 100 ? 'bg-success-500' : 'bg-primary-500'} bg-opacity-20`}>
                <perk.icon size={20} className={perk.progress === 100 ? 'text-success-400' : 'text-primary-400'} />
              </div>
            </div>
            
            <div className="mb-2">
              <div className="flex justify-between mb-1">
                <span className="text-sm text-light-400">Progress</span>
                <span className="text-sm font-medium">{perk.progress}%</span>
              </div>
              <div className="progress-bar">
                <div 
                  className={`progress-bar-fill ${
                    perk.progress === 100 
                      ? 'bg-success-500' 
                      : perk.type === 'game' 
                        ? 'bg-primary-500' 
                        : 'bg-secondary-500'
                  }`} 
                  style={{ width: `${perk.progress}%` }}
                ></div>
              </div>
            </div>
            
            <div className="flex justify-between">
              <span className="text-xs inline-flex items-center">
                <div className={`w-2 h-2 rounded-full ${perk.type === 'game' ? 'bg-primary-400' : 'bg-secondary-400'} mr-1`}></div>
                {perk.type === 'game' ? 'Game Perk' : 'DeFi Perk'}
              </span>
              
              {perk.progress < 100 ? (
                <button className="text-xs text-primary-400 hover:text-primary-300">Stake More</button>
              ) : (
                <button className="text-xs text-success-400 hover:text-success-300">Claim</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;