'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { goBack, resetQuestionnaire } from '@/store/questionnaireSlice';
import ArrowLeftIcon from './icons/ArrowLeftIcon';
import { selectHistory } from '@/store/selectors';

interface BackButtonProps {
  surveyId: string;
  className?: string;
  color?: string;
}

export default function BackButton({
  surveyId,
  className = '',
  color = '#333',
}: BackButtonProps) {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const history = useAppSelector(selectHistory);

  const handleGoBack = useCallback(() => {
    if (history.length === 0) {
      dispatch(resetQuestionnaire());
      router.push('/');
    } else if (history.length === 1) {
      router.push('/');
    } else {
      dispatch(goBack());
      const prevQuestionId = history[history.length - 2];
      router.push(`/${surveyId}/${prevQuestionId}`);
    }
  }, [history, surveyId, dispatch, router]);

  return (
    <button
      onClick={handleGoBack}
      className={`flex items-center text-sm transition-colors hover:opacity-80 ${className}`}
    >
      <ArrowLeftIcon size={20} color={color} className="mr-2" />
    </button>
  );
}
