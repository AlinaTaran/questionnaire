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
