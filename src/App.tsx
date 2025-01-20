import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import GamifiedGiving from './pages/GamifiedGiving';
import Donate from './pages/Donate';
import SmartContracts from './pages/SmartContracts';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <nav className="bg-white/80 backdrop-blur-sm shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center px-2 py-2 text-blue-900 font-bold text-lg">
                HealthcareFund
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link
                to="/gamified-giving"
                className="inline-flex items-center px-3 py-2 text-gray-700 hover:text-blue-900"
              >
                Gamified Giving
              </Link>
              <Link
                to="/smart-contracts"
                className="inline-flex items-center px-3 py-2 text-gray-700 hover:text-blue-900"
              >
                Impact Reports
              </Link>
              <Link
                to="/donate"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gamified-giving" element={<GamifiedGiving />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/smart-contracts" element={<SmartContracts />} />
      </Routes>
    </div>
  );
}

export default App;