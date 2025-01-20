import React, { useState } from 'react';
import { Heart, DollarSign, Calendar, PieChart, CheckCircle } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  description: string;
  goal: number;
  raised: number;
  image: string;
}

function DonationAmount({ amount, selected, onSelect }: { amount: number; selected: boolean; onSelect: () => void }) {
  return (
    <button
      onClick={onSelect}
      className={`p-4 rounded-lg text-lg font-semibold transition-all duration-300 ${
        selected
          ? 'bg-blue-600 text-white shadow-lg scale-105'
          : 'bg-white text-gray-700 hover:bg-blue-50'
      }`}
    >
      ${amount}
    </button>
  );
}

function ProjectCard({ project, selected, onSelect }: { project: Project; selected: boolean; onSelect: () => void }) {
  const progress = (project.raised / project.goal) * 100;

  return (
    <div
      className={`bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 ${
        selected ? 'ring-2 ring-blue-600 scale-105' : 'hover:shadow-xl'
      }`}
      onClick={onSelect}
    >
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="space-y-2">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">
              ${project.raised.toLocaleString()} raised
            </span>
            <span className="text-gray-600">
              Goal: ${project.goal.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ImpactMetric({ icon: Icon, value, label }: { icon: any; value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center mb-2">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-gray-600">{label}</p>
    </div>
  );
}

function Donate() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [isRecurring, setIsRecurring] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const projects: Project[] = [
    {
      id: '1',
      name: 'Rural Medical Clinic',
      description: 'Build a fully equipped medical clinic in an underserved rural area',
      goal: 50000,
      raised: 35000,
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=400&fit=crop',
    },
    {
      id: '2',
      name: 'Medical Supplies Drive',
      description: 'Provide essential medical supplies to hospitals in need',
      goal: 25000,
      raised: 15000,
      image: 'https://images.unsplash.com/photo-1583324113626-70df0f4deaab?w=800&h=400&fit=crop',
    },
    {
      id: '3',
      name: 'Healthcare Training Program',
      description: 'Train healthcare workers in remote communities',
      goal: 35000,
      raised: 20000,
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=400&fit=crop',
    },
  ];

  const predefinedAmounts = [25, 50, 100, 250, 500, 1000];

  const handleDonate = () => {
    setShowConfirmation(true);
    // In a real application, this would handle the payment processing
  };

  return (
    <div className="pt-16">
      {showConfirmation ? (
        <div className="min-h-screen bg-gray-50 py-12">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="flex justify-center mb-6">
                <CheckCircle className="w-16 h-16 text-green-500" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Thank You for Your Donation!
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Your contribution will help make healthcare accessible to those who need it most.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <ImpactMetric
                  icon={Heart}
                  value="50+"
                  label="Lives Impacted"
                />
                <ImpactMetric
                  icon={DollarSign}
                  value={`$${selectedAmount || customAmount}`}
                  label="Contributed"
                />
                <ImpactMetric
                  icon={Calendar}
                  value={isRecurring ? 'Monthly' : 'One-time'}
                  label="Donation Type"
                />
              </div>
              <button
                onClick={() => setShowConfirmation(false)}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Make Another Donation
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Make a Difference Today</h1>
              <p className="text-xl max-w-2xl mx-auto">
                Your donation helps provide essential healthcare services to those in need.
                Every contribution counts towards building a healthier world.
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 py-12">
            {/* Impact Section */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <PieChart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">100% Impact</h3>
                  <p className="text-gray-600">
                    Every dollar goes directly to healthcare projects
                  </p>
                </div>
                <div className="text-center">
                  <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Save Lives</h3>
                  <p className="text-gray-600">
                    Provide essential medical care to those in need
                  </p>
                </div>
                <div className="text-center">
                  <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Sustainable Change</h3>
                  <p className="text-gray-600">
                    Create lasting impact with recurring donations
                  </p>
                </div>
              </div>
            </div>

            {/* Projects Section */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose a Project</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  selected={selectedProject === project.id}
                  onSelect={() => setSelectedProject(project.id)}
                />
              ))}
            </div>

            {/* Donation Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Make Your Donation</h2>
              
              {/* Predefined Amounts */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
                {predefinedAmounts.map((amount) => (
                  <DonationAmount
                    key={amount}
                    amount={amount}
                    selected={selectedAmount === amount}
                    onSelect={() => {
                      setSelectedAmount(amount);
                      setCustomAmount('');
                    }}
                  />
                ))}
              </div>

              {/* Custom Amount */}
              <div className="mb-6">
                <label htmlFor="custom-amount" className="block text-sm font-medium text-gray-700 mb-2">
                  Custom Amount
                </label>
                <div className="relative">
                  <div className="absolute in set-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <DollarSign className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="custom-amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    className="pl-10 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter custom amount"
                  />
                </div>
              </div>

              {/* Recurring Donation Toggle */}
              <div className="flex items-center mb-8">
                <input
                  type="checkbox"
                  id="recurring"
                  checked={isRecurring}
                  onChange={(e) => setIsRecurring(e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="recurring" className="ml-2 block text-sm text-gray-700">
                  Make this a monthly donation
                </label>
              </div>

              {/* Donation Button */}
              <button
                onClick={handleDonate}
                disabled={!selectedProject || (!selectedAmount && !customAmount)}
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Complete Donation
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Donate;