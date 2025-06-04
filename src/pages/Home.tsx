import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Gamepad2, BarChart3, ArrowLeftRight, ShoppingBag, Trophy, Star, Activity } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Home: React.FC = () => {
  const { user } = useAuth();
  
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card-glass p-6 md:p-8"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Welcome back, <span className="gradient-text">{user?.name || 'Player'}</span>
            </h1>
            <p className="text-light-400">Your multiverse adventure continues. What would you like to do today?</p>
          </div>
          <div className="flex gap-2">
            <div className="badge-primary px-3 py-1.5 flex items-center">
              <Trophy size={16} className="mr-1" />
              <span>Level 15</span>
            </div>
            <div className="badge-secondary px-3 py-1.5 flex items-center">
              <Star size={16} className="mr-1" />
              <span>8,750 XP</span>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <FeatureCard
          icon={<Gamepad2 size={24} className="text-primary-400" />}
          title="Game World"
          description="Continue your adventure, complete quests and earn rewards"
          linkTo="/game"
          delay={0.1}
        />
        <FeatureCard
          icon={<BarChart3 size={24} className="text-secondary-400" />}
          title="DeFi Dashboard"
          description="Stake your assets, manage your portfolio and earn yield"
          linkTo="/dashboard"
          delay={0.2}
        />
        <FeatureCard
          icon={<ArrowLeftRight size={24} className="text-accent-400" />}
          title="Asset Bridge"
          description="Move your assets between gaming and DeFi ecosystems"
          linkTo="/bridge"
          delay={0.3}
        />
        <FeatureCard
          icon={<ShoppingBag size={24} className="text-success-400" />}
          title="Marketplace"
          description="Buy, sell and trade in-game items and NFTs"
          linkTo="/marketplace"
          delay={0.4}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="card col-span-1 lg:col-span-2"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Your Recent Activity</h2>
            <Link to="/game" className="text-sm text-primary-400 hover:text-primary-300">View All</Link>
          </div>
          <div className="space-y-3">
            <ActivityItem
              icon={<Trophy className="text-accent-500" />}
              title="Quest Completed"
              description="You've completed 'The Crystal Cavern' quest"
              time="2 hours ago"
              reward="+50 TRN"
            />
            <ActivityItem
              icon={<Activity className="text-secondary-500" />}
              title="Staking Reward"
              description="Received staking rewards from TRN Pool"
              time="5 hours ago"
              reward="+12.5 TRN"
            />
            <ActivityItem
              icon={<ShoppingBag className="text-success-500" />}
              title="NFT Purchased"
              description="You bought 'Mystic Dragon Scale' NFT"
              time="Yesterday"
              reward="-250 TRN"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="card"
        >
          <h2 className="text-xl font-bold mb-4">Upcoming Events</h2>
          <div className="space-y-3">
            <EventItem
              title="Multiverse Raid"
              description="Join players across realms to defeat the Void Dragon"
              date="Tomorrow, 8PM UTC"
              reward="Dragon Scale NFT"
              color="primary"
            />
            <EventItem
              title="DeFi Yield Rush"
              description="Special 24h staking event with 2x rewards"
              date="Friday, 12PM UTC"
              reward="Boosted APY"
              color="secondary"
            />
            <EventItem
              title="NFT Airdrop"
              description="Special items for active players"
              date="Next Week"
              reward="Mystery NFT"
              color="accent"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkTo: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, linkTo, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="card-glass hover:shadow-neon-hover hover:-translate-y-1 transition-all duration-300"
    >
      <Link to={linkTo} className="block p-6">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <div className="mb-4 p-3 bg-dark-700 rounded-lg">{icon}</div>
          <h3 className="text-lg font-medium mb-2">{title}</h3>
          <p className="text-sm text-light-400">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
};

interface ActivityItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  time: string;
  reward: string;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ icon, title, description, time, reward }) => {
  return (
    <div className="flex items-center p-3 rounded-md bg-dark-700 bg-opacity-50">
      <div className="flex-shrink-0 mr-3 p-2 bg-dark-800 rounded-md">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-medium truncate">{title}</h4>
        <p className="text-xs text-light-500 truncate">{description}</p>
        <p className="text-xs text-light-600">{time}</p>
      </div>
      <div className="flex-shrink-0 text-sm font-medium">
        {reward}
      </div>
    </div>
  );
};

interface EventItemProps {
  title: string;
  description: string;
  date: string;
  reward: string;
  color: 'primary' | 'secondary' | 'accent';
}

const EventItem: React.FC<EventItemProps> = ({ title, description, date, reward, color }) => {
  const borderColorClass = 
    color === 'primary' ? 'border-primary-500' : 
    color === 'secondary' ? 'border-secondary-500' : 
    'border-accent-500';
  
  return (
    <div className={`p-3 rounded-md bg-dark-700 bg-opacity-50 border-l-4 ${borderColorClass}`}>
      <h4 className="text-sm font-medium">{title}</h4>
      <p className="text-xs text-light-500 mb-1">{description}</p>
      <div className="flex justify-between text-xs">
        <span className="text-light-400">{date}</span>
        <span className="font-medium">Reward: {reward}</span>
      </div>
    </div>
  );
};

export default Home;