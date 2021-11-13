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
            <label className='label'>Question</label>
            <input type='text' size='99' className='question-input' />
            <label className='label'>Answer</label>
            <textarea
              rows='4'
              cols='85'
              defaultValue=' Enter text here...'
            ></textarea>
            <label className='check-box-dealy'>
              Dealy
              <input type='checkbox' style={{ marginLeft: 5 }} />
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
