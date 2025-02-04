import { fetchAllSurveyIds } from 'server/fetchAllSurveyIds';
import FinishScreen from './FinishScreen';
import { fetchSurveyById } from 'server/fetchSurveyById';

type StaticParam = {
  surveyId: string;
};

export async function generateStaticParams(): Promise<StaticParam[]> {
  const surveyIds = await fetchAllSurveyIds();

  const allParams: StaticParam[] = [];

  for (const surveyId of surveyIds) {
    allParams.push({ surveyId });
  }

  return allParams;
}

export default async function QuestionPage({
  params,
}: {
  params: Promise<{ surveyId: string }>;
}) {
  const { surveyId } = await params;
  const survey = await fetchSurveyById(surveyId);
  if (!survey) return <div>Survey not found</div>;

  return <FinishScreen survey={survey} />;
}
