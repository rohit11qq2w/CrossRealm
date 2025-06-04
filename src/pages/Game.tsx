import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Sword, Shield, Clock, Award, Skull, ArrowRight, Sparkles, Star } from 'lucide-react';

// Mock data
const quests = [
  {
    id: 1,
    title: 'The Forbidden Cave',
    description: 'Explore the depths of the Crystal Cave and recover the ancient artifact',
    location: 'Northern Mountains',
    difficulty: 'Medium',
    rewards: [
      { type: 'token', amount: '50 TRN' },
      { type: 'xp', amount: '500 XP' },
      { type: 'item', name: 'Crystal Shard' }
    ],
    timeEstimate: '30 min',
    image: 'https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    title: 'Dragon\'s Lair',
    description: 'Defeat the dragon terrorizing the village and claim its treasure',
    location: 'Burning Mountains',
    difficulty: 'Hard',
    rewards: [
      { type: 'token', amount: '100 TRN' },
      { type: 'xp', amount: '1000 XP' },
      { type: 'nft', name: 'Dragon Scale' }
    ],
    timeEstimate: '1 hour',
    image: 'https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    title: 'Lost Library',
    description: 'Recover ancient scrolls from the Lost Library of Arcane Knowledge',
    location: 'Misty Forest',
    difficulty: 'Easy',
    rewards: [
      { type: 'token', amount: '25 TRN' },
      { type: 'xp', amount: '300 XP' },
      { type: 'item', name: 'Arcane Scroll' }
    ],
    timeEstimate: '20 min',
    image: 'https://images.pexels.com/photos/590478/pexels-photo-590478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    title: 'Underwater Temple',
    description: 'Dive into the depths to recover the Trident of the Sea King',
    location: 'Coral Bay',
    difficulty: 'Hard',
    rewards: [
      { type: 'token', amount: '120 TRN' },
      { type: 'xp', amount: '1200 XP' },
      { type: 'nft', name: 'Sea King\'s Trident' }
    ],
    timeEstimate: '1.5 hours',
    image: 'https://images.pexels.com/photos/2122422/pexels-photo-2122422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
];

const characterStats = {
  level: 15,
  xp: 8750,
  xpToNextLevel: 10000,
  class: 'Spellblade',
  stats: {
    strength: 25,
    dexterity: 18,
    intelligence: 30,
    constitution: 22
  },
  equipment: [
    { slot: 'Weapon', name: 'Runic Blade', rarity: 'Epic', bonus: '+15% Spell Power' },
    { slot: 'Armor', name: 'Shadowweave Robes', rarity: 'Rare', bonus: '+10% Magic Resistance' },
    { slot: 'Accessory', name: 'Amulet of the Void', rarity: 'Legendary', bonus: '+25% Critical Hit Chance' }
  ]
};

const inventory = [
  { id: 1, name: 'Health Potion', quantity: 12, type: 'Consumable', rarity: 'Common' },
  { id: 2, name: 'Mana Crystal', quantity: 8, type: 'Consumable', rarity: 'Uncommon' },
  { id: 3, name: 'Dragon Scale', quantity: 1, type: 'Material', rarity: 'Epic' },
  { id: 4, name: 'Crystal Shard', quantity: 5, type: 'Material', rarity: 'Rare' },
  { id: 5, name: 'Ancient Coin', quantity: 24, type: 'Currency', rarity: 'Uncommon' },
];

const achievements = [
  { id: 1, name: 'Dragon Slayer', description: 'Defeat your first dragon', completed: true, reward: '100 TRN' },
  { id: 2, name: 'Treasure Hunter', description: 'Complete 5 exploration quests', completed: true, reward: '50 TRN' },
  { id: 3, name: 'Master Crafter', description: 'Craft 10 epic items', completed: false, progress: 6, total: 10, reward: '200 TRN' },
  { id: 4, name: 'Realm Champion', description: 'Reach level 20', completed: false, progress: 15, total: 20, reward: '500 TRN' },
];

const Game: React.FC = () => {
  const [activeTab, setActiveTab] = useState('quests');
  const [selectedQuest, setSelectedQuest] = useState<number | null>(null);

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
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Game World</h1>
            <p className="text-light-400">Embark on quests, earn rewards, and build your character</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="badge-primary px-3 py-1.5 flex items-center">
              <Star size={16} className="mr-1" />
              <span>Level {characterStats.level}</span>
            </div>
            <div className="hidden md:flex badge-secondary px-3 py-1.5 items-center">
              <Sparkles size={16} className="mr-1" />
              <span>{characterStats.xp} XP</span>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="card">
        <div className="flex flex-wrap border-b border-dark-600 mb-6">
          <button 
            className={`tab ${activeTab === 'quests' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('quests')}
          >
            Quests
          </button>
          <button 
            className={`tab ${activeTab === 'character' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('character')}
          >
            Character
          </button>
          <button 
            className={`tab ${activeTab === 'inventory' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('inventory')}
          >
            Inventory
          </button>
          <button 
            className={`tab ${activeTab === 'achievements' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('achievements')}
          >
            Achievements
          </button>
        </div>

        {activeTab === 'quests' && (
          <div>
            {selectedQuest === null ? (
              <QuestList quests={quests} onSelectQuest={setSelectedQuest} />
            ) : (
              <QuestDetail quest={quests.find(q => q.id === selectedQuest)!} onBack={() => setSelectedQuest(null)} />
            )}
          </div>
        )}
        
        {activeTab === 'character' && <CharacterTab stats={characterStats} />}
        {activeTab === 'inventory' && <InventoryTab items={inventory} />}
        {activeTab === 'achievements' && <AchievementsTab achievements={achievements} />}
      </div>
    </div>
  );
};

interface QuestListProps {
  quests: any[];
  onSelectQuest: (id: number) => void;
}

const QuestList: React.FC<QuestListProps> = ({ quests, onSelectQuest }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {quests.map((quest) => (
        <motion.div 
          key={quest.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: quest.id * 0.1 }}
          className="game-card overflow-hidden cursor-pointer group"
          onClick={() => onSelectQuest(quest.id)}
        >
          <div className="relative h-40 overflow-hidden">
            <img 
              src={quest.image} 
              alt={quest.title} 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <MapPin size={14} className="text-light-400 mr-1" />
                  <span className="text-xs text-light-300">{quest.location}</span>
                </div>
                <div className="badge-primary">
                  {quest.difficulty}
                </div>
              </div>
              <h3 className="text-lg font-bold text-light-100 mt-1">{quest.title}</h3>
            </div>
          </div>
          <div className="p-4 bg-dark-800 bg-opacity-95">
            <p className="text-sm text-light-400 line-clamp-2 mb-3 h-10">{quest.description}</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center text-xs text-light-500">
                <Clock size={14} className="mr-1" />
                {quest.timeEstimate}
              </div>
              <div className="flex items-center">
                <span className="text-xs text-primary-400 font-medium mr-1">View Quest</span>
                <ArrowRight size={14} className="text-primary-400 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

interface QuestDetailProps {
  quest: any;
  onBack: () => void;
}

const QuestDetail: React.FC<QuestDetailProps> = ({ quest, onBack }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <button 
        onClick={onBack}
        className="flex items-center text-light-400 hover:text-light-100 mb-4"
      >
        <ArrowRight size={16} className="rotate-180 mr-1" />
        <span>Back to Quests</span>
      </button>
      
      <div className="relative rounded-xl overflow-hidden h-60 md:h-80 mb-6">
        <img 
          src={quest.image} 
          alt={quest.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            <div className="badge-primary flex items-center">
              <MapPin size={14} className="mr-1" />
              {quest.location}
            </div>
            <div className="badge-secondary flex items-center">
              <Sword size={14} className="mr-1" />
              {quest.difficulty}
            </div>
            <div className="badge-accent flex items-center">
              <Clock size={14} className="mr-1" />
              {quest.timeEstimate}
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">{quest.title}</h1>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="card-glass p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Quest Description</h2>
            <p className="text-light-400 mb-6">{quest.description}</p>
            
            <h3 className="text-lg font-medium mb-3">Objectives</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center p-3 bg-dark-700 rounded-md">
                <div className="h-6 w-6 rounded-full bg-primary-500 bg-opacity-20 flex items-center justify-center text-primary-400 mr-3">1</div>
                <span>Travel to {quest.location}</span>
              </div>
              <div className="flex items-center p-3 bg-dark-700 rounded-md">
                <div className="h-6 w-6 rounded-full bg-primary-500 bg-opacity-20 flex items-center justify-center text-primary-400 mr-3">2</div>
                <span>Explore the area and find the entrance</span>
              </div>
              <div className="flex items-center p-3 bg-dark-700 rounded-md">
                <div className="h-6 w-6 rounded-full bg-primary-500 bg-opacity-20 flex items-center justify-center text-primary-400 mr-3">3</div>
                <span>Defeat the guardians</span>
              </div>
              <div className="flex items-center p-3 bg-dark-700 rounded-md">
                <div className="h-6 w-6 rounded-full bg-primary-500 bg-opacity-20 flex items-center justify-center text-primary-400 mr-3">4</div>
                <span>Retrieve the target item</span>
              </div>
            </div>
            
            <h3 className="text-lg font-medium mb-3">Requirements</h3>
            <div className="space-y-2 mb-6">
              <div className="flex items-center">
                <Shield size={16} className="text-light-400 mr-2" />
                <span>Minimum Level: 10</span>
              </div>
              <div className="flex items-center">
                <Skull size={16} className="text-light-400 mr-2" />
                <span>Combat Skill: Medium</span>
              </div>
            </div>
            
            <button className="btn-primary w-full">
              Start Quest
            </button>
          </div>
        </div>
        
        <div>
          <div className="card-glass p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Rewards</h2>
            <div className="space-y-4">
              {quest.rewards.map((reward: any, index: number) => (
                <div key={index} className="flex items-center p-3 bg-dark-700 rounded-md">
                  {reward.type === 'token' && (
                    <div className="h-10 w-10 rounded-full bg-primary-500 bg-opacity-20 flex items-center justify-center text-primary-400 mr-3">
                      <Sparkles size={20} />
                    </div>
                  )}
                  {reward.type === 'xp' && (
                    <div className="h-10 w-10 rounded-full bg-secondary-500 bg-opacity-20 flex items-center justify-center text-secondary-400 mr-3">
                      <Star size={20} />
                    </div>
                  )}
                  {(reward.type === 'item' || reward.type === 'nft') && (
                    <div className="h-10 w-10 rounded-full bg-accent-500 bg-opacity-20 flex items-center justify-center text-accent-400 mr-3">
                      <Award size={20} />
                    </div>
                  )}
                  <div>
                    <p className="font-medium">{reward.amount || reward.name}</p>
                    <p className="text-xs text-light-500">
                      {reward.type === 'token' && 'Token Reward'}
                      {reward.type === 'xp' && 'Experience Points'}
                      {reward.type === 'item' && 'Item Reward'}
                      {reward.type === 'nft' && 'NFT Reward'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="card-glass p-6">
            <h2 className="text-xl font-bold mb-4">Quest Info</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-light-400">Difficulty:</span>
                <span className="font-medium">{quest.difficulty}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-light-400">Time Estimate:</span>
                <span className="font-medium">{quest.timeEstimate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-light-400">Location:</span>
                <span className="font-medium">{quest.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-light-400">Success Rate:</span>
                <span className="font-medium text-success-400">85%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-light-400">Players Completed:</span>
                <span className="font-medium">2,487</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface CharacterTabProps {
  stats: any;
}

const CharacterTab: React.FC<CharacterTabProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-1">
        <div className="card-glass p-6 mb-6">
          <div className="text-center mb-4">
            <div className="h-24 w-24 mx-auto bg-primary-500 bg-opacity-20 rounded-full flex items-center justify-center mb-3">
              <img 
                src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200" 
                alt="Character" 
                className="h-20 w-20 rounded-full object-cover"
              />
            </div>
            <h2 className="text-xl font-bold gradient-text">Aetherian</h2>
            <p className="text-light-400">Level {stats.level} {stats.class}</p>
          </div>
          
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-light-400">XP</span>
              <span>{stats.xp} / {stats.xpToNextLevel}</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-bar-fill bg-secondary-500" 
                style={{ width: `${(stats.xp / stats.xpToNextLevel) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-light-400">Quests Completed</span>
              <span>24</span>
            </div>
            <div className="flex justify-between">
              <span className="text-light-400">TRN Earned</span>
              <span>845.25</span>
            </div>
            <div className="flex justify-between">
              <span className="text-light-400">NFTs Collected</span>
              <span>7</span>
            </div>
          </div>
        </div>
        
        <div className="card p-6">
          <h2 className="text-xl font-bold mb-4">Base Stats</h2>
          <div className="space-y-4">
            <StatBar label="Strength" value={stats.stats.strength} maxValue={50} color="primary" />
            <StatBar label="Dexterity" value={stats.stats.dexterity} maxValue={50} color="secondary" />
            <StatBar label="Intelligence" value={stats.stats.intelligence} maxValue={50} color="accent" />
            <StatBar label="Constitution" value={stats.stats.constitution} maxValue={50} color="success" />
          </div>
        </div>
      </div>
      
      <div className="md:col-span-2">
        <div className="card p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Equipment</h2>
          <div className="space-y-4">
            {stats.equipment.map((item: any, index: number) => (
              <div key={index} className="flex items-start p-4 bg-dark-700 rounded-lg">
                <div className="h-12 w-12 rounded bg-dark-500 flex items-center justify-center mr-4">
                  {item.slot === 'Weapon' && <Sword size={24} className="text-primary-400" />}
                  {item.slot === 'Armor' && <Shield size={24} className="text-secondary-400" />}
                  {item.slot === 'Accessory' && <Sparkles size={24} className="text-accent-400" />}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-light-400">{item.slot}</p>
                    </div>
                    <RarityBadge rarity={item.rarity} />
                  </div>
                  <p className="text-sm text-success-400 mt-1">{item.bonus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="card p-6">
          <h2 className="text-xl font-bold mb-4">Character Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SkillCard 
              name="Arcane Surge" 
              description="Channel arcane energy to unleash a powerful magical attack"
              cooldown="30s"
              type="Offensive"
              element="Arcane"
            />
            <SkillCard 
              name="Blade Dance" 
              description="Perform a series of rapid strikes with your blade"
              cooldown="20s"
              type="Offensive"
              element="Physical"
            />
            <SkillCard 
              name="Runic Shield" 
              description="Create a protective barrier that absorbs damage"
              cooldown="45s"
              type="Defensive"
              element="Arcane"
            />
            <SkillCard 
              name="Void Step" 
              description="Teleport a short distance to avoid attacks or close gaps"
              cooldown="15s"
              type="Utility"
              element="Void"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface StatBarProps {
  label: string;
  value: number;
  maxValue: number;
  color: 'primary' | 'secondary' | 'accent' | 'success';
}

const StatBar: React.FC<StatBarProps> = ({ label, value, maxValue, color }) => {
  const percentage = (value / maxValue) * 100;
  
  const colorClass = 
    color === 'primary' ? 'bg-primary-500' : 
    color === 'secondary' ? 'bg-secondary-500' : 
    color === 'accent' ? 'bg-accent-500' : 
    'bg-success-500';
  
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm text-light-400">{label}</span>
        <span className="text-sm">{value}/{maxValue}</span>
      </div>
      <div className="progress-bar">
        <div className={`progress-bar-fill ${colorClass}`} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

interface RarityBadgeProps {
  rarity: string;
}

const RarityBadge: React.FC<RarityBadgeProps> = ({ rarity }) => {
  let bgColor = '';
  let textColor = '';
  
  switch (rarity) {
    case 'Common':
      bgColor = 'bg-light-500';
      textColor = 'text-dark-900';
      break;
    case 'Uncommon':
      bgColor = 'bg-success-500';
      textColor = 'text-dark-900';
      break;
    case 'Rare':
      bgColor = 'bg-secondary-500';
      textColor = 'text-dark-900';
      break;
    case 'Epic':
      bgColor = 'bg-primary-500';
      textColor = 'text-light-100';
      break;
    case 'Legendary':
      bgColor = 'bg-accent-500';
      textColor = 'text-dark-900';
      break;
    default:
      bgColor = 'bg-light-500';
      textColor = 'text-dark-900';
  }
  
  return (
    <span className={`px-2 py-1 rounded text-xs font-medium ${bgColor} ${textColor}`}>
      {rarity}
    </span>
  );
};

interface SkillCardProps {
  name: string;
  description: string;
  cooldown: string;
  type: string;
  element: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, description, cooldown, type, element }) => {
  let elementColor = '';
  
  switch (element) {
    case 'Arcane':
      elementColor = 'text-primary-400';
      break;
    case 'Physical':
      elementColor = 'text-light-300';
      break;
    case 'Void':
      elementColor = 'text-secondary-400';
      break;
    default:
      elementColor = 'text-light-300';
  }
  
  return (
    <div className="p-4 bg-dark-700 rounded-lg">
      <h3 className="font-medium mb-1">{name}</h3>
      <p className="text-sm text-light-400 mb-2">{description}</p>
      <div className="flex justify-between text-xs">
        <span className="text-light-500">{type}</span>
        <span className={elementColor}>{element}</span>
        <span className="text-light-500">CD: {cooldown}</span>
      </div>
    </div>
  );
};

interface InventoryTabProps {
  items: any[];
}

const InventoryTab: React.FC<InventoryTabProps> = ({ items }) => {
  return (
    <div>
      <div className="flex justify-between mb-6">
        <h2 className="text-xl font-bold">Your Inventory</h2>
        <div className="flex items-center space-x-2">
          <select className="select text-sm">
            <option>All Items</option>
            <option>Consumables</option>
            <option>Materials</option>
            <option>Currency</option>
          </select>
          <select className="select text-sm">
            <option>Sort by Rarity</option>
            <option>Sort by Name</option>
            <option>Sort by Type</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: item.id * 0.1 }}
            className="card-glass p-4 hover:shadow-neon-hover transition-all duration-300"
          >
            <div className="flex items-center">
              <div className="h-12 w-12 rounded bg-dark-700 flex items-center justify-center mr-3">
                {item.type === 'Consumable' && <div className="h-8 w-8 rounded-full bg-success-500 bg-opacity-20 flex items-center justify-center text-success-400"><Sparkles size={18} /></div>}
                {item.type === 'Material' && <div className="h-8 w-8 rounded-full bg-primary-500 bg-opacity-20 flex items-center justify-center text-primary-400"><Shield size={18} /></div>}
                {item.type === 'Currency' && <div className="h-8 w-8 rounded-full bg-accent-500 bg-opacity-20 flex items-center justify-center text-accent-400"><Award size={18} /></div>}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium">{item.name}</h3>
                  <span className="text-sm text-light-300">{item.quantity}x</span>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <div className="flex items-center">
                    <span className="text-xs text-light-500 mr-2">{item.type}</span>
                    <RarityBadge rarity={item.rarity} />
                  </div>
                  <button className="text-xs text-primary-400 hover:text-primary-300">Use</button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">NFT Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="game-card">
            <img 
              src="https://images.pexels.com/photos/6498991/pexels-photo-6498991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Dragon Scale NFT" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4 bg-dark-800">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">Dragon Scale</h3>
                <RarityBadge rarity="Epic" />
              </div>
              <p className="text-sm text-light-400 mb-3">A rare scale from the Void Dragon, it emits a faint purple glow.</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-light-500">Obtained from: Dragon's Lair Quest</span>
                <button className="text-xs text-primary-400 hover:text-primary-300">View</button>
              </div>
            </div>
          </div>
          
          <div className="game-card">
            <img 
              src="https://images.pexels.com/photos/7267852/pexels-photo-7267852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Legendary Sword NFT" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4 bg-dark-800">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">Runic Blade</h3>
                <RarityBadge rarity="Legendary" />
              </div>
              <p className="text-sm text-light-400 mb-3">An ancient blade inscribed with powerful runes that enhance magical abilities.</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-light-500">Obtained from: DeFi Staking Reward</span>
                <button className="text-xs text-primary-400 hover:text-primary-300">View</button>
              </div>
            </div>
          </div>
          
          <div className="game-card">
            <img 
              src="https://images.pexels.com/photos/5745762/pexels-photo-5745762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Crystal Amulet NFT" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4 bg-dark-800">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">Amulet of the Void</h3>
                <RarityBadge rarity="Legendary" />
              </div>
              <p className="text-sm text-light-400 mb-3">A mysterious amulet that allows the wearer to harness the powers of the void.</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-light-500">Obtained from: Bridge Transaction Bonus</span>
                <button className="text-xs text-primary-400 hover:text-primary-300">View</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface AchievementsTabProps {
  achievements: any[];
}

const AchievementsTab: React.FC<AchievementsTabProps> = ({ achievements }) => {
  return (
    <div>
      <div className="flex justify-between mb-6">
        <h2 className="text-xl font-bold">Achievements</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-light-400">Completed: 2/10</span>
        </div>
      </div>
      
      <div className="space-y-4">
        {achievements.map((achievement) => (
          <motion.div 
            key={achievement.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: achievement.id * 0.1 }}
            className={`card p-6 ${achievement.completed ? 'border border-success-500 border-opacity-50' : ''}`}
          >
            <div className="flex items-start">
              <div className={`h-12 w-12 rounded-full ${achievement.completed ? 'bg-success-500' : 'bg-dark-600'} bg-opacity-20 flex items-center justify-center mr-4`}>
                {achievement.completed ? (
                  <Award size={24} className="text-success-400" />
                ) : (
                  <Award size={24} className="text-light-500" />
                )}
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="font-medium">{achievement.name}</h3>
                  <span className={`text-sm ${achievement.completed ? 'text-success-400' : 'text-light-500'}`}>
                    {achievement.completed ? 'Completed' : 'In Progress'}
                  </span>
                </div>
                
                <p className="text-sm text-light-400 mb-3">{achievement.description}</p>
                
                {!achievement.completed && achievement.progress !== undefined && (
                  <div className="mb-3">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-light-500">Progress</span>
                      <span>{achievement.progress}/{achievement.total}</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-bar-fill bg-primary-500" 
                        style={{ width: `${(achievement.progress / achievement.total) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                )}
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-light-500">Reward: {achievement.reward}</span>
                  {achievement.completed && (
                    <button className="text-sm text-primary-400 hover:text-primary-300">Share</button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Game;