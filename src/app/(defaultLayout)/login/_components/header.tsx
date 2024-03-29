import { cookies } from 'next/headers';
import { FC } from 'react';

import { getTitle } from '@/app/(defaultLayout)/login/lib';
import { AFTER_LOGIN_URL_COOKIE_KEY, FRONT_BASE_URL } from '@/constants';

export const Header: FC = () => {
  const cookieStore = cookies();
  const afterLoginUrl =
    cookieStore.get(AFTER_LOGIN_URL_COOKIE_KEY)?.value ?? FRONT_BASE_URL;

  return (
    <div className='border-mauve-dim flex h-12 items-center justify-center border-b'>
      <h1 className='mx-auto font-bold'>{getTitle(afterLoginUrl)}</h1>
    </div>
  );
};
