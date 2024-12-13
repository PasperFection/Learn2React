import React from 'react';
import { Code, Database, Clock, Puzzle, Zap, Layout } from 'lucide-react';

interface CategorySelectorProps {
  onSelect: (category: string) => void;
  selectedCategory: string | undefined;
}

export function CategorySelector({ onSelect, selectedCategory }: CategorySelectorProps) {
  const categories = [
    { id: 'basics', name: 'Basics', icon: <Code /> },
    { id: 'state', name: 'State Management', icon: <Database /> },
    { id: 'lifecycle', name: 'Lifecycle Methods', icon: <Clock /> },
    { id: 'events', name: 'Event Handling', icon: <Zap /> },
    { id: 'props', name: 'Props & Data Flow', icon: <Layout /> },
    { id: 'patterns', name: 'Design Patterns', icon: <Puzzle /> },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
      {categories.map(category => (
        <button
          key={category.id}
          onClick={() => onSelect(category.id)}
          className={`p-4 rounded-lg flex items-center ${
            selectedCategory === category.id
              ? 'bg-blue-500 text-white'
              : 'bg-white hover:bg-gray-50'
          }`}
        >
          <span className="mr-2">{category.icon}</span>
          {category.name}
        </button>
      ))}
    </div>
  );
}