import { render, screen } from '@testing-library/react';
import InfoSection from '../InfoSection';

describe('InforSection', () => {
  test('Should have correct paragraph text when all questions are deleted.', () => {
    render(<InfoSection questionsCount={0} />);
    const paragraphEle = screen.getByText(/Here you can find no questions/i);
    expect(paragraphEle).toBeInTheDocument();
  });

  test('Should have correct paragraph text when 3 questions added.', () => {
    render(<InfoSection questionsCount={3} />);
    const paragraphEle = screen.getByText(/Here you can find 3 questions/i);
    expect(paragraphEle).toBeInTheDocument();
  });

  test('Should not show incorrect paragraph text when 3 questions added.', () => {
    render(<InfoSection questionsCount={3} />);
    const paragraphEle = screen.queryByText(/Here you can find no questions/i);
    expect(paragraphEle).not.toBeInTheDocument();
  });
});
