import { Preview } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from '../../src/shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export default preview;
