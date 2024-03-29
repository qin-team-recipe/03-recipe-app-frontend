import { FC } from 'react';

import { MemoHeader } from '@/app/(defaultLayout)/shopping/_components/memo/memo-header';
import { MemoIngredient } from '@/app/(defaultLayout)/shopping/_components/memo/memo-ingredient';

const ingredients = [
  { name: 'キャベツ', checked: true },
  { name: 'にんじん', checked: false },
  { name: 'じゃがいも', checked: true },
  { name: 'たまねぎ', checked: false },
  {
    name: 'ぶた肉ぶた肉ぶた肉ぶた肉ぶた肉ぶた肉ぶた肉ぶた肉ぶた肉ぶた肉ぶた肉ぶた肉ぶた肉ぶた肉ぶた肉ぶた肉ぶた肉ぶた肉ぶた肉ぶた肉ぶた肉ぶた肉ぶた肉ぶた肉ぶた肉ぶた肉ぶた肉ぶた肉ぶた肉ぶた肉ぶた肉ぶた肉ぶた肉ぶた肉ぶた肉ぶた肉ぶた肉ぶた肉',
    checked: true,
  },
];

export const MyMemo: FC = () => {
  return (
    <>
      <div className='border-mauve-dim border-b pb-2'>
        <MemoHeader isRecipe={false} />
      </div>
      {ingredients.map((ingredient) => (
        <MemoIngredient key={ingredient.name} ingredient={ingredient} />
      ))}
    </>
  );
};
