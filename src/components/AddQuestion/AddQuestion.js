import { useState } from 'react';
import { useAction } from '../../Redux/hooks/useAction';
import { v4 as uuidv4 } from 'uuid';
import './AddQuestion.css';

const AddQuestion = () => {
  const [dealy, setDealy] = useState(false);
  const { addNewQuestion } = useAction();

  /**
   * Method addNewQuestionHander take values from form
   * Dispatch addNewQuestion methods with values
   * @param {*} event
   */
  const addNewQuestionHander = (event) => {
    event.preventDefault();
    const questionId = uuidv4();
    addNewQuestion(
      questionId,
      event.target.elements.question.value,
      event.target.elements.question.value,
      dealy
    );
    event.target.reset();
    setDealy(false);
  };

  /**
   * Method setstate with dealy checkbox checked or unchecked
   * @param {*} event
   */
  const handleOnchangeDealy = (event) => {
    setDealy(event.target.checked);
  };

  return (
    <div className='section'>
      <div className='divider'></div>
      <div className='question-container'>
        <div className='question-form'>
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
              rows='3'
              cols='30'
              name='answer'
              aria-labelledby='answer-textarea'
              required
            ></textarea>
            <label className='check-box-dealy' id='dealy'>
              Delay
              <input
                type='checkbox'
                style={{ marginLeft: 5 }}
                onChange={handleOnchangeDealy}
                checked={dealy}
                aria-labelledby='dealy'
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
