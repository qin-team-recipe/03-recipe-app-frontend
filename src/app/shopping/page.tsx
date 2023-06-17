import { Header } from '@/app/shopping/_components/header';
import { MyMemo } from '@/app/shopping/_components/my-memo';

export default function Shopping() {
  return (
    <>
      <Header />
      <div className='pt-5'>
        <MyMemo />
      </div>
    </>
  );
}
