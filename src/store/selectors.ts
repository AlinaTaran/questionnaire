import { createSelector } from 'reselect';
import { RootState } from './index';
import { QuestionnaireState } from 'features/question/questionTypes';
import { UserSurveyProfile } from 'features/finish/finishTypes';

const selectQuestionnaire = (state: RootState) =>
  state.questionnaire as QuestionnaireState;

export const selectGender = createSelector(
  [selectQuestionnaire],
  (questionnaire) => questionnaire.gender,
);

export const selectRelationshipStatus = createSelector(
  [selectQuestionnaire],
  (questionnaire) => questionnaire.relationshipStatus,
);

export const selectHasChildren = createSelector(
  [selectQuestionnaire],
  (questionnaire) => questionnaire.hasChildren,
);

export const selectAnswers = createSelector(
  [selectQuestionnaire],
  (questionnaire) => questionnaire.answers,
);

export const selectHistory = createSelector(
  [selectQuestionnaire],
  (questionnaire) => questionnaire.history,
);

export const selectUserProfile = createSelector(
  (state: RootState) => state.questionnaire,
  (questionnaire): UserSurveyProfile => ({
    gender: questionnaire.gender,
    relationshipStatus: questionnaire.relationshipStatus,
    hasChildren: questionnaire.hasChildren,
    answers: questionnaire.answers,
    history: questionnaire.history,
  }),
);
