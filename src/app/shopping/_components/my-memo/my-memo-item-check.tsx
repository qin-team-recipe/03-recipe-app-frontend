import { FC } from 'react';
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleFill,
} from 'react-icons/ri';

type Props = {
  checked: boolean;
};

export const MyMemoItemCheck: FC<Props> = ({ checked }) => {
  return checked ? <RiCheckboxCircleFill /> : <RiCheckboxBlankCircleLine />;
};
