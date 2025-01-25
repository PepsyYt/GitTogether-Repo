import React from 'react';
import { FileText } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FileText className="h-8 w-8 text-primary-600" />
            <h1 className="ml-2 text-2xl font-bold text-gray-900">Smart Resume Builder</h1>
          </div>
          <nav className="flex space-x-4">
            <a href="#templates" className="text-gray-600 hover:text-gray-900">Templates</a>
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#ai" className="text-gray-600 hover:text-gray-900">AI Assistant</a>
          </nav>
        </div>
      </div>
    </header>
  );
};