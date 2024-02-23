import type { Meta, StoryObj } from '@storybook/react';
import { ErrorBoundary } from './ErrorBoundary';
import { RouterDecorator } from 'shared/config/storybook/routerDecorator/routerDecorator';

const meta = {
  title: 'widgets/ErrorBoundary',
  component: ErrorBoundary,
} satisfies Meta<typeof ErrorBoundary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Error: Story = {
  decorators: [RouterDecorator()],
};
