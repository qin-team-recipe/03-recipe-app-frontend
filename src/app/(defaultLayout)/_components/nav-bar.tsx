'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, ReactElement } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsCart2 } from 'react-icons/bs';
import { HiOutlineSearch } from 'react-icons/hi';
import { LuChefHat } from 'react-icons/lu';

type NavBarItem = {
  key: string;
  sideLabel: string;
  footLabel: string;
  icon: ReactElement;
  path: string;
};

const navbarItem: NavBarItem[] = [
  {
    key: 'search',
    sideLabel: '検索',
    footLabel: '話題を検索',
    icon: <HiOutlineSearch size='1.5rem' />,
    path: '/search',
  },
  {
    key: 'heart',
    sideLabel: 'お気に入り',
    footLabel: 'お気に入り',
    icon: <AiOutlineHeart size='1.5rem' />,
    path: '/heart',
  },
  {
    key: 'shopping',
    sideLabel: '買い物リスト',
    footLabel: 'お買い物',
    icon: <BsCart2 size='1.5rem' />,
    path: '/shopping',
  },
];

export const NavBar: FC = () => {
  const path = usePathname();

  return (
    <nav className='fixed bottom-0 z-50 w-full sm:sticky sm:bottom-auto sm:top-0 sm:w-auto sm:self-start'>
      <div className='hidden sm:my-4 sm:block'>
        <div className='flex gap-x-2'>
          <LuChefHat size='1.5rem' />
          <p>Top Chefs</p>
        </div>
      </div>
      <div className='border-mauve-dim flex border-t sm:flex-col sm:border-none'>
        {navbarItem.map((item) => (
          <Link
            href={item.path}
            key={item.key}
            className={
              path === item.path
                ? 'group text-mauve-normal flex-1 select-none py-0.5 font-bold outline-none sm:-ml-3 sm:py-1'
                : 'group flex-1 select-none py-0.5 outline-none sm:-ml-3 sm:py-1'
            }
          >
            <div className='flex w-full flex-col items-center gap-x-2 transition-colors duration-200 group-focus-visible:bg-mauve-ui sm:hidden sm:w-fit sm:flex-row sm:rounded-full sm:py-2 sm:pl-3 sm:pr-5 sm:group-hover:bg-mauve-4 sm:group-active:bg-mauve-5 dark:sm:group-hover:bg-mauvedark-4 dark:sm:group-active:bg-mauvedark-5'>
              {item.icon}
              <p className='text-xs sm:text-base'>{item.sideLabel}</p>
            </div>
            <div className='hidden w-full flex-col items-center gap-x-2 transition-colors duration-200 group-focus-visible:bg-mauve-ui sm:flex sm:w-fit sm:flex-row sm:rounded-full sm:py-2 sm:pl-3 sm:pr-5 sm:group-hover:bg-mauve-4 sm:group-active:bg-mauve-5 dark:sm:group-hover:bg-mauvedark-4 dark:sm:group-active:bg-mauvedark-5'>
              {item.icon}
              <p className='text-xs sm:text-base'>{item.footLabel}</p>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};
