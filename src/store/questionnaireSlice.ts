import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  QuestionnaireState,
  Gender,
  RelationshipStatus,
} from 'features/question/questionTypes';

const initialState: QuestionnaireState = {
  answers: {},
  history: [],
  gender: Gender.Male,
  hasChildren: false,
  relationshipStatus: RelationshipStatus.Single,
};

const updateUserProfile = (
  state: QuestionnaireState,
  category?: string,
  answer?: string,
) => {
  if (!category || !answer) return;

  switch (category) {
    case 'gender':
      state.gender = answer as Gender;
      break;
    case 'relationship':
      state.relationshipStatus = answer as RelationshipStatus;
      break;
    case 'hasChildren':
      state.hasChildren = answer === 'yes';
      break;
  }
};

const updateHistory = (
  state: QuestionnaireState,
  questionId: string,
  nextQuestionId?: string,
) => {
  if (!state.history.includes(questionId)) state.history.push(questionId);

  if (nextQuestionId === 'finish') {
    state.history = [];
  } else if (nextQuestionId && !state.history.includes(nextQuestionId)) {
    state.history.push(nextQuestionId);
  }
};

const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    saveAnswer: (
      state,
      action: PayloadAction<{
        questionId: string;
        category?: string;
        answer: string;
        nextQuestionId?: string;
      }>,
    ) => {
      const { questionId, category, answer, nextQuestionId } = action.payload;

      state.answers[questionId] = answer;
      updateUserProfile(state, category, answer);
      updateHistory(state, questionId, nextQuestionId);
    },

    goBack: (state) => {
      if (state.history.length > 1) state.history.pop();
    },

    resetQuestionnaire: () => initialState,
  },
});

export const { saveAnswer, goBack, resetQuestionnaire } =
  questionnaireSlice.actions;
export default questionnaireSlice.reducer;
