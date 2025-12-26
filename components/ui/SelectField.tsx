import React from 'react';

interface SelectFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  required?: boolean;
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
}) => {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-300">{label}</label>
      <select
        required={required}
        name={name}
        className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none text-white appearance-none"
        value={value}
        onChange={onChange}
      >
        <option value="" disabled>
          Select an option...
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
