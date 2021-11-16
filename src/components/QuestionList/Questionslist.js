import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAction } from '../../Redux/hooks/useAction';
import { Modal } from 'react-responsive-modal';
import InfoSection from '../Infosection/InfoSection';
import './QuestionList.css';
import 'react-responsive-modal/styles.css';

/**
 * Method showAnswer when click on questions.
 * @param {*question Id} id
 */
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
  const questions = useSelector((state) => state.questionData.questions);
  const {
    updateQuestion,
    deleteQuestion,
    removeQuestions,
    displayLoader,
  } = useAction();

  useEffect(() => {
    setQuestionsData(questions);
    displayLoader(false);
  }, [questions, displayLoader]);

  /**
   * Method showes edit modal for updation
   * Set state for edit question.
   * @param {*} question
   */
  const showEditModal = (question) => {
    setEditQuestion(question);
    setOpenModal({ open: true });
  };

  /**
   *  Method close modal when click on close icon.
   * set edit question to null
   */
  const handleCloseModal = () => {
    setOpenModal({ open: false });
    setEditQuestion(null);
  };

  /**
   * Method save updated question.
   * if question is empty it keep same question so blank question is not accepted.
   * dispatch updateQuestion method to store
   */
  const saveUpdatedQuestion = () => {
    if (!editTextInput.current.value.length) {
      editTextInput.current.value = editQuestion.question;
    }
    updateQuestion(editQuestion.id, editTextInput.current.value);
    setOpenModal({ open: false });
    setEditQuestion(null);
  };

  /**
   * Method accept delete id
   * dispatch to store deleteQuestion method
   * @param {question id} id
   */
  const handleDeleteQuestion = (id) => {
    deleteQuestion(id);
  };

  /**
   * Method sort question ascending and descending order.
   */
  const sortQuestions = () => {
    if (sortingDirection === 'DEC') {
      setSortingDirection('ACE');
      questionsData.sort((a, b) => b.question.localeCompare(a.question));
    } else {
      setSortingDirection('DEC');
      questionsData.sort((a, b) => a.question.localeCompare(b.question));
    }
  };

  /**
   *  Method removed all question call dispatch method
   */
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
                <p
                  onClick={() => showAnswer(question.id)}
                  className='question'
                  data-testid='question'
                >
                  {question.question}
                </p>
                <span className='answer' id={question.id} data-testid='answer'>
                  {question.answer}
                </span>
                <div className='icons'>
                  <i
                    className='fas fa-edit'
                    onClick={() => showEditModal(question)}
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
              <div className='actions'>
                <button className='sort-question' onClick={sortQuestions}>
                  Sort Questions
                </button>
                <button
                  className='remove-question'
                  onClick={removeAllQuestions}
                >
                  Remove All Questions
                </button>
              </div>
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
