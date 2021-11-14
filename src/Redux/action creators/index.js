export const addNewQuestion = (id, question, answer, dealy) => {
  const questionObj = {
    id,
    question,
    answer,
    dealy,
  };

  if (dealy) {
    return (dispatch) => {
      return setTimeout(() => {
        dispatch({ type: 'create_question', payload: questionObj });
      }, 5000);
    };
  } else {
    return (dispatch) => {
      dispatch({ type: 'create_question', payload: questionObj });
    };
  }
};

export const updateQuestion = (questionId, questionText) => {
  const updatedQuestion = {
    questionId,
    questionText,
  };
  return (dispatch) => {
    dispatch({ type: 'update_question', payload: updatedQuestion });
  };
};

export const deleteQuestion = (questionId) => {
  return (dispatch) => {
    dispatch({ type: 'delete_question', payload: questionId });
  };
};

export const removeQuestions = () => {
  return (dispatch) => {
    dispatch({ type: 'delete_all_question' });
  };
};
