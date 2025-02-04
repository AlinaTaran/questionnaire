// components/SurveyAnswer.tsx
interface SurveyAnswerProps {
  questionText: string;
  answerText: string;
}

export default function SurveyAnswer({
  questionText,
  answerText,
}: SurveyAnswerProps) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="text-lg font-semibold">{questionText}</p>
      <p className="text-md text-gray-700">{answerText}</p>
    </div>
  );
}
