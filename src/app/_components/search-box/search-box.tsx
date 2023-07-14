'use client';

import Link from 'next/link';
import { FC } from 'react';
import { BiArrowBack } from 'react-icons/bi';

import { SearchInput } from '@/app/_components/search-input';
import { Tabs } from '@/app/_components/tabs';

const tabs = [
  {
    path: `/search/chef`,
    tabText: 'シェフ',
  },
  {
    path: `/search/recipe`,
    tabText: 'レシピ',
  },
];

export const SearchBox: FC = () => {
  return (
    <>
      <div className='mb-2 flex h-9 items-center gap-x-4 px-4'>
        <Link href='/'>
          <BiArrowBack size='1.25rem' color='#6F6E77' />
        </Link>
        <SearchInput />
      </div>
      <Tabs tabs={tabs} />
      <p className='gap-0 px-4 pt-5 text-xl font-bold'>話題のレシピ</p>
    </>
  );
};
