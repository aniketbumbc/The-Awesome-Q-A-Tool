import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './QuestionList.css';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import InfoSection from '../Infosection/InfoSection';
import { useAction } from '../../Redux/hooks/useAction';

const showAnswer = (id) => {
  const answerState = document.getElementById(id);
  answerState.style.display =
    answerState.style.display !== 'block' ? 'block' : 'none';
};

const QuestionsList = () => {
  const [editQuestion, setEditQuestion] = useState(null);
  const [openModal, setOpenModal] = useState(null);
  const [sortingDirection, setSortingDirection] = useState('DEC');
  const [questionsData, setQuestionsData] = useState([]);
  const editTextInput = useRef('');
  const questions = useSelector((state) => state.questions.questions);
  const { updateQuestion, deleteQuestion, removeQuestions } = useAction();

  useEffect(() => {
    setQuestionsData(questions);
  }, [questions]);

  const handleUpdateQuestion = (question) => {
    setEditQuestion(question);
    setOpenModal({ open: true });
  };

  const handleCloseModal = () => {
    setOpenModal({ open: false });
    setEditQuestion(null);
  };

  const saveUpdatedQuestion = () => {
    if (!editTextInput.current.value.length) {
      editTextInput.current.value = editQuestion.question;
    }
    updateQuestion(editQuestion.id, editTextInput.current.value);
    setOpenModal({ open: false });
    setEditQuestion(null);
  };

  const handleDeleteQuestion = (id) => {
    deleteQuestion(id);
  };
  const sortQuestions = () => {
    if (sortingDirection === 'DEC') {
      setSortingDirection('ACE');
      questionsData.sort((a, b) => b.question.localeCompare(a.question));
    } else {
      setSortingDirection('DEC');
      questionsData.sort((a, b) => a.question.localeCompare(b.question));
    }
  };

  const removeAllQuestions = () => {
    removeQuestions();
  };

  return (
    <>
      <div className='container'>
        <InfoSection questionsCount={questionsData.length} />
        <div className='questionslist-container'>
          <h3
            className='questionlist-title tooltip'
            data-tooltip='Here you find created questions and their answers.'
          >
            Questions List
          </h3>
          {!questionsData.length && (
            <p className='alert-warning' role='alert'>
              No questions yet :-(
            </p>
          )}

          {!!questionsData.length &&
            questionsData.map((question) => (
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
                    onClick={() => handleUpdateQuestion(question)}
                  ></i>
                  <i
                    className='far fa-trash-alt'
                    onClick={() => handleDeleteQuestion(question.id)}
                  ></i>
                </div>
              </div>
            ))}
          {!!questionsData.length && (
            <>
              <button className='sort-question' onClick={sortQuestions}>
                Sort Questions
              </button>
              <button className='remove-question' onClick={removeAllQuestions}>
                Remove All Questions
              </button>
            </>
          )}
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
                maxLength='50'
                size='99'
              />
              <button className='save-btn' onClick={saveUpdatedQuestion}>
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
