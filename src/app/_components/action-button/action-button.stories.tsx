import type { Meta, StoryObj } from '@storybook/react';

import { ActionButton } from './action-button';

const meta: Meta<typeof ActionButton> = {
  title: 'Recipe/ActionButton',
  component: ActionButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ActionButton>;

export const Primary: Story = {
  args: {
    truthyLabel: 'お気に入りから削除',
    falsyLabel: 'お気に入りに追加',
    // isActive: false,
  },
};
