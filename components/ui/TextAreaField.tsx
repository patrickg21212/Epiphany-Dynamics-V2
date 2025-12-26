import React from 'react';

interface TextAreaFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  rows?: number;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  rows = 3,
}) => {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-300">{label}</label>
      <textarea
        required={required}
        name={name}
        rows={rows}
        className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none text-white resize-none"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default TextAreaField;
