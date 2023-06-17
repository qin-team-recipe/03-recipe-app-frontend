import { FC } from 'react';

import { MyMemoHeader } from '@/app/shopping/_components/my-memo/my-memo-header';
import { MyMemoItem } from '@/app/shopping/_components/my-memo/my-memo-item';

export const MyMemo: FC = () => {
  return (
    <>
      <div className='pb-2'>
        <MyMemoHeader />
      </div>
      <MyMemoItem item={{ name: 'キャベツ', checked: true }} />
    </>
  );
};
