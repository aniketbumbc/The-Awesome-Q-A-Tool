import './Questions.css';

const Questions = () => {
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

          <form>
            <lable className='label'>Question</lable>
            <input type='text' />
            <lable className='label'>Answer</lable>
            <textarea rows='4' cols='100'>
              Enter text here...
            </textarea>
            <button type='submit' className='submit-btn'>
              Create question
            </button>
          </form>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Questions;
