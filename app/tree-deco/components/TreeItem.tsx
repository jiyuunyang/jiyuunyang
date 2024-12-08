import { TreeItemType } from '@/app/type';
import Image from 'next/image';
import { MouseEventHandler } from 'react';

interface TreeItemProps {
  type: TreeItemType | null;
  isPointer?: boolean;
  onClick?: MouseEventHandler<HTMLImageElement>;
}

export default function TreeItem({ type, onClick, isPointer }: TreeItemProps) {
  let src = '/tree_candy.png';
  let alt = 'Tree Candy';
  switch (type) {
    case 'ball': {
      src = '/tree_ball.png';
      alt = 'Tree ball';
      break;
    }
    case 'candy': {
      src = '/tree_candy.png';
      alt = 'Tree candy';
      break;
    }
    case 'sock': {
      src = '/tree_sock.png';
      alt = 'Tree sock';
      break;
    }
    case 'star': {
      src = '/tree_star.png';
      alt = 'Tree star';
      break;
    }
    case 'present': {
      src = '/tree_present.png';
      alt = 'Tree present';
      break;
    }
    case null: {
      return <div />;
    }
  }
  return (
    <Image
      className={isPointer ? 'cursor-pointer' : ''}
      aria-hidden
      src={src}
      alt={alt}
      width={30}
      height={30}
      onClick={onClick}
    />
  );
}
