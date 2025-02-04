import React, { useState } from 'react';

interface TextInputProps {
  placeholder?: string;
}

const TextInput = ({ placeholder }: TextInputProps) => {
  const [textValue, setTextValue] = useState('');

  return (
    <div className="w-full">
      <input
        type="text"
        className="w-full border border-gray-300 rounded-lg p-3 mb-4"
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
