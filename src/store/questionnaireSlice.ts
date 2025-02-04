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

const profileUpdateMapping: Record<
  string,
  (state: QuestionnaireState, answer: string) => void
> = {
  gender: (state, answer) => {
    state.gender = answer as Gender;
  },
  relationship: (state, answer) => {
    state.relationshipStatus = answer as RelationshipStatus;
  },
  hasChildren: (state, answer) => {
    state.hasChildren = answer.toLowerCase() === 'yes';
  },
};

const updateUserProfile = (
  state: QuestionnaireState,
  category?: string,
  answer?: string,
) => {
  if (!category || !answer) return;
  const updateFn = profileUpdateMapping[category];
  if (updateFn) {
    updateFn(state, answer);
  }
};

const updateHistory = (
  state: QuestionnaireState,
  questionId: string,
  nextQuestionId?: string,
) => {
  if (!state.history.includes(questionId)) {
    state.history.push(questionId);
  }
  if (nextQuestionId) {
    if (nextQuestionId === 'finish') {
      state.history = [];
    } else if (!state.history.includes(nextQuestionId)) {
      state.history.push(nextQuestionId);
    }
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
      if (state.history.length > 1) {
        state.history.pop();
      }
    },
    resetQuestionnaire: () => ({ ...initialState }),
  },
});

export const { saveAnswer, goBack, resetQuestionnaire } =
  questionnaireSlice.actions;
export default questionnaireSlice.reducer;
