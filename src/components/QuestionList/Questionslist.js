import { useState, useRef } from 'react';
import './QuestionList.css';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
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

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const showAnswer = (id) => {
  const CState = document.getElementById(id);
  CState.style.display = CState.style.display !== 'block' ? 'block' : 'none';
};

const QuestionsList = () => {
  const [editQuestion, setEditQuestion] = useState(null);
  const [openModal, setOpenModal] = useState(null);
  const editTextInput = useRef('');

  const handleEditQuestion = (question) => {
    console.log(question);
    setEditQuestion(question);
    setOpenModal({ open: true });

    console.log(openModal);
  };

  const handleCloseModal = () => {
    setOpenModal({ open: false });
    setEditQuestion(null);
  };

  const updateQuestion = () => {
    console.log(editTextInput.current.value);
    console.log(editQuestion);
    setOpenModal({ open: false });
    setEditQuestion(null);
  };

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
                  <i
                    className='fas fa-edit'
                    onClick={() => handleEditQuestion(question)}
                  ></i>
                  <i className='far fa-trash-alt'></i>
                </div>
              </div>
            ))}

          <button className='sort-question'>Sort Questions</button>
          <button className='remove-question'>Remove All Questions</button>
        </div>
        {editQuestion && (
          <div className='edit-modal'>
            <Modal
              open={openModal}
              onClose={handleCloseModal}
              closeOnOverlayClick={false}
              styles={{ modal: { top: '40%' } }}
            >
              <h3 className='edit-title'>Edit Your Question </h3>
              <input
                ref={editTextInput}
                className='input-edit-question'
                type='text'
                defaultValue={editQuestion.question}
                autoComplete='off'
                size='99'
              />
              <button className='save-btn' onClick={updateQuestion}>
                Save
              </button>
            </Modal>
          </div>
        )}
      </div>
    </>
  );
};

export default QuestionsList;
