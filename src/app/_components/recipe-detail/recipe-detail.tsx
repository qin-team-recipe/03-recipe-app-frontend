import Image from 'next/image';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { MdArrowBack } from 'react-icons/md';

type Props = {
  chefName: string;
  chefId: string;
  recipeTitle: string;
  description: string;
  imgUrl?: string;
  favorite: number;
  isFavorite: boolean;
};

export const RecipeDetail: React.FC<Props & PropsWithChildren> = ({
  chefName,
  chefId,
  recipeTitle,
  description,
  imgUrl = '',
  favorite = 0,
  children,
}) => {
  return (
    <div>
      <div className='relative'>
        <div className='aspect-square  bg-red-200'>
          {imgUrl && <Image alt='image' src={imgUrl} />}
        </div>
        <div className='absolute left-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-black/20 p-1'>
          <MdArrowBack className='h-8 w-8 text-white' />
        </div>
      </div>
      <div className='flex flex-col items-start gap-4'>
        <div className='flex flex-col gap-2'>
          <p className='text-xl font-bold text-[#1A1523]'>{recipeTitle}</p>
          <p className='text-[#1A1523]'>{description}</p>
        </div>
        <div className='flex items-center gap-4'>
          {/* TODO: シェフ詳細へのリンク設定 */}
          <Link href={`/chef/${chefId}`} className='flex items-center gap-2'>
            {/* シェフ画像設定 */}
            <div className='h-5 w-5 rounded-full bg-[#D9D9D9]'></div>
            <p className='text-[#6F6E77]'>{chefName}</p>
          </Link>
          {favorite !== 0 && (
            <div className='flex items-center gap-2'>
              <p className='font-bold'>{favorite}</p>
              <p className='text-[#6F6E77]'>お気に入り</p>
            </div>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};
