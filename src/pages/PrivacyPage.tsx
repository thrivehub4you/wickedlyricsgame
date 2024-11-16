import React from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <Shield className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-xl text-gray-600">Last updated: March 2024</p>
      </div>

      <div className="prose prose-lg max-w-none">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Lock className="h-6 w-6 text-indigo-600" />
            <h2 className="text-2xl font-bold text-gray-900 m-0">Data Collection and Usage</h2>
          </div>
          <p>We collect and process the following information:</p>
          <ul>
            <li>Account information (username, email)</li>
            <li>Game statistics and performance data</li>
            <li>Device information and IP address</li>
            <li>Cookies and usage data</li>
          </ul>
          <p>This information helps us provide and improve our services, personalize your experience, and maintain game security.</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Eye className="h-6 w-6 text-indigo-600" />
            <h2 className="text-2xl font-bold text-gray-900 m-0">Data Sharing and Protection</h2>
          </div>
          <p>We do not sell your personal information. Your data may be shared with:</p>
          <ul>
            <li>Service providers who assist in operating our platform</li>
            <li>Analytics partners to improve our services</li>
            <li>Law enforcement when required by law</li>
          </ul>
          <p>We implement industry-standard security measures to protect your data.</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <FileText className="h-6 w-6 text-indigo-600" />
            <h2 className="text-2xl font-bold text-gray-900 m-0">Your Rights</h2>
          </div>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Request data correction or deletion</li>
            <li>Opt-out of marketing communications</li>
            <li>Data portability</li>
          </ul>
          <p>Contact us at privacy@wickedlyrics.game for any privacy-related concerns.</p>
        </div>
      </div>
    </div>
  );
}