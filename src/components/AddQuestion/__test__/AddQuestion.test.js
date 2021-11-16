import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import AddQuestion from '../AddQuestion';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

describe('AddQuestion', () => {
  const initialState = {
    questions: [
      {
        id: '23',
        question: 'How to add a question?',
        answer: 'Just use the form below!!!!',
        dealy: false,
      },
    ],
    loading: false,
  };
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <AddQuestion />
      </Provider>
    );
  });
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  test('Should have correct header text in the document', () => {
    expect(screen.getByText('Create Question')).toBeInTheDocument();
  });

  test('Should not have incorrect header text in the document', () => {
    expect(screen.queryByText('create question')).not.toBeInTheDocument();
  });

  test('Should have corret input lables for question and answer', () => {
    const questionLableElem = screen.getByLabelText('Question');
    const answerLableElem = screen.getByLabelText('Answer');
    const dealyLableElem = screen.getByLabelText('Delay');

    expect(questionLableElem).toBeInTheDocument();
    expect(answerLableElem).toBeInTheDocument();
    expect(dealyLableElem).toBeInTheDocument();
  });

  test('Should not have incorret input lables for question and answer', () => {
    const questionLableElem = screen.queryByText('question');
    const answerLableElem = screen.queryByText('answer');
    const dealyLableElem = screen.queryByText('dealy');

    expect(questionLableElem).not.toBeInTheDocument();
    expect(answerLableElem).not.toBeInTheDocument();
    expect(dealyLableElem).not.toBeInTheDocument();
  });

  test('Should button has correct initial color', () => {
    const submitBtnEle = screen.getByRole('button', {
      name: 'Create / Add Question',
    });
    expect(submitBtnEle).toBeInTheDocument();
  });

  test('Should set correct question value input value when user type question', () => {
    const questionLableElem = screen.getByLabelText('Question');

    expect(questionLableElem).toHaveValue('');
    expect(screen.getByTestId('form')).toHaveFormValues({ question: '' });

    fireEvent.change(questionLableElem, {
      target: { value: 'How to test application?' },
    });

    expect(questionLableElem).toHaveValue('How to test application?');
    expect(screen.getByTestId('form')).toHaveFormValues({
      question: 'How to test application?',
    });
  });

  test('Should set correct question max value length  when input value is out of limt', () => {
    const questionLableElem = screen.getByLabelText('Question');
    const longQuestion =
      'How to test application?How to test application?How to test application?';

    expect(questionLableElem.maxLength).toBe(50);

    fireEvent.change(questionLableElem, {
      target: { value: longQuestion },
    });
    userEvent.type(questionLableElem, longQuestion);

    expect(questionLableElem.value).toEqual(
      'How to test application?How to test application?Ho'
    );

    expect(questionLableElem.value.length).toBe(50);
    expect(screen.getByTestId('form')).toHaveFormValues({
      question: 'How to test application?How to test application?Ho',
    });
  });

  test('Should set incorrect question max value when input value is out of limt', () => {
    const questionLableElem = screen.getByLabelText('Question');
    const longQuestion =
      'How to test application?How to test application?How to test application?';

    fireEvent.change(questionLableElem, {
      target: { value: longQuestion },
    });
    userEvent.type(questionLableElem, longQuestion);

    expect(questionLableElem.value).not.toEqual(
      'How to test application?How to test application?How to test application?'
    );

    expect(questionLableElem.value.length).not.toBe(90);
    expect(screen.getByTestId('form')).not.toHaveFormValues({
      question:
        'How to test application?How to test application?How to test application?',
    });
  });

  test('Should set correct answer values textarea value when user type answer', () => {
    const answerElem = screen.getByLabelText('Answer');

    expect(answerElem).toHaveValue('');
    expect(screen.getByTestId('form')).toHaveFormValues({ answer: '' });

    fireEvent.change(answerElem, {
      target: { value: 'type command npm test' },
    });

    expect(answerElem).toHaveValue('type command npm test');
    expect(screen.getByTestId('form')).toHaveFormValues({
      answer: 'type command npm test',
    });
  });

  test('Should set correct answer,question and dealy form values when user click on create button and after reset form', () => {
    const answerElem = screen.getByLabelText('Answer');
    const questionLableElem = screen.getByLabelText('Question');
    const dealycheckbox = screen.getByTestId('dealy-checkbox');
    const submitBtnEle = screen.getByRole('button', {
      name: 'Create / Add Question',
    });

    fireEvent.change(questionLableElem, {
      target: { value: 'How to test application?' },
    });
    fireEvent.change(answerElem, {
      target: { value: 'type command npm test' },
    });

    expect(dealycheckbox.checked).toEqual(false);
    fireEvent.click(dealycheckbox);
    expect(dealycheckbox.checked).toEqual(true);

    expect(screen.getByTestId('form')).toHaveFormValues({
      answer: 'type command npm test',
      question: 'How to test application?',
    });
    fireEvent.click(submitBtnEle);

    expect(screen.getByTestId('form')).toHaveFormValues({
      answer: '',
      question: '',
    });

    expect(dealycheckbox.checked).toEqual(false);
  });
});
