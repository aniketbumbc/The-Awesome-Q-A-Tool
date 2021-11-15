import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
  test('Should have correct header text in the document', () => {
    render(<Header />);
    expect(screen.getByText('The Awesome Q/A Tool')).toBeInTheDocument();
  });
  test('Should not have incorrect header text in the document', () => {
    render(<Header />);
    expect(screen.queryByText('The Awesome')).not.toBeInTheDocument();
  });
});
