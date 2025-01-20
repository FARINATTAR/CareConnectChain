import React, { useState } from 'react';
import {
  Milestone,
  CircleDot,
  CheckCircle2,
  Clock,
  ArrowRight,
  Users,
  Building2,
  Syringe,
  DollarSign,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  FileText,
  PieChart,
  Activity,
  HeartPulse
} from 'lucide-react';

interface ProjectMilestone {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'approved' | 'released';
  progress: number;
  date: string;
  amount: number;
}

interface FundCategory {
  category: string;
  amount: number;
  percentage: number;
  icon: React.ReactNode;
}

interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
  location: string;
}

function StatusBadge({ status }: { status: ProjectMilestone['status'] }) {
  const statusConfig = {
    pending: {
      color: 'bg-yellow-100 text-yellow-800',
      icon: Clock,
    },
    approved: {
      color: 'bg-blue-100 text-blue-800',
      icon: CircleDot,
    },
    released: {
      color: 'bg-green-100 text-green-800',
      icon: CheckCircle2,
    },
  };

  const { color, icon: Icon } = statusConfig[status];

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${color}`}>
      <Icon className="w-4 h-4 mr-1" />
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}

function MilestoneCard({ milestone }: { milestone: ProjectMilestone }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-start justify-between">
        <div className="flex-grow">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900">{milestone.title}</h3>
            <StatusBadge status={milestone.status} />
          </div>
          <p className="text-gray-600 mb-4">{milestone.description}</p>
          <div className="space-y-2">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${milestone.progress}%` }}
              />
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Progress: {milestone.progress}%</span>
              <span>${milestone.amount.toLocaleString()}</span>
            </div>
          </div>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="ml-4 text-gray-400 hover:text-gray-600"
        >
          {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
      </div>
      
      {expanded && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
              <FileText className="w-4 h-4 mr-2" />
              View Contract
            </button>
            <button className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <ExternalLink className="w-4 h-4 mr-2" />
              More Details
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function FundFlow() {
  return (
    <div className="flex items-center justify-between max-w-4xl mx-auto py-8">
      <div className="text-center">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
          <Users className="w-8 h-8 text-blue-600" />
        </div>
        <p className="font-medium">Donors</p>
      </div>
      <ArrowRight className="w-6 h-6 text-gray-400" />
      <div className="text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
          <Building2 className="w-8 h-8 text-green-600" />
        </div>
        <p className="font-medium">Healthcare Providers</p>
      </div>
      <ArrowRight className="w-6 h-6 text-gray-400" />
      <div className="text-center">
        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
          <HeartPulse className="w-8 h-8 text-purple-600" />
        </div>
        <p className="font-medium">Beneficiaries</p>
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-start space-x-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
          <div>
            <p className="font-semibold text-gray-900">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
            <p className="text-sm text-gray-500">{testimonial.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SmartContracts() {
  const milestones: ProjectMilestone[] = [
    {
      id: '1',
      title: 'Medical Supplies Distribution',
      description: '10,000 vaccines delivered to rural clinics',
      status: 'released',
      progress: 100,
      date: '2024-02-15',
      amount: 50000,
    },
    {
      id: '2',
      title: 'Healthcare Staff Training',
      description: 'Training program for 50 healthcare workers',
      status: 'approved',
      progress: 75,
      date: '2024-03-01',
      amount: 30000,
    },
    {
      id: '3',
      title: 'Clinic Construction',
      description: 'Building 2 new medical facilities',
      status: 'pending',
      progress: 30,
      date: '2024-04-15',
      amount: 100000,
    },
  ];

  const fundCategories: FundCategory[] = [
    {
      category: 'Medical Supplies',
      amount: 50000,
      percentage: 40,
      icon: <Syringe className="w-6 h-6 text-blue-600" />,
    },
    {
      category: 'Infrastructure',
      amount: 35000,
      percentage: 28,
      icon: <Building2 className="w-6 h-6 text-green-600" />,
    },
    {
      category: 'Staff Training',
      amount: 25000,
      percentage: 20,
      icon: <Users className="w-6 h-6 text-purple-600" />,
    },
    {
      category: 'Operations',
      amount: 15000,
      percentage: 12,
      icon: <Activity className="w-6 h-6 text-orange-600" />,
    },
  ];

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Dr. Sarah Chen',
      role: 'Medical Director',
      quote: 'The new medical supplies have enabled us to treat 50% more patients each day.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop',
      location: 'Rural Health Clinic, Kenya',
    },
    {
      id: '2',
      name: 'James Mwangi',
      role: 'Community Health Worker',
      quote: 'The training program has given me the skills to better serve my community.',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop',
      location: 'Nairobi Medical Center',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Smart Contracts & Impact</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Track your donations and see the real impact of your contributions through transparent smart contracts and detailed reporting.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Fund Flow Diagram */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How Funds Flow</h2>
          <FundFlow />
        </div>

        {/* Milestones Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Milestones</h2>
          <div className="space-y-6">
            {milestones.map((milestone) => (
              <MilestoneCard key={milestone.id} milestone={milestone} />
            ))}
          </div>
        </div>

        {/* Fund Allocation */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Fund Allocation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fundCategories.map((category) => (
              <div key={category.category} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  {category.icon}
                  <span className="text-2xl font-bold text-gray-900">{category.percentage}%</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.category}</h3>
                <p className="text-gray-600">${category.amount.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <Syringe className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">50,000+</h3>
            <p className="text-gray-600">Patients Treated</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <Building2 className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">500</h3>
            <p className="text-gray-600">Clinics Supported</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <Users className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">90%</h3>
            <p className="text-gray-600">Villages with Healthcare Access</p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Impact Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmartContracts;