import React from 'react';
import Link from 'next/link';

const baseStyles = `px-[20px] py-[22px] rounded-[16px] border border-[#E0E0E0] transition 
shadow-[2px_2px_6px_0px_#543C9740] text-center w-full text-sm`;

const defaultStyles = 'bg-[#EAEEF7]';
const hoverStyles =
  'hover:bg-gradient-to-b hover:from-[#141333] hover:via-[#202261] hover:via-[#543C97] hover:to-[#6939A2] hover:text-white';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const Button = ({ children, href, onClick, className }: ButtonProps) => {
  if (href) {
    return (
      <Link
        href={href}
        className={`${baseStyles} ${defaultStyles} ${hoverStyles} ${className} inline-block text-center`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${defaultStyles} ${hoverStyles} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
