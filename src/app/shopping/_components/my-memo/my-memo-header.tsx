import { FC } from 'react';

import { AddMyMemoButton } from '@/app/shopping/_components/my-memo/add-my-memo-button';

export const MyMemoHeader: FC = () => {
  return (
    <div className='flex items-end justify-between px-4'>
      <h2 className='text-xl font-bold'>じぶんメモ</h2>
      <AddMyMemoButton />
    </div>
  );
};
