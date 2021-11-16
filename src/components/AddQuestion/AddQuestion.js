import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAction } from '../../Redux/hooks/useAction';
import { v4 as uuidv4 } from 'uuid';
import './AddQuestion.css';

const AddQuestion = () => {
  const [delay, setDelay] = useState(false);
  const { addNewQuestion, displayLoader } = useAction();
  const loading = useSelector((state) => state.questionData);

  /**
   * Method addNewQuestionHander take values from form
   * Dispatch addNewQuestion methods with values
   * @param {*} event
   */
  const addNewQuestionHander = (event) => {
    event.preventDefault();
    if (event.target.elements.delay.checked) {
      showLoader(event.target.elements.delay.checked);
    }
    const questionId = uuidv4();
    addNewQuestion(
      questionId,
      event.target.elements.question.value,
      event.target.elements.answer.value,
      delay
    );
    event.target.reset();
    setDelay(false);
  };

  /**
   * Based on checkbox checked and unchecked call dispatch method
   * @param {true/flase} isDisplay
   */
  const showLoader = (isDisplay) => {
    if (isDisplay) {
      displayLoader(isDisplay);
    }
  };

  /**
   * Method set state with dealy checkbox checked or unchecked
   * @param {*} event
   */
  const handleOnchangeDelay = (event) => {
    setDelay(event.target.checked);
  };

  return (
    <div className='section'>
      <div className='question-container'>
        <div
          className={
            loading && loading.loading
              ? 'question-form disable-click'
              : 'question-form'
          }
        >
          {loading && loading.loading && <div className='loader'></div>}

          <h3
            className='question-form-title tooltip'
            data-tooltip='Here you create a new question and their answers.'
          >
            Create Question
          </h3>
          <form data-testid='form' onSubmit={addNewQuestionHander}>
            <label className='label' id='question'>
              Question
            </label>
            <input
              aria-labelledby='question'
              type='text'
              size='35'
              className='question-input'
              name='question'
              maxLength='50'
              required
            />
            <label className='label' id='answer-textarea'>
              Answer
            </label>
            <textarea
              rows='10'
              cols='30'
              name='answer'
              aria-labelledby='answer-textarea'
              required
            ></textarea>
            <label className='check-box-delay' id='delay'>
              Delay
              <input
                type='checkbox'
                style={{ marginLeft: 5 }}
                onChange={handleOnchangeDelay}
                checked={delay}
                name='delay'
                aria-labelledby='delay'
                data-testid='dealy-checkbox'
              />
            </label>
            <button type='submit' className='submit-btn'>
              Create / Add Question
            </button>
          </form>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default AddQuestion;
