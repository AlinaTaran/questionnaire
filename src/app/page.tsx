'use server';

import { getAvailableSurveys } from 'server/surveyService';
import SurveyList from 'features/survey/SurveyList';

export default async function HomePage() {
  const surveys = await getAvailableSurveys();

  return (
    <div className="p-6 w-[500px] mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Available Surveys</h1>

      <SurveyList surveys={surveys} />
    </div>
  );
}
