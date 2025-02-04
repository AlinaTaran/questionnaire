import React from 'react';
import { RelationshipStatus } from 'features/question/questionTypes';
import { replaceSurveyPlaceholders } from 'features/survey/surveyUtils/replaceSurveyPlaceholders';

interface QuestionTextProps {
  text: string;
  gender: string;
  hasChildren: boolean;
  relationshipStatus: RelationshipStatus;
  className?: string;
}

const QuestionText = ({
  text,
  gender,
  hasChildren,
  relationshipStatus,
  className,
}: QuestionTextProps) => {
  const replacedText = replaceSurveyPlaceholders({
    text,
    gender,
    hasChildren,
    relationshipStatus,
  });

  return (
    <h1
      className={`text-2xl font-bold text-gray-900 mb-5 text-left ${className}`}
    >
      {replacedText}
    </h1>
  );
};

export default QuestionText;
