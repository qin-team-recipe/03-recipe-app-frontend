'use client';

import Link from 'next/link';
import { FC, ReactElement } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsCart2 } from 'react-icons/bs';
import { HiOutlineSearch } from 'react-icons/hi';
import { LuChefHat } from 'react-icons/lu';
import { tv } from 'tailwind-variants';

import { useGetWindowSize } from '@/hooks/useGetWindowSize';

// pathは仮置き
type NavBarItem = {
  key: string;
  label: string;
  icon: ReactElement;
  path: string;
};

// eslint-disable-next-line tailwindcss/no-custom-classname
const navBar = tv(
  {
    slots: {
      navContainer:
        'absolute bottom-0 h-[5.25rem] w-full bg-[#FDFCFD] pt-2 shadow-top',
      chefContainer: 'invisible h-0',
      chefText: 'text-2xl font-bold',
      buttonContainer: 'flex',
      icon: 'flex h-12 flex-1 flex-col items-center gap-y-1',
      label: 'text-[0.625rem]',
    },
    variants: {
      size: {
        large: {
          navContainer:
            'static order-1 flex h-auto w-60 flex-col gap-y-10 pt-5 shadow-none',
          chefContainer: 'visible flex h-5 items-center gap-x-3',
          buttonContainer: 'flex-col gap-y-6',
          icon: 'flex-row gap-x-3 gap-y-0',
          label: 'text-2xl',
        },
      },
    },
  },
  {
    responsiveVariants: ['lg'],
  }
);

export const NavBar: FC = () => {
  const {
    navContainer,
    chefContainer,
    chefText,
    buttonContainer,
    icon,
    label,
  } = navBar({
    size: {
      lg: 'large',
    },
  });
  const { width } = useGetWindowSize();

  // useRouterを使用する想定の仮置き
  const path = '/search';

  const navbarItem: NavBarItem[] = [
    {
      key: 'search',
      label: `${width > 1024 ? '話題を検索' : '検索'}`,
      icon: <HiOutlineSearch size='1.5rem' />,
      path: '/search',
    },
    {
      key: 'heart',
      label: 'お気に入り',
      icon: <AiOutlineHeart size='1.5rem' />,
      path: '/heart',
    },
    {
      key: 'shopping',
      label: `${width > 1024 ? '買い物リスト' : 'お買い物'}`,
      icon: <BsCart2 size='1.5rem' />,
      path: '/shopping',
    },
  ];

  return (
    <div className={navContainer()}>
      <div className={chefContainer()}>
        <LuChefHat size='1.5rem' />
        <p className={chefText()}>Top Chefs</p>
      </div>
      <div className={buttonContainer()}>
        {navbarItem.map((item) => (
          <Link key={item.key} href={item.path}>
            <button
              className={icon({
                class:
                  item.path === path
                    ? 'text-[#CA3214]'
                    : 'text-[#6F6E77] lg:text-[#1A1523]',
              })}
            >
              {item.icon}
              <p
                className={label({
                  class:
                    item.path === path
                      ? 'text-[#CA3214]'
                      : 'text-[#6F6E77] lg:text-[#1A1523]',
                })}
              >
                {item.label}
              </p>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};
