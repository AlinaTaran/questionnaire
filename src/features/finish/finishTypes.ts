import { Gender, RelationshipStatus } from 'features/survey/surveyTypes';

export interface UserSurveyProfile {
  gender: Gender;
  relationshipStatus: RelationshipStatus;
  hasChildren: boolean;
  answers: Record<string, string>;
  history: string[];
}
