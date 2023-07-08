import type { Meta, StoryObj } from '@storybook/react';

import { RecipeDetail } from './recipe-detail';

const meta: Meta<typeof RecipeDetail> = {
  title: 'Recipe/RecipeDetail',
  component: RecipeDetail,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RecipeDetail>;

export const Primary: Story = {
  args: {
    recipeTitle: 'グラタン',
    description:
      'はじめてでも失敗なく作れるような、鶏肉や玉ねぎを具とした基本的なマカロニグラタンのレシピです。ソースと具材炒めを別器具で行うレシピも多いですが、グラタンの具を炒めたフライパンの中で、そのままホワイトソースを仕上げる手軽な作り方にしています。ぜひお試しください。',
    chefName: 'しまぶーシェフ',
    favorite: 1,
    isFavorite: false,
  },
};
