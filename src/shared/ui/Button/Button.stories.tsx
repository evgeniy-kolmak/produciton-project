import type { Meta, StoryObj } from '@storybook/react';
import { Button, ThemeButton } from './Button';

const meta = {
  title: 'shared/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    theme: ThemeButton.PRIMARY,
    children: 'Button',
  },
};

export const Outline: Story = {
  args: {
    theme: ThemeButton.OUTLINE,
    children: 'Button',
  },
};
export const Default: Story = {
  args: {
    theme: ThemeButton.DEFAULT,
    children: 'Button',
  },
};

export const Icon: Story = {
  args: {
    theme: ThemeButton.DEFAULT,
    children: 'Icon',
  },
};
