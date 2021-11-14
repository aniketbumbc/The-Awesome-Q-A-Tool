import { useState } from 'react';
import { useAction } from '../../Redux/hooks/useAction';
import { v4 as uuidv4 } from 'uuid';
import './Questions.css';

const Questions = () => {
  const [dealy, setDealy] = useState(false);
  const { addNewQuestion } = useAction();

  const addNewQuestionHander = (event) => {
    event.preventDefault();
    const questionId = uuidv4();
    addNewQuestion(
      questionId,
      event.target.question.value,
      event.target.answer.value,
      dealy
    );
    event.target.reset();
  };

  const handleOnchangeDealy = (event) => {
    setDealy(event.target.checked);
  };

  return (
    <div>
      <div className='question-container'>
        <div className='question-form'>
          <h3
            className='question-form-title tooltip'
            data-tooltip='Here you create a new question and their answers.'
          >
            Created Questions
          </h3>

          <form onSubmit={addNewQuestionHander}>
            <label className='label'>Question</label>
            <input
              type='text'
              size='99'
              className='question-input'
              name='question'
              maxLength='50'
              required
            />
            <label className='label'>Answer</label>
            <textarea rows='4' cols='85' name='answer' required></textarea>
            <label className='check-box-dealy'>
              Dealy
              <input
                type='checkbox'
                style={{ marginLeft: 5 }}
                onChange={handleOnchangeDealy}
                value={dealy}
              />
            </label>
            <button type='submit' className='submit-btn'>
              Create Question
            </button>
          </form>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Questions;
