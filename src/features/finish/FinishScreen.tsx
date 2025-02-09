'use client';

import React, { useCallback, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import Button from 'components/Button';
import SurveyAnswer from 'features/survey/SurveyAnswer';

import { formatSurveyAnswers } from 'features/finish/finishUtils/formatSurveyAnswers';
import { selectUserProfile } from '@/store/selectors';
import { SurveyData } from 'features/survey/surveyTypes';
import { resetQuestionnaire } from '@/store/questionnaireSlice';
import { useRouter } from 'next/navigation';

interface FinishScreenProps {
  survey: SurveyData;
}

export default function FinishScreen({ survey }: FinishScreenProps) {
  const userProfile = useAppSelector(selectUserProfile);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleRestart = useCallback(() => {
    dispatch(resetQuestionnaire());
    router.push('/');
  }, [dispatch, router]);

  const formattedAnswers = useMemo(
    () => formatSurveyAnswers(userProfile, survey),
    [userProfile, survey],
  );

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Thank you for taking the survey!
      </h1>

      <>
        <h2 className="text-xl mb-4 text-center">Your answers:</h2>

        <div className="space-y-4">
          {formattedAnswers.map(({ id, text, answer }) => (
            <SurveyAnswer key={id} questionText={text} answerText={answer} />
          ))}
        </div>
      </>

      <Button href="/" className="mt-6" onClick={handleRestart}>
        Start over
      </Button>
    </div>
  );
}
