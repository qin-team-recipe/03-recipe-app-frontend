import { SearchBox } from '@/app/_components/search-box';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <main className='mx-auto flex h-auto max-w-[490px] flex-col pt-2'>
      <SearchBox />
      <div className='flex flex-wrap gap-x-3 gap-y-4 px-4 pt-2'>{children}</div>
    </main>
  );
}
