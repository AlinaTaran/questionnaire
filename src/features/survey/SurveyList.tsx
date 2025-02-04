import Button from 'components/Button';

interface SurveyListProps {
  surveys: { surveyId: string; title: string; questions: { id: string }[] }[];
}

export default function SurveyList({ surveys }: SurveyListProps) {
  if (!surveys.length) {
    return <p className="text-center text-gray-500">No surveys found.</p>;
  }

  return (
    <div className="space-y-4">
      {surveys.map((survey) => (
        <div key={survey.surveyId} className="bg-white p-4 rounded-lg">
          <h2 className="text-lg font-semibold">{survey.title}</h2>
          <Button
            href={`/${survey.surveyId}/${survey.questions[0].id}`}
            className="mt-4"
          >
            Start Survey
          </Button>
        </div>
      ))}
    </div>
  );
}
