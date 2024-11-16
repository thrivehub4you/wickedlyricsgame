import React from 'react';
import { FileText, Shield, AlertCircle, HelpCircle } from 'lucide-react';

export function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <FileText className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
        <p className="text-xl text-gray-600">Last updated: March 2024</p>
      </div>

      <div className="prose prose-lg max-w-none">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Shield className="h-6 w-6 text-indigo-600" />
            <h2 className="text-2xl font-bold text-gray-900 m-0">User Agreement</h2>
          </div>
          <p>By using Wicked Lyrics Game, you agree to:</p>
          <ul>
            <li>Provide accurate registration information</li>
            <li>Maintain the security of your account</li>
            <li>Use the service for personal, non-commercial purposes</li>
            <li>Comply with all applicable laws and regulations</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <AlertCircle className="h-6 w-6 text-indigo-600" />
            <h2 className="text-2xl font-bold text-gray-900 m-0">Prohibited Activities</h2>
          </div>
          <p>Users must not:</p>
          <ul>
            <li>Use cheats, automation, or exploitation methods</li>
            <li>Harass or abuse other users</li>
            <li>Share inappropriate or offensive content</li>
            <li>Attempt to access restricted areas of the service</li>
            <li>Reverse engineer or modify the game</li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <HelpCircle className="h-6 w-6 text-indigo-600" />
            <h2 className="text-2xl font-bold text-gray-900 m-0">Additional Terms</h2>
          </div>
          <h3>Intellectual Property</h3>
          <p>All content, including but not limited to lyrics, artwork, and game mechanics, is protected by copyright and other intellectual property rights.</p>
          
          <h3>Service Modifications</h3>
          <p>We reserve the right to:</p>
          <ul>
            <li>Modify or discontinue services</li>
            <li>Update these terms at any time</li>
            <li>Suspend or terminate accounts for violations</li>
          </ul>

          <h3>Limitation of Liability</h3>
          <p>We are not liable for:</p>
          <ul>
            <li>Service interruptions or data loss</li>
            <li>User-generated content</li>
            <li>Indirect or consequential damages</li>
          </ul>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              For questions about these terms, please contact us at legal@wickedlyrics.game
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}