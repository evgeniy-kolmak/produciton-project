import { Theme } from 'app/providers/ThemeProvider';
import { ElementType } from 'react';

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (Story: ElementType) => (
  <div className={`app ${theme}`}>
    <Story />
  </div>
);
