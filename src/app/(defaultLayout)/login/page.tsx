import { Header } from '@/app/(defaultLayout)/login/_components/header';
import { LoginContent } from '@/app/(defaultLayout)/login/_components/login-content';

export default function Page() {
  return (
    <>
      <Header />
      <div className='p-4 text-center'>
        <LoginContent />
      </div>
    </>
  );
}
