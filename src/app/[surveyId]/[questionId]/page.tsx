import { fetchSurveyById } from 'server/fetchSurveyById';
import QuestionScreen from './QuestionScreen';
import { fetchAllSurveyIds } from 'server/fetchAllSurveyIds';
import SurveyWrapper from 'features/survey/SurveyWrapper';
import { SurveyData } from 'features/survey/surveyTypes';

type StaticParam = {
  surveyId: string;
  questionId: string;
};

export async function generateStaticParams(): Promise<StaticParam[]> {
  const surveyIds = await fetchAllSurveyIds();

  const surveys = await Promise.all(
    surveyIds.map((surveyId) => fetchSurveyById(surveyId)),
  );

  return surveys
    .filter(
      (survey): survey is SurveyData => survey !== null && survey !== undefined,
    )
    .flatMap((survey) =>
      survey.questions.map((q) => ({
        surveyId: survey.surveyId,
        questionId: q.id,
      })),
    );
}

export default async function QuestionPage({
  params,
}: {
  params: Promise<{ surveyId: string; questionId: string }>;
}) {
  const { surveyId, questionId } = await params;

  const survey = await fetchSurveyById(surveyId);
  if (!survey) return <div>Survey not found</div>;

  const question = survey.questions.find((q) => q.id === questionId);
  if (!question) return <div>Question not found</div>;

  return (
    <SurveyWrapper
      surveyId={surveyId}
      isSpecialScreen={question.category === 'next'}
    >
      <QuestionScreen question={question} survey={survey} />
    </SurveyWrapper>
  );
}
