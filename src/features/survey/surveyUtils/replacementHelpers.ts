import { RelationshipStatus } from 'features/question/questionTypes';

export function getGenderReplacement(gender: string): string {
  return gender.charAt(0).toUpperCase() + gender.slice(1);
}

export function getHasChildrenReplacement(hasChildren: boolean): string {
  return hasChildren ? 'who have children' : '';
}

export function getSinglePrefix(
  category?: string,
  relationshipStatus?: RelationshipStatus,
): string {
  return category === 'relationship' &&
    relationshipStatus === RelationshipStatus.Single
    ? 'Single'
    : '';
}
