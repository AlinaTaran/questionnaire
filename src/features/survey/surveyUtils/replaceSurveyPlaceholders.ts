import placeholderReplacer from 'features/survey/surveyUtils/placeholderReplacer';
import { RelationshipStatus } from 'features/question/questionTypes';
import {
  getGenderReplacement,
  getHasChildrenReplacement,
  getSinglePrefix,
} from './replacementHelpers';

interface ReplaceSurveyTextProps {
  text: string;
  category?: string;
  gender: string;
  hasChildren: boolean;
  relationshipStatus: RelationshipStatus;
}

export function replaceSurveyPlaceholders({
  text,
  category,
  gender,
  hasChildren,
  relationshipStatus,
}: ReplaceSurveyTextProps): string {
  const replacements: Record<string, string> = {
    '{gender}': getGenderReplacement(gender),
    '{who have children (if have children)}':
      getHasChildrenReplacement(hasChildren),
    '{singlePrefix}': getSinglePrefix(category, relationshipStatus),
  };

  return placeholderReplacer(text, replacements);
}
