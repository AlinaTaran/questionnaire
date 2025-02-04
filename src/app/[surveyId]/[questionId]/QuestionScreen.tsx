'use client';

import React from 'react';
import { useAppSelector } from '@/store/hooks';
import TextInput from 'components/TextInput';
import RadioOptions from 'components/RadioOptions';
import QuestionText from 'features/question/QuestionText';
import { useQuestionLogic } from 'app/hooks/useQuestionLogic';
import { selectUserProfile } from '@/store/selectors';
import { SurveyData, SurveyQuestion } from 'features/survey/surveyTypes';

interface QuestionScreenProps {
  question: SurveyQuestion;
  survey: SurveyData;
}

export default function QuestionScreen({
  question,
  survey,
}: QuestionScreenProps) {
  const { handleRadioClick } = useQuestionLogic(question, survey);

  const { gender, relationshipStatus, hasChildren } =
    useAppSelector(selectUserProfile);

  const isSpecialScreen = question.category === 'next';

  return (
    <div className="w-[330px] flex justify-center">
      <div className="w-full text-center">
        <QuestionText
          text={question.questionText}
          gender={gender}
          hasChildren={hasChildren}
          relationshipStatus={relationshipStatus}
          className={isSpecialScreen ? 'text-white text-center' : ''}
        />

        {question.statement && (
          <h1 className="text-[18px] font-bold leading-[28px] text-center mb-[30px] mt-[10px]">
            {question.statement}
          </h1>
        )}

        {question.description && (
          <p className="text-[14px] font-normal leading-[25.2px] text-center text-white mb-6">
            {question.description}
          </p>
        )}

        {/* Show input or radio options based on screenType */}
        {question.screenType === 'text' && (
          <TextInput placeholder={question.answers[0]?.label || ''} />
        )}

        {question.screenType === 'radio' && (
          <RadioOptions
            options={question.answers}
            onSelect={handleRadioClick}
            buttonClass={
              isSpecialScreen ? 'bg-white text-[#6A3AA2] py-[14px]' : ''
            }
          />
        )}
      </div>
    </div>
  );
}
