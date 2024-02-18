import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { RenderWithTranslation } from 'shared/lib/helpers/tests/renderWithTranslation/RenderWithTranslation';

describe('Sidebar', () => {
  test('checking for sidebar', () => {
    RenderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
  test('checking for sidebar', () => {
    RenderWithTranslation(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
