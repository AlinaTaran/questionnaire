'use client';

import Logo from './Logo';
import BackButton from './BackButton';

interface HeaderProps {
  surveyId?: string;
  isSpecialScreen?: boolean;
}

export default function Header({ surveyId, isSpecialScreen }: HeaderProps) {
  const iconColor = isSpecialScreen ? '#FFFFFF' : '#333333';

  return (
    <header className="relative flex items-center justify-center w-full py-4 cursor-pointer">
      {surveyId && (
        <div className="absolute left-10">
          <BackButton surveyId={surveyId} color={iconColor} />
        </div>
      )}

      <Logo isSpecialScreen={isSpecialScreen} />
    </header>
  );
}
