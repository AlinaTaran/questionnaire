import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/store/hooks';
import { saveAnswer } from '@/store/questionnaireSlice';
import { SurveyQuestion, SurveyData } from 'features/survey/surveyTypes';

export function useQuestionLogic(question: SurveyQuestion, survey: SurveyData) {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleRadioClick = (value: string, goTo: string) => {
    dispatch(
      saveAnswer({
        questionId: question.id,
        answer: value,
        nextQuestionId: goTo,
        category: question.category,
      }),
    );
    router.push(`/${survey.surveyId}/${goTo}`);
  };

  return { handleRadioClick };
}
