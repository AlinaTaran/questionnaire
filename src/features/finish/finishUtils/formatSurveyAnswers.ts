import { replaceSurveyPlaceholders } from 'features/survey/surveyUtils/replaceSurveyPlaceholders';
import { SurveyData, SurveyQuestion } from 'features/survey/surveyTypes';
import { UserSurveyProfile } from '../finishTypes';

interface FormattedAnswer {
  id: string;
  text: string;
  answer: string;
}

export function formatSurveyAnswers(
  userProfile: UserSurveyProfile,
  survey: SurveyData,
): FormattedAnswer[] {
  const questionsMap = createQuestionsMap(survey);
  const validAnswers = filterValidAnswers(userProfile.answers);

  return validAnswers
    .map(([qId, ans]) => formatAnswer(qId, ans, questionsMap, userProfile))
    .filter(Boolean) as FormattedAnswer[]; // Фільтруємо `null`
}

function createQuestionsMap(survey: SurveyData): Map<string, SurveyQuestion> {
  return new Map(survey.questions.map((q) => [q.id, q]));
}

function filterValidAnswers(
  answers: Record<string, string>,
): [string, string][] {
  return Object.entries(answers).filter(
    ([, ans]) => ans && ans.toLowerCase() !== 'next',
  );
}

function formatAnswer(
  qId: string,
  ans: string,
  questionsMap: Map<string, SurveyQuestion>,
  userProfile: UserSurveyProfile,
): FormattedAnswer | null {
  const question = questionsMap.get(qId);
  if (!question) return null;

  return {
    id: qId,
    text: replaceSurveyPlaceholders({
      text: question.questionText,
      ...userProfile,
    }),
    answer: question.answers.find((a) => a.value === ans)?.label || ans,
  };
}
