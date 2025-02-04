export enum Gender {
  Male = 'male',
  Female = 'female',
}

export enum RelationshipStatus {
  Single = 'single',
  Relationship = 'relationship',
}

export interface QuestionnaireState {
  answers: Record<string, string>;
  history: string[];
  gender: Gender;
  hasChildren: boolean;
  relationshipStatus: RelationshipStatus;
}

export interface SurveyData {
  surveyId: string;
  title: string;
  questions: SurveyQuestion[];
}

export interface SurveyQuestion {
  id: string;
  screenType: 'radio' | 'text'; // Support more types if needed
  questionText: string;
  statement?: string;
  description?: string;
  answers: SurveyAnswer[];
  category?: string;
}

export interface SurveyAnswer {
  value: string;
  label: string;
  goTo: string;
}
