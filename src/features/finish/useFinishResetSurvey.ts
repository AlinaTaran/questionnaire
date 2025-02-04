import { useCallback } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { resetQuestionnaire } from '@/store/questionnaireSlice';
import { useRouter } from 'next/navigation';

export function useFinishResetSurvey() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  return useCallback(() => {
    dispatch(resetQuestionnaire());
    router.push('/');
  }, [dispatch, router]);
}
