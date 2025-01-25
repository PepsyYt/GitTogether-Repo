import React, { useState } from 'react';
import { Header } from './components/Header';
import { ResumeForm } from './components/ResumeForm';
import { ResumePreviewer } from './components/ResumePreviewer';
import type { ResumeData } from './types/resume';
import LinkedIn from 'react-linkedin-login-oauth2';


const initialData: ResumeData = {
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    summary: '',
  },
  education: [''],
  experience: [''],
  skills: [''],
};

interface LinkedInButtonProps {
  onSuccess: (data: any) => void;
}

export const LinkedInButton: React.FC<LinkedInButtonProps> = ({ onSuccess }) => {
  const handleLinkedInSuccess = (code: string) => {
    // Simulate API call to fetch LinkedIn data
    fetch('/api/linkedin-auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code }),
    })
      .then((res) => res.json())
      .then((data) => onSuccess(data))
      .catch((err) => console.error('Error fetching LinkedIn data:', err));
  };

  return (
    <LinkedIn
      clientId="YOUR_LINKEDIN_CLIENT_ID"
      onSuccess={(code) => handleLinkedInSuccess(code)}
      redirectUri="http://localhost:3000/linkedin"
    >
      <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
        Import from LinkedIn
      </button>
    </LinkedIn>
  );
};

const App: React.FC = () => {
  const [resumeData, setResumeData] = useState<ResumeData>(initialData);
  const [activeTab, setActiveTab] = useState<'edit' | 'preview'>('edit');

  const handleLinkedInData = (profileData: any) => {
    setResumeData((prevData) => ({
      ...prevData,
      personalInfo: {
        ...prevData.personalInfo,
        firstName: profileData.firstName || '',
        lastName: profileData.lastName || '',
        email: profileData.emailAddress || '',
        location: profileData.location || '',
      },
      experience: profileData.positions || [''],
      skills: profileData.skills || [''],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Build Your Professional Resume
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Create a standout resume that gets you noticed by top employers.
          </p>
        </div>
        <div className="mb-6">
          <LinkedInButton onSuccess={handleLinkedInData} />
        </div>
        <div className="sm:hidden">
          <select
            className="block w-full rounded-md border-gray-300 focus:border-primary-500 focus:ring-primary-500"
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value as 'edit' | 'preview')}
          >
            <option value="edit">Edit Resume</option>
            <option value="preview">Preview Resume</option>
          </select>
        </div>
        <div className="hidden sm:block">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              <button
                onClick={() => setActiveTab('edit')}
                className={`${
                  activeTab === 'edit'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Edit Resume
              </button>
              <button
                onClick={() => setActiveTab('preview')}
                className={`${
                  activeTab === 'preview'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Preview Resume
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
      </div>
      <footer className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-base text-gray-500">
              © {new Date().getFullYear()} Smart Resume Builder. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
