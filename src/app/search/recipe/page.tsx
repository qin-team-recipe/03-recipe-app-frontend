import Link from 'next/link';
import { AiOutlineHeart } from 'react-icons/ai';

type RecipeList = {
  id: string;
  img: string;
  title: string;
  chef: string;
  like: number;
};

const recipeList: RecipeList[] = [
  {
    id: '1',
    img: '',
    title: 'トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン',
    chef: 'ウルトラハイパー超すごいしまぶーシェフ',
    like: 1234,
  },
  {
    id: '2',
    img: '',
    title: 'トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン',
    chef: 'ウルトラハイパー超すごいしまぶーシェフ',
    like: 1234,
  },
  {
    id: '3',
    img: '',
    title: 'グラタン',
    chef: 'マイレシピ',
    like: 0,
  },
  {
    id: '4',
    img: '',
    title: 'トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン',
    chef: 'ウルトラハイパー超すごいしまぶーシェフ',
    like: 1234,
  },
  {
    id: '5',
    img: '',
    title: 'トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン',
    chef: 'ウルトラハイパー超すごいしまぶーシェフ',
    like: 1234,
  },
];

export default async function SearchRecipe() {
  return (
    <>
      {recipeList.map((item) => (
        <Link
          href={`/recipe/${item.id}`}
          key={item.id}
          className='w-[calc(50%_-_6px)] '
        >
          <div className='relative aspect-square rounded-2xl bg-red-200'>
            {/* imgが入る */}
            <div></div>
            {/* マイレシピだったらライクは仕様上表示させない？ */}
            {item.like !== 0 && (
              <div className='absolute right-2 top-2 flex h-[26px] w-[67px] items-center justify-center gap-x-1 rounded-2xl bg-[#040013]/50'>
                <AiOutlineHeart size='14px' color='white' />
                <p className='text-sm text-white'>{item.like}</p>
              </div>
            )}
          </div>
          <p className='pt-2 text-xs font-bold leading-[18px] line-clamp-2'>
            {item.title}
          </p>
          <p className='truncate pt-1 text-[10px] leading-3'>{item.chef}</p>
        </Link>
      ))}
    </>
  );
}
