import { RelationshipStatus } from '../surveyTypes';
import placeholderReplacer from './placeholderReplacer';

interface ReplacementMapping {
  [key: string]: () => string;
}
interface ReplaceSurveyTextProps {
  text: string;
  gender: string;
  hasChildren: boolean;
  relationshipStatus: RelationshipStatus;
}

export function replaceSurveyPlaceholders({
  text,
  gender,
  hasChildren,
  relationshipStatus,
}: ReplaceSurveyTextProps): string {
  const replacements: Record<string, string> = {};

  const mapping: ReplacementMapping = {
    single: () =>
      relationshipStatus === RelationshipStatus.Single
        ? 'Single'
        : 'no longer single',
    gender: () =>
      relationshipStatus === RelationshipStatus.Single
        ? gender
        : gender.charAt(0).toUpperCase() + gender.slice(1),
    'who have children': () => (hasChildren ? 'who have children' : ''),
  };

  Object.keys(mapping).forEach((key) => {
    if (text.includes(`{${key}}`)) {
      replacements[key] = mapping[key]();
    }
  });

  return placeholderReplacer(text, replacements);
}
