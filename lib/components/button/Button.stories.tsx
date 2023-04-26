import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'component/button',
  component: Button,
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'storybook component',
  },
};
