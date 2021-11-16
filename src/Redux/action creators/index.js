/**
 * Action creator method for  add a new question and dispatch action to store.
 * if delay (checkbox is click) then it takes 5 seconds to dispatch action,
 * add to list.
 * @param {*} id
 * @param {*} question
 * @param {*} answer
 * @param {*} dealy
 */

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

/**
 * updateQuestion method pass questionId
 * and updated text to reducer for change state
 *
 * @param {*} questionId
 * @param {*} questionText
 */

export const updateQuestion = (questionId, questionText) => {
  const updatedQuestion = {
    questionId,
    questionText,
  };
  return (dispatch) => {
    dispatch({ type: 'update_question', payload: updatedQuestion });
  };
};

/**
 * deleteQuestion pass questionId as payload to reducer function
 * @param {*} questionId
 */

export const deleteQuestion = (questionId) => {
  return (dispatch) => {
    dispatch({ type: 'delete_question', payload: questionId });
  };
};

/**
 *  Method dispatch reducer function for removeAll questions
 */
export const removeQuestions = () => {
  return (dispatch) => {
    dispatch({ type: 'delete_all_question' });
  };
};

/**
 *  Method disptach to reducer function to show loader true/false
 * @param {*} isShowLoader
 */
export const displayLoader = (isShowLoader) => {
  return (dispatch) => {
    dispatch({ type: 'show_loader', payload: isShowLoader });
  };
};
