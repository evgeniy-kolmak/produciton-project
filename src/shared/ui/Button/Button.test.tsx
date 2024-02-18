import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('Button', () => {
  test('default button', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button>Text</Button>);
    expect(screen.getByText('Text')).toBeInTheDocument();
  });
  test('button with theme', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button theme={ThemeButton.DEFAULT}>Text</Button>);
    expect(screen.getByText('Text')).toHaveClass('default');
  });
});
