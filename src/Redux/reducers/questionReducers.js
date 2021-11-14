const initialState = {
  questions: [
    {
      id: '23',
      question: 'How to add a question?',
      answer: 'Just use the form below!!!!',
      dealy: false,
    },
  ],
};

const questionReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'create_question':
      return {
        ...state,
        questions: [action.payload, ...state.questions],
      };

    case 'update_question': {
      const questionIndex = state.questions.findIndex(
        (question) => question.id === action.payload.questionId
      );
      const updatedQuestions = [...state.questions];
      updatedQuestions[questionIndex].question = action.payload.questionText;
      return {
        ...state.questions,
        questions: updatedQuestions,
      };
    }
    case 'delete_question': {
      const filteredQuestions = state.questions.filter(
        (question) => question.id !== action.payload
      );
      return {
        ...state,
        questions: filteredQuestions,
      };
    }

    case 'delete_all_question': {
      return {
        ...state,
        questions: [],
      };
    }

    default:
      return state;
  }
};
export default questionReducers;
