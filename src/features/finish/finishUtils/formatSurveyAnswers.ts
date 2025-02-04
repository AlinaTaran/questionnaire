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
  const { gender, hasChildren, relationshipStatus, answers } = userProfile;

  return Object.entries(answers)
    .map(([qId, ans]) => {
      const question: SurveyQuestion | undefined = survey.questions.find(
        (q) => q.id === qId,
      );

      if (!question || typeof ans !== 'string' || ans.toLowerCase() === 'next')
        return null;

      return {
        id: qId,
        text: replaceSurveyPlaceholders({
          text: question.questionText,
          gender,
          hasChildren,
          relationshipStatus,
        }),
        answer: question.answers.find((a) => a.value === ans)?.label || ans,
      };
    })
    .filter((answer): answer is FormattedAnswer => answer !== null);
}
