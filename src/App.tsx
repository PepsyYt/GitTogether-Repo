import React, { useState } from 'react';
import { Header } from './components/Header';
import { ResumeForm } from './components/ResumeForm';
import { ResumePreviewer } from './components/ResumePreviewer';
import type { ResumeData } from './types/resume';

const initialData: ResumeData = {
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    summary: '',
  },
  education: [],
  experience: [],
  skills: [],
};

function App() {
  const [resumeData, setResumeData] = useState<ResumeData>(initialData);
  const [activeTab, setActiveTab] = useState<'edit' | 'preview'>('edit');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <div className="sm:hidden">
            <select
              className="block w-full rounded-md border-gray-300 focus:border-primary-500 focus:ring-primary-500"
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value as 'edit' | 'preview')}
            >
              <option value="edit">Edit</option>
              <option value="preview">Preview</option>
            </select>
          </div>
          
          <div className="hidden sm:block">
            <nav className="flex space-x-4" aria-label="Tabs">
              <button
                onClick={() => setActiveTab('edit')}
                className={`${
                  activeTab === 'edit'
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-gray-500 hover:text-gray-700'
                } px-3 py-2 font-medium text-sm rounded-md`}
              >
                Edit
              </button>
              <button
                onClick={() => setActiveTab('preview')}
                className={`${
                  activeTab === 'preview'
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-gray-500 hover:text-gray-700'
                } px-3 py-2 font-medium text-sm rounded-md`}
              >
                Preview
              </button>
            </nav>
          </div>
        </div>

        <div className="mt-4">
          {activeTab === 'edit' ? (
            <ResumeForm data={resumeData} onChange={setResumeData} />
          ) : (
            <ResumePreviewer data={resumeData} />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;