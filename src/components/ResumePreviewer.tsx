import React from 'react';
import type { ResumeData } from '../types/resume';

interface ResumePreviewerProps {
  data: ResumeData;
}

export const ResumePreviewer: React.FC<ResumePreviewerProps> = ({ data }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          {data.personalInfo.firstName} {data.personalInfo.lastName}
        </h1>
        <div className="text-gray-600 mt-2">
          <p>{data.personalInfo.email} | {data.personalInfo.phone}</p>
          <p>{data.personalInfo.location}</p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2 mb-3">
          Professional Summary
        </h2>
        <p className="text-gray-700">{data.personalInfo.summary}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2 mb-3">
          Experience
        </h2>
        {data.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                <p className="text-gray-700">{exp.company}</p>
              </div>
              <p className="text-gray-600 text-sm">
                {exp.startDate} - {exp.endDate}
              </p>
            </div>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              {exp.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2 mb-3">
          Education
        </h2>
        {data.education.map((edu, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">{edu.degree} in {edu.field}</h3>
                <p className="text-gray-700">{edu.institution}</p>
              </div>
              <p className="text-gray-600 text-sm">
                {edu.startDate} - {edu.endDate}
              </p>
            </div>
            {edu.gpa && <p className="text-gray-700 mt-1">GPA: {edu.gpa}</p>}
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2 mb-3">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
            >
              {skill.name} ({skill.level})
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};