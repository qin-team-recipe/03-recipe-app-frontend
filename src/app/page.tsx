import { cookies } from 'next/headers';
import { tv } from 'tailwind-variants';

import { NavBar } from '@/app/_components/navBar';
import { Sample } from '@/app/_components/sample';

// eslint-disable-next-line tailwindcss/no-custom-classname
const home = tv(
  {
    slots: {
      main: '',
      content: '',
    },
    variants: {
      size: {
        large: {
          main: 'mx-auto flex w-8/12 gap-x-4',
          content: 'order-2',
        },
      },
    },
  },
  {
    responsiveVariants: ['lg'],
  }
);

export default function Home() {
  console.log(cookies().get('access_token'));

  const { main, content } = home({
    size: {
      lg: 'large',
    },
  });

  return (
    <main className={main()}>
      <div className={content()}>
        <h1>レシピアプリ</h1>
        <Sample text='sample' />
      </div>
      <NavBar />
    </main>
  );
}
