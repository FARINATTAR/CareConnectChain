import React from 'react';
import { Heart, Shield, TrendingUp, Clock, BarChart as ChartBar, Lock, Activity, Globe } from 'lucide-react';

function StatCard({ icon: Icon, title, value, description }) {
  return (
    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg">
      <div className="flex items-center gap-4 mb-3">
        <div className="p-3 bg-blue-100 rounded-lg">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-3xl font-bold text-blue-600 mb-2">{value}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div 
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Transforming Healthcare Funding
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Revolutionizing healthcare financing through blockchain transparency and smart contract automation
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg">
            Join the Solution
          </button>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">The Global Healthcare Crisis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StatCard
              icon={TrendingUp}
              title="Annual Loss"
              value="$455B"
              description="Lost annually to fraud and inefficiencies in healthcare systems"
            />
            <StatCard
              icon={Globe}
              title="Low-Income Impact"
              value="40%"
              description="Of health budgets lost to corruption in low-income countries"
            />
            <StatCard
              icon={Activity}
              title="Preventable Deaths"
              value="8.6M"
              description="Lives lost annually due to inadequate healthcare funding"
            />
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16">Our Solution</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Shield}
              title="Blockchain Security"
              description="Immutable transaction records ensuring complete transparency and accountability"
            />
            <FeatureCard
              icon={Clock}
              title="Real-time Tracking"
              description="Monitor fund allocation and impact with live dashboards and analytics"
            />
            <FeatureCard
              icon={ChartBar}
              title="Smart Automation"
              description="Automated fund release based on verified impact and performance metrics"
            />
            <FeatureCard
              icon={Heart}
              title="Gamified Giving"
              description="Engage donors through interactive impact visualization and rewards"
            />
            <FeatureCard
              icon={Lock}
              title="Secure Infrastructure"
              description="Enterprise-grade security protecting every transaction"
            />
            <FeatureCard
              icon={Activity}
              title="Impact Metrics"
              description="Comprehensive analytics showing real-world healthcare improvements"
            />
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            Join Us in Transforming Healthcare
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Be part of the solution to make healthcare funding transparent, efficient, and impactful
          </p>
          <button className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
            Get Started Now
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;