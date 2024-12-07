import Image from 'next/image';

export default function TreeDeco() {
  return (
    <div className='items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      나만의 트꾸
      <div className='grid grid-cols-5 items-center justify-items-center min-w-screen w-80 p-5 m-5 bg-gray-50/30 rounded-md'>
        <Image
          aria-hidden
          src='/tree_ball.png'
          alt='Tree ball'
          width={30}
          height={30}
        />
        <Image
          aria-hidden
          src='/tree_candy.png'
          alt='Tree candy'
          width={30}
          height={30}
        />
        <Image
          aria-hidden
          src='/tree_present.png'
          alt='Tree present'
          width={30}
          height={30}
        />
        <Image
          aria-hidden
          src='/tree_sock.png'
          alt='Tree sock'
          width={30}
          height={30}
        />
        <Image
          aria-hidden
          src='/tree_star.png'
          alt='Tree star'
          width={30}
          height={30}
        />
      </div>
      <Image
        aria-hidden
        src='/empty_tree.png'
        alt='Empty tree image'
        width={300}
        height={300}
      />
    </div>
  );
}
