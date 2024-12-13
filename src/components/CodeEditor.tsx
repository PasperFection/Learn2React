import React, { useState } from 'react';
import { Check, AlertCircle } from 'lucide-react';

interface CodeEditorProps {
  code: string;
  solution: string;
  onSubmit: (isCorrect: boolean) => void;
}

export function CodeEditor({ code, solution, onSubmit }: CodeEditorProps) {
  const [userCode, setUserCode] = useState(code);
  const [error, setError] = useState('');

  const handleSubmit = () => {
    try {
      // Remove whitespace and newlines for comparison
      const normalizedUserCode = userCode.replace(/\s/g, '');
      const normalizedSolution = solution.replace(/\s/g, '');
      const isCorrect = normalizedUserCode === normalizedSolution;
      onSubmit(isCorrect);
      setError('');
    } catch (err) {
      setError('There seems to be an error in your code');
    }
  };

  return (
    <div className="w-full max-w-2xl">
      <div className="bg-gray-900 rounded-lg p-4 mb-4">
        <textarea
          value={userCode}
          onChange={(e) => setUserCode(e.target.value)}
          className="w-full h-64 bg-gray-800 text-white font-mono p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {error && (
        <div className="flex items-center text-red-500 mb-4">
          <AlertCircle className="w-5 h-5 mr-2" />
          <span>{error}</span>
        </div>
      )}
      <button
        onClick={handleSubmit}
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md flex items-center"
      >
        <Check className="w-5 h-5 mr-2" />
        Submit Solution
      </button>
    </div>
  );
}