import React from 'react';

interface RadioGroupProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  options: string[];
  required?: boolean;
  layout?: 'col' | 'grid';
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
  layout = 'col',
}) => {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-300">{label}</label>
      <div className={layout === 'grid' ? 'grid grid-cols-2 gap-3' : 'space-y-2'}>
        {options.map((option) => (
          <label
            key={option}
            className={`flex items-center ${layout === 'grid' ? 'justify-center text-center' : ''} p-3 rounded-xl border cursor-pointer transition-all ${
              value === option
                ? 'border-cyan-500 bg-cyan-500/10 text-white'
                : 'border-zinc-800 bg-black hover:border-zinc-600 text-gray-400'
            }`}
          >
            <input
              type="radio"
              name={name}
              value={option}
              required={required}
              checked={value === option}
              onChange={onChange}
              className={
                layout === 'grid'
                  ? 'sr-only'
                  : 'w-4 h-4 text-cyan-500 border-zinc-600 focus:ring-cyan-500 bg-transparent mr-3'
              }
            />
            <span className={layout === 'grid' ? 'text-sm font-medium' : 'text-sm'}>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
