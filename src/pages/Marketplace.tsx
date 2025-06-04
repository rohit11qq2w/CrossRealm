import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ShoppingBag, Clock, Award, Sparkles, Grid, List } from 'lucide-react';

// Mock data
const nftItems = [
  {
    id: 1,
    name: 'Mystic Dragon Scale',
    description: 'A rare scale from the ancient void dragon that enhances magical abilities',
    price: '250 TRN',
    seller: '0x1a2b...3c4d',
    type: 'Game Item',
    rarity: 'Epic',
    image: 'https://images.pexels.com/photos/6498991/pexels-photo-6498991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    name: 'Void Sword',
    description: 'A legendary sword forged in the void that deals extra damage to ethereal enemies',
    price: '1000 TRN',
    seller: '0x4e5f...6g7h',
    type: 'Weapon',
    rarity: 'Legendary',
    image: 'https://images.pexels.com/photos/7267852/pexels-photo-7267852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    name: 'Crystal Amulet',
    description: 'An amulet made from pure crystal that increases mana regeneration',
    price: '350 TRN',
    seller: '0x8i9j...0k1l',
    type: 'Accessory',
    rarity: 'Rare',
    image: 'https://images.pexels.com/photos/5745762/pexels-photo-5745762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 4,
    name: 'Ethereal Wings',
    description: 'Magical wings that allow the wearer to float and move faster',
    price: '500 TRN',
    seller: '0x2m3n...4o5p',
    type: 'Accessory',
    rarity: 'Epic',
    image: 'https://images.pexels.com/photos/3848158/pexels-photo-3848158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 5,
    name: 'Arcane Spellbook',
    description: 'An ancient book containing powerful spells and arcane knowledge',
    price: '450 TRN',
    seller: '0x6q7r...8s9t',
    type: 'Game Item',
    rarity: 'Epic',
    image: 'https://images.pexels.com/photos/5865312/pexels-photo-5865312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 6,
    name: 'Dragon Mount',
    description: 'A majestic dragon that can be used as a mount in the game world',
    price: '2000 TRN',
    seller: '0xau0v...wx1y',
    type: 'Mount',
    rarity: 'Legendary',
    image: 'https://images.pexels.com/photos/6758663/pexels-photo-6758663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  }
];

const Marketplace: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRarity, setSelectedRarity] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const filteredItems = nftItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRarity = selectedRarity ? item.rarity === selectedRarity : true;
    const matchesType = selectedType ? item.type === selectedType : true;
    
    return matchesSearch && matchesRarity && matchesType;
  });

  const handleRarityFilter = (rarity: string) => {
    setSelectedRarity(selectedRarity === rarity ? null : rarity);
  };

  const handleTypeFilter = (type: string) => {
    setSelectedType(selectedType === type ? null : type);
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
            <h1 className="text-3xl md:text-4xl font-bold mb-2">NFT Marketplace</h1>
            <p className="text-light-400">Buy, sell, and trade unique in-game items and NFTs</p>
          </div>
          <div className="flex items-center space-x-2">
            <button className="btn-primary flex items-center">
              <ShoppingBag size={16} className="mr-2" />
              My Collection
            </button>
          </div>
        </div>
      </motion.div>

      {selectedItem === null ? (
        <>
          <div className="card p-6">
            <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
              <div className="relative flex-grow md:max-w-md">
                <input
                  type="text"
                  placeholder="Search items..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input pl-10 w-full"
                />
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-light-500" />
              </div>
              
              <div className="flex items-center space-x-2">
                <button 
                  className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-primary-500 bg-opacity-20 text-primary-400' : 'bg-dark-700 text-light-400'}`}
                  onClick={() => setViewMode('grid')}
                >
                  <Grid size={20} />
                </button>
                <button 
                  className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-primary-500 bg-opacity-20 text-primary-400' : 'bg-dark-700 text-light-400'}`}
                  onClick={() => setViewMode('list')}
                >
                  <List size={20} />
                </button>
                <button className="p-2 rounded-md bg-dark-700 text-light-400 flex items-center">
                  <Filter size={20} />
                </button>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <button
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  selectedRarity === 'Common' ? 'bg-light-500 text-dark-900' : 'bg-dark-700 text-light-400'
                }`}
                onClick={() => handleRarityFilter('Common')}
              >
                Common
              </button>
              <button
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  selectedRarity === 'Uncommon' ? 'bg-success-500 text-dark-900' : 'bg-dark-700 text-light-400'
                }`}
                onClick={() => handleRarityFilter('Uncommon')}
              >
                Uncommon
              </button>
              <button
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  selectedRarity === 'Rare' ? 'bg-secondary-500 text-dark-900' : 'bg-dark-700 text-light-400'
                }`}
                onClick={() => handleRarityFilter('Rare')}
              >
                Rare
              </button>
              <button
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  selectedRarity === 'Epic' ? 'bg-primary-500 text-light-100' : 'bg-dark-700 text-light-400'
                }`}
                onClick={() => handleRarityFilter('Epic')}
              >
                Epic
              </button>
              <button
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  selectedRarity === 'Legendary' ? 'bg-accent-500 text-dark-900' : 'bg-dark-700 text-light-400'
                }`}
                onClick={() => handleRarityFilter('Legendary')}
              >
                Legendary
              </button>
              
              <div className="w-px h-6 bg-dark-600 mx-1 self-center"></div>
              
              <button
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  selectedType === 'Game Item' ? 'bg-primary-500 bg-opacity-20 text-primary-400' : 'bg-dark-700 text-light-400'
                }`}
                onClick={() => handleTypeFilter('Game Item')}
              >
                Game Item
              </button>
              <button
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  selectedType === 'Weapon' ? 'bg-primary-500 bg-opacity-20 text-primary-400' : 'bg-dark-700 text-light-400'
                }`}
                onClick={() => handleTypeFilter('Weapon')}
              >
                Weapon
              </button>
              <button
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  selectedType === 'Accessory' ? 'bg-primary-500 bg-opacity-20 text-primary-400' : 'bg-dark-700 text-light-400'
                }`}
                onClick={() => handleTypeFilter('Accessory')}
              >
                Accessory
              </button>
              <button
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  selectedType === 'Mount' ? 'bg-primary-500 bg-opacity-20 text-primary-400' : 'bg-dark-700 text-light-400'
                }`}
                onClick={() => handleTypeFilter('Mount')}
              >
                Mount
              </button>
            </div>

            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredItems.map((item) => (
                  <NFTGridCard key={item.id} item={item} onClick={() => setSelectedItem(item.id)} />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredItems.map((item) => (
                  <NFTListCard key={item.id} item={item} onClick={() => setSelectedItem(item.id)} />
                ))}
              </div>
            )}
          </div>
          
          <div className="card p-6">
            <h2 className="text-xl font-bold mb-4">Hot Collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <CollectionCard
                name="Dragon Hunter Set"
                items={5}
                floorPrice="1,500 TRN"
                image="https://images.pexels.com/photos/6498991/pexels-photo-6498991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
              <CollectionCard
                name="Void Mage Artifacts"
                items={7}
                floorPrice="850 TRN"
                image="https://images.pexels.com/photos/5745762/pexels-photo-5745762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
              <CollectionCard
                name="Legendary Mounts"
                items={3}
                floorPrice="2,000 TRN"
                image="https://images.pexels.com/photos/6758663/pexels-photo-6758663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </div>
          </div>
        </>
      ) : (
        <NFTDetailView item={nftItems.find(item => item.id === selectedItem)!} onBack={() => setSelectedItem(null)} />
      )}
    </div>
  );
};

interface NFTGridCardProps {
  item: any;
  onClick: () => void;
}

const NFTGridCard: React.FC<NFTGridCardProps> = ({ item, onClick }) => {
  let rarityColorClass = '';
  
  switch (item.rarity) {
    case 'Common':
      rarityColorClass = 'border-light-500';
      break;
    case 'Uncommon':
      rarityColorClass = 'border-success-500';
      break;
    case 'Rare':
      rarityColorClass = 'border-secondary-500';
      break;
    case 'Epic':
      rarityColorClass = 'border-primary-500';
      break;
    case 'Legendary':
      rarityColorClass = 'border-accent-500';
      break;
    default:
      rarityColorClass = 'border-light-500';
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: item.id * 0.05 }}
      className={`card-glass border-2 ${rarityColorClass} overflow-hidden cursor-pointer hover:shadow-neon-hover hover:-translate-y-1 transition-all duration-300`}
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2">
          <span className={`px-2 py-0.5 rounded text-xs font-medium ${
            item.rarity === 'Common' ? 'bg-light-500 text-dark-900' :
            item.rarity === 'Uncommon' ? 'bg-success-500 text-dark-900' :
            item.rarity === 'Rare' ? 'bg-secondary-500 text-dark-900' :
            item.rarity === 'Epic' ? 'bg-primary-500 text-light-100' :
            'bg-accent-500 text-dark-900'
          }`}>
            {item.rarity}
          </span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium truncate">{item.name}</h3>
          <span className="text-xs bg-dark-700 px-1.5 py-0.5 rounded">{item.type}</span>
        </div>
        <p className="text-sm text-light-400 line-clamp-2 h-10 mb-3">{item.description}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Sparkles size={14} className="text-primary-400 mr-1" />
            <span className="text-sm font-medium">{item.price}</span>
          </div>
          <button className="text-xs text-primary-400 hover:text-primary-300">View</button>
        </div>
      </div>
    </motion.div>
  );
};

interface NFTListCardProps {
  item: any;
  onClick: () => void;
}

const NFTListCard: React.FC<NFTListCardProps> = ({ item, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: item.id * 0.05 }}
      className="card-glass overflow-hidden cursor-pointer hover:shadow-neon-hover transition-all duration-300"
      onClick={onClick}
    >
      <div className="flex flex-col sm:flex-row">
        <div className="relative sm:w-48 h-40 sm:h-auto overflow-hidden">
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2">
            <span className={`px-2 py-0.5 rounded text-xs font-medium ${
              item.rarity === 'Common' ? 'bg-light-500 text-dark-900' :
              item.rarity === 'Uncommon' ? 'bg-success-500 text-dark-900' :
              item.rarity === 'Rare' ? 'bg-secondary-500 text-dark-900' :
              item.rarity === 'Epic' ? 'bg-primary-500 text-light-100' :
              'bg-accent-500 text-dark-900'
            }`}>
              {item.rarity}
            </span>
          </div>
        </div>
        <div className="p-4 flex-1">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-sm text-light-500 mb-2">Seller: {item.seller}</p>
            </div>
            <span className="text-xs bg-dark-700 px-1.5 py-0.5 rounded">{item.type}</span>
          </div>
          <p className="text-sm text-light-400 mb-4">{item.description}</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Sparkles size={16} className="text-primary-400 mr-1" />
              <span className="font-medium">{item.price}</span>
            </div>
            <button className="btn-primary py-1 px-3 text-sm">Buy Now</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface CollectionCardProps {
  name: string;
  items: number;
  floorPrice: string;
  image: string;
}

const CollectionCard: React.FC<CollectionCardProps> = ({ name, items, floorPrice, image }) => {
  return (
    <div className="card-glass overflow-hidden hover:shadow-neon-hover transition-all duration-300 cursor-pointer">
      <div className="h-36 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium mb-2">{name}</h3>
        <div className="flex justify-between text-sm">
          <div>
            <p className="text-light-500">Items</p>
            <p className="font-medium">{items}</p>
          </div>
          <div className="text-right">
            <p className="text-light-500">Floor Price</p>
            <p className="font-medium">{floorPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface NFTDetailViewProps {
  item: any;
  onBack: () => void;
}

const NFTDetailView: React.FC<NFTDetailViewProps> = ({ item, onBack }) => {
  const [isLoading, setIsLoading] = useState(false);
  
  const handlePurchase = () => {
    setIsLoading(true);
    
    // Simulate purchase processing
    setTimeout(() => {
      setIsLoading(false);
      onBack();
    }, 2000);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="card p-6"
    >
      <button 
        onClick={onBack}
        className="flex items-center text-light-400 hover:text-light-100 mb-6"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        <span>Back to Marketplace</span>
      </button>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="card-glass p-2 mb-6">
            <div className="relative">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  item.rarity === 'Common' ? 'bg-light-500 text-dark-900' :
                  item.rarity === 'Uncommon' ? 'bg-success-500 text-dark-900' :
                  item.rarity === 'Rare' ? 'bg-secondary-500 text-dark-900' :
                  item.rarity === 'Epic' ? 'bg-primary-500 text-light-100' :
                  'bg-accent-500 text-dark-900'
                }`}>
                  {item.rarity}
                </span>
              </div>
            </div>
          </div>
          
          <div className="card p-6">
            <h3 className="text-lg font-medium mb-3">Item Properties</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-dark-700 rounded-lg text-center">
                <p className="text-xs text-light-500 mb-1">Type</p>
                <p className="font-medium">{item.type}</p>
              </div>
              <div className="p-3 bg-dark-700 rounded-lg text-center">
                <p className="text-xs text-light-500 mb-1">Rarity</p>
                <p className="font-medium">{item.rarity}</p>
              </div>
              <div className="p-3 bg-dark-700 rounded-lg text-center">
                <p className="text-xs text-light-500 mb-1">Level Requirement</p>
                <p className="font-medium">10</p>
              </div>
              <div className="p-3 bg-dark-700 rounded-lg text-center">
                <p className="text-xs text-light-500 mb-1">Durability</p>
                <p className="font-medium">100/100</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="card p-6 mb-6">
            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-2xl font-bold">{item.name}</h2>
                <span className="badge-primary">{item.type}</span>
              </div>
              <p className="text-light-400 mb-4">{item.description}</p>
              <p className="text-sm text-light-500">Seller: {item.seller}</p>
            </div>
            
            <div className="border-t border-dark-600 pt-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-sm text-light-400">Current Price</p>
                  <div className="flex items-center">
                    <Sparkles size={20} className="text-primary-400 mr-2" />
                    <p className="text-3xl font-bold">{item.price}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-light-400 text-right">Time Left</p>
                  <div className="flex items-center">
                    <Clock size={20} className="text-light-400 mr-2" />
                    <p className="text-lg">23 hours</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <button 
                  className="btn-primary w-full flex items-center justify-center"
                  onClick={handlePurchase}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin h-5 w-5 border-2 border-light-100 border-t-transparent rounded-full mr-2"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={18} className="mr-2" />
                      Buy Now
                    </>
                  )}
                </button>
                <button className="btn-outline w-full">
                  Make Offer
                </button>
              </div>
            </div>
          </div>
          
          <div className="card p-6">
            <h3 className="text-lg font-medium mb-4">Item Details</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <p className="text-light-400">Token ID</p>
                <p className="font-medium">#{item.id}000{item.id}{item.id}2</p>
              </div>
              <div className="flex justify-between">
                <p className="text-light-400">Contract</p>
                <p className="font-medium truncate max-w-[200px]">0x1234...5678</p>
              </div>
              <div className="flex justify-between">
                <p className="text-light-400">Token Standard</p>
                <p className="font-medium">TRN-721</p>
              </div>
              <div className="flex justify-between">
                <p className="text-light-400">Blockchain</p>
                <p className="font-medium">The Root Network</p>
              </div>
            </div>
            
            <h3 className="text-lg font-medium mt-6 mb-4">Game Stats</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-light-400">Magic Power</span>
                  <span>+25</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-bar-fill bg-primary-500" style={{ width: '65%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-light-400">Defense</span>
                  <span>+15</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-bar-fill bg-secondary-500" style={{ width: '45%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-light-400">Rarity Bonus</span>
                  <span>+10% XP</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-bar-fill bg-accent-500" style={{ width: '30%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Marketplace;