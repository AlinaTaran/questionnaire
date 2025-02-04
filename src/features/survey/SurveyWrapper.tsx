import React from 'react';
import Header from 'components/Header';

interface SurveyWrapperProps {
  surveyId: string;
  isSpecialScreen: boolean;
  children: React.ReactNode;
}

const SurveyWrapper = ({
  surveyId,
  isSpecialScreen,
  children,
}: SurveyWrapperProps) => (
  <div
    className={`min-h-screen w-full transition-colors duration-300 ${
      isSpecialScreen
        ? 'bg-gradient-to-b from-[#141333] via-[#202261] to-[#6939A2] text-white'
        : 'bg-[#FFF0F0]'
    }`}
  >
    <Header surveyId={surveyId} isSpecialScreen={isSpecialScreen} />
    <div className="w-[330px] mx-auto">{children}</div>
  </div>
);

export default SurveyWrapper;
