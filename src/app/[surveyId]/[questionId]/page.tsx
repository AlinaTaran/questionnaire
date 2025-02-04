import { fetchSurveyById } from 'server/fetchSurveyById';
import QuestionScreen from './QuestionScreen';
import { fetchAllSurveyIds } from 'server/fetchAllSurveyIds';
import SurveyWrapper from 'features/survey/SurveyWrapper';

type PageProps = {
  params: {
    surveyId: string;
    questionId: string;
  };
};

type StaticParam = {
  surveyId: string;
  questionId: string;
};

export async function generateStaticParams(): Promise<StaticParam[]> {
  const surveyIds = await fetchAllSurveyIds();

  const allParams: StaticParam[] = [];

  for (const surveyId of surveyIds) {
    const survey = await fetchSurveyById(surveyId);
    if (!survey) continue;

    survey.questions.forEach((q) => {
      allParams.push({ surveyId, questionId: q.id });
    });
  }

  return allParams;
}

export default async function QuestionPage({ params }: PageProps) {
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
