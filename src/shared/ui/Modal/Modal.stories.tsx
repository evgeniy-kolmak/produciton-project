import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'shared/Modal',
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. At ullam repudiandae magni ratione autem! Mollitia, odit porro velit ratione, consequatur libero deleniti quia quod accusamus delectus unde numquam cupiditate aut.',
    isOpen: true,
  },
};
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. At ullam repudiandae magni ratione autem! Mollitia, odit porro velit ratione, consequatur libero deleniti quia quod accusamus delectus unde numquam cupiditate aut.',
    isOpen: true,
  },
};
