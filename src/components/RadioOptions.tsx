import React from 'react';
import Button from './Button';

interface RadioOptionsProps {
  options: { value: string; label: string; goTo: string }[];
  onSelect: (value: string, goTo: string) => void;
  buttonClass?: string;
}

const RadioOptions = ({
  options,
  onSelect,
  buttonClass,
}: RadioOptionsProps) => {
  return (
    <div className="space-y-4 w-full">
      {options.map((ans) => (
        <Button
          key={ans.value}
          onClick={() => onSelect(ans.value, ans.goTo)}
          className={buttonClass}
        >
          {ans.label}
        </Button>
      ))}
    </div>
  );
};

export default RadioOptions;
