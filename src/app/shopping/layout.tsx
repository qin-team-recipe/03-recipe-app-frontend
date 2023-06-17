// MEMO: /page.tsxのコピペ。全体のレイアウト修正するときに共通化したほうが良さそう。
import { tv } from 'tailwind-variants';

import { NavBar } from '@/app/_components/navBar';

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

export default function ShoppingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { main, content } = home({
    size: {
      lg: 'large',
    },
  });

  return (
    <main className={main()}>
      <div className={content()}>{children}</div>
      <NavBar />
    </main>
  );
}
