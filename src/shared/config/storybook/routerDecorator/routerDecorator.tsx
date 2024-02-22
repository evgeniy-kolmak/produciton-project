import { ElementType } from 'react';
import { BrowserRouter } from 'react-router-dom';

// eslint-disable-next-line react/display-name
export const RouterDecorator = () => (Story: ElementType) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
);
