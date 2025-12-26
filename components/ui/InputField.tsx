import React from 'react';

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
}) => {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-300">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full px-4 py-3 bg-black border border-zinc-800 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none text-white"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
