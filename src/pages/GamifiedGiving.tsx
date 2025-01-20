import React, { useState } from 'react';
import { Trophy, Award, Target, Star, Gift, Users, Sparkles, Heart, Globe } from 'lucide-react';

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  progress: number;
  unlocked: boolean;
}

interface LeaderboardEntry {
  rank: number;
  name: string;
  amount: number;
  badges: number;
  avatar: string;
}

function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

function BadgeCard({ badge }: { badge: Badge }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className={`relative bg-white p-6 rounded-xl shadow-lg transition-all duration-300 cursor-pointer
        ${badge.unlocked ? 'hover:shadow-xl' : 'opacity-75 grayscale'}`}
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      <div className="flex items-center justify-center mb-4">
        <div className={`p-4 rounded-full ${badge.unlocked ? 'bg-blue-100' : 'bg-gray-100'}`}>
          {badge.icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-center mb-2">{badge.name}</h3>
      <ProgressBar progress={badge.progress} />
      
      {showDetails && (
        <div className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-xl p-4 flex items-center justify-center text-center">
          <div>
            <p className="text-gray-700 mb-2">{badge.description}</p>
            <p className="text-blue-600 font-semibold">
              Progress: {badge.progress}%
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function LeaderboardCard({ entry }: { entry: LeaderboardEntry }) {
  return (
    <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
      <div className="flex-shrink-0 w-12 text-2xl font-bold text-blue-600 text-center">
        #{entry.rank}
      </div>
      <img
        src={entry.avatar}
        alt={entry.name}
        className="w-12 h-12 rounded-full"
      />
      <div className="flex-grow">
        <h3 className="font-semibold text-gray-900">{entry.name}</h3>
        <p className="text-sm text-gray-500">
          {entry.badges} badges earned
        </p>
      </div>
      <div className="text-right">
        <p className="font-bold text-blue-600">${entry.amount.toLocaleString()}</p>
        <p className="text-sm text-gray-500">contributed</p>
      </div>
    </div>
  );
}

function GamifiedGiving() {
  const badges: Badge[] = [
    {
      id: '1',
      name: 'First Impact',
      description: 'Make your first donation to a healthcare project',
      icon: <Award className="w-8 h-8 text-blue-600" />,
      progress: 100,
      unlocked: true,
    },
    {
      id: '2',
      name: 'Life Saver',
      description: 'Fund medical supplies that save 100 lives',
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      progress: 75,
      unlocked: true,
    },
    {
      id: '3',
      name: 'Global Guardian',
      description: 'Support projects in 5 different countries',
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      progress: 60,
      unlocked: true,
    },
    {
      id: '4',
      name: 'Healthcare Hero',
      description: 'Reach $10,000 in total donations',
      icon: <Trophy className="w-8 h-8 text-blue-600" />,
      progress: 30,
      unlocked: false,
    },
    {
      id: '5',
      name: 'Community Champion',
      description: 'Inspire 10 others to join the platform',
      icon: <Users className="w-8 h-8 text-blue-600" />,
      progress: 20,
      unlocked: false,
    },
    {
      id: '6',
      name: 'Impact Legend',
      description: 'Support a project from start to completion',
      icon: <Star className="w-8 h-8 text-blue-600" />,
      progress: 0,
      unlocked: false,
    },
  ];

  const leaderboard: LeaderboardEntry[] = [
    {
      rank: 1,
      name: "Sarah Johnson",
      amount: 50000,
      badges: 12,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
      rank: 2,
      name: "Michael Chen",
      amount: 35000,
      badges: 10,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    {
      rank: 3,
      name: "Emily Rodriguez",
      amount: 28000,
      badges: 8,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
    {
      rank: 4,
      name: "David Kim",
      amount: 22000,
      badges: 7,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    },
    {
      rank: 5,
      name: "Lisa Thompson",
      amount: 18000,
      badges: 6,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Gamified Giving</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Make a difference while earning rewards. Your impact matters, and we celebrate every contribution.
          </p>
        </div>
      </div>

      {/* Progress Overview */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Gift className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">$2,500</h3>
              <p className="text-gray-600">Total Contributions</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">3/6</h3>
              <p className="text-gray-600">Badges Earned</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Sparkles className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Level 5</h3>
              <p className="text-gray-600">Impact Level</p>
            </div>
          </div>
        </div>

        {/* Badges Section */}
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Impact Badges</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {badges.map((badge) => (
            <BadgeCard key={badge.id} badge={badge} />
          ))}
        </div>

        {/* Leaderboard Section */}
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Impact Leaderboard</h2>
        <div className="bg-gray-50 rounded-xl p-6">
          <div className="space-y-4">
            {leaderboard.map((entry) => (
              <LeaderboardCard key={entry.rank} entry={entry} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GamifiedGiving;