import { fetchSurveyById } from './fetchSurveyById';
import { fetchAllSurveyIds } from './fetchAllSurveyIds';

export async function getAvailableSurveys() {
  const surveyIds = await fetchAllSurveyIds();
  if (!surveyIds.length) return [];

  const surveys = await Promise.all(
    surveyIds.map(async (id) => {
      const survey = await fetchSurveyById(id);
      return survey && survey.questions.length ? survey : null;
    }),
  );

  return surveys.filter((s) => s !== null);
}
