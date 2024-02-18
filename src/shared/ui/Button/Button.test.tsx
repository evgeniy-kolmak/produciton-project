import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('Button', () => {
  test('default button', () => {
    render(<Button>Text</Button>);
    expect(screen.getByText('Text')).toBeInTheDocument();
  });
  test('button with theme', () => {
    render(<Button theme={ThemeButton.DEFAULT}>Text</Button>);
    expect(screen.getByText('Text')).toHaveClass('default');
  });
});
