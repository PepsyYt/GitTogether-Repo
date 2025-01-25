import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import type { ResumeData } from '../types/resume';

interface ResumePreviewerProps {
  data: ResumeData;
}

export const ResumePreviewer: React.FC<ResumePreviewerProps> = ({ data }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg max-w-4xl mx-auto">
      <div className="p-8 border-b-4 border-primary-500">
        <h1 className="text-4xl font-bold text-gray-900">
          {data.personalInfo.firstName} {data.personalInfo.lastName}
        </h1>
        <div className="mt-4 flex flex-wrap gap-4 text-gray-600">
          {data.personalInfo.email && (
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              {data.personalInfo.email}
            </div>
          )}
          {data.personalInfo.phone && (
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              {data.personalInfo.phone}
            </div>
          )}
          {data.personalInfo.location && (
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              {data.personalInfo.location}
            </div>
          )}
        </div>
      </div>

      {data.personalInfo.summary && (
        <div className="p-8 border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Professional Summary</h2>
          <p className="text-gray-700 leading-relaxed">{data.personalInfo.summary}</p>
        </div>
      )}

      {data.experience.length > 0 && (
        <div className="p-8 border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Experience</h2>
          <div className="space-y-6">
            {data.experience.map((exp, index) => (
              <div key={index} className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-primary-500 before:rounded-full">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{exp.position}</h3>
                    <p className="text-gray-600">{exp.company}</p>
                    {exp.location && <p className="text-gray-500 text-sm">{exp.location}</p>}
                  </div>
                  <p className="text-gray-500 text-sm whitespace-nowrap">
                    {exp.startDate} - {exp.endDate}
                  </p>
                </div>
                <ul className="mt-2 space-y-1">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="text-gray-700">{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {data.education.length > 0 && (
        <div className="p-8 border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Education</h2>
          <div className="space-y-6">
            {data.education.map((edu, index) => (
              <div key={index} className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-primary-500 before:rounded-full">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{edu.degree} in {edu.field}</h3>
                    <p className="text-gray-600">{edu.institution}</p>
                    {edu.gpa && <p className="text-gray-500 text-sm">GPA: {edu.gpa}</p>}
                  </div>
                  <p className="text-gray-500 text-sm whitespace-nowrap">
                    {edu.startDate} - {edu.endDate}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {data.skills.length > 0 && (
        <div className="p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-50 text-primary-700"
              >
                {skill.name}
                <span className="ml-1 text-primary-500">•</span>
                <span className="ml-1 text-primary-600">{skill.level}</span>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};