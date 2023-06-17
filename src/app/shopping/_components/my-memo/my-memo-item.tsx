import { FC } from 'react';

import { MyMemoItemCheck } from '@/app/shopping/_components/my-memo/my-memo-item-check';

type Props = {
  item: {
    name: string;
    checked: boolean;
  };
};

export const MyMemoItem: FC<Props> = ({ item }) => {
  return (
    <div className='flex'>
      <MyMemoItemCheck checked={item.checked} />
      <p>{item.name}</p>
    </div>
  );
};
