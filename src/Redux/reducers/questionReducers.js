const initialState = {
  questions: [
    {
      id: '23',
      question: 'how to add a question?',
      answer: 'just use the form below!!!!',
      dealy: false,
    },
  ],
  loading: false,
};

const questionReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'create_question':
      return {
        ...state,
        questions: [action.payload, ...state.questions],
      };
    case 'show_loader':
      return {
        ...state,
        loading: action.payload,
      };
    case 'update_question': {
      const questionIndex = state.questions.findIndex(
        (question) => question.id === action.payload.questionId
      );
      const updatedQuestions = [...state.questions];
      updatedQuestions[questionIndex].question = action.payload.questionText;
      return {
        ...state,
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
