import './QuestionList.css';
import InfoSection from '../Infosection/InfoSection';

const questionList = [
  {
    id: 23,
    question: ' Can I add my own questions',
    answer: 'Yes,of course:-)',
  },
  {
    id: 123,
    question:
      ' How to test Application ? How to test Application How to test Application How to test Application',
    answer: 'npm test',
  },
  {
    id: 323,
    question: ' How to store a cookieee',
    answer: 'store in the browser or in the jar :)',
  },
];

const showAnswer = (id) => {
  const CState = document.getElementById(id);
  CState.style.display = CState.style.display !== 'block' ? 'block' : 'none';
};

const QuestionsList = () => {
  return (
    <>
      <div className='container'>
        <InfoSection questionsCount={questionList.length} />

        <div className='questionslist-container'>
          <h3
            className='questionlist-title tooltip'
            data-tooltip='Here you find created questions and their answers.'
          >
            Questions List
          </h3>
          {!!questionList.length &&
            questionList.map((question) => (
              <div className='questions-container' key={question.id}>
                <p onClick={() => showAnswer(question.id)} className='question'>
                  {question.question}
                </p>
                <span className='answer' id={question.id}>
                  {question.answer}
                </span>
                <div className='icons'>
                  <i className='fas fa-edit'></i>
                  <i className='far fa-trash-alt'></i>
                </div>
              </div>
            ))}

          <button className='sort-question'>Sort Questions</button>
          <button className='remove-question'>Remove All Questions</button>
        </div>
      </div>
    </>
  );
};

export default QuestionsList;
