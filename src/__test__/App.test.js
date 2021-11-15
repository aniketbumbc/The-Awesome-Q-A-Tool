import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  test('Should render header component correctly', () => {
    render(<App />);
    const headerComponentElement = screen.getByRole('heading', { level: 4 });
    expect(headerComponentElement).toBeInTheDocument();
  });

  test('Should render questionlist component correctly with all h3 tags', () => {
    render(<App />);
    const questionListComponentElement = screen.getAllByRole('heading', {
      level: 3,
    });
    expect(questionListComponentElement.length).toBe(2);
  });
  test('Should render add question component correctly with create button', () => {
    render(<App />);
    const addQuestionComponentElement = screen.getByRole('button', {
      name: 'Create / Add Question',
    });
    expect(addQuestionComponentElement).toBeInTheDocument();
  });
});
