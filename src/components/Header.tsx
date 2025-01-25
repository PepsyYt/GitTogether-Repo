import React from 'react';
import { FileText, Sparkles, Layout, Award } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-gradient-to-r from-primary-600 to-primary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center">
            <FileText className="h-10 w-10 text-white" />
            <div className="ml-3">
              <h1 className="text-2xl font-bold text-white">Smart Resume Builder</h1>
              <p className="text-primary-100 text-sm">Create your professional resume in minutes</p>
            </div>
          </div>
          <nav className="flex mt-4 md:mt-0 space-x-6">
            <a href="#templates" className="flex items-center text-primary-100 hover:text-white transition-colors">
              <Layout className="h-4 w-4 mr-2" />
              Templates
            </a>
            <a href="#features" className="flex items-center text-primary-100 hover:text-white transition-colors">
              <Award className="h-4 w-4 mr-2" />
              Features
            </a>
            <a href="#ai" className="flex items-center text-primary-100 hover:text-white transition-colors">
              <Sparkles className="h-4 w-4 mr-2" />
              AI Assistant
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};