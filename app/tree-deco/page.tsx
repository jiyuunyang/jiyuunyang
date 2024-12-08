'use client';
import React, { useState, useRef } from 'react';
import TreeItem from './components/TreeItem';
import { TreeItemType } from '../type';

export default function TreeDeco() {
  const dragItem = useRef<null | number>(null); // 드래그할 아이템의 인덱스
  const dragOverItem = useRef<null | number>(null); // 드랍할 위치의 아이템의 인덱스
  const [list, setList] = useState<(TreeItemType | null)[]>(
    new Array(12).fill(null)
  ); // 12개 원소 배열

  // 아이템 클릭시 생성(최대 12개)
  const addItem = (type: TreeItemType) => {
    const newList = [...list];
    const emptyItemIdx = newList.indexOf(null);
    if (emptyItemIdx != -1) {
      newList.splice(emptyItemIdx, 1, type);
    } else {
      alert('꾸밀 수 있는 최대 장식을 초과했습니다');
    }
    setList(newList);
  };

  const deleteItem = () => {
    setList(new Array(12).fill(null));
  };

  // 드래그 시작될 때 실행
  const dragStart = (
    e: React.DragEvent<HTMLDivElement>,
    position: number | null
  ) => {
    dragItem.current = position;
  };

  // 드래그중인 대상이 위로 포개졌을 때
  const dragEnter = (
    e: React.DragEvent<HTMLDivElement>,
    position: number | null
  ) => {
    dragOverItem.current = position;
  };

  // 드랍 (커서 뗐을 때)
  const drop = () => {
    console.log('DRAG ITEM :', dragItem.current);
    console.log('DRAG OVER ITEM:', dragOverItem.current);
    const newList = [...list];
    if (
      dragItem.current != null &&
      dragOverItem.current != null &&
      dragItem.current != null
    ) {
      const dragItemValue = newList[dragItem.current];
      const dragOverItemValue = newList[dragOverItem.current];
      if (dragItem.current == dragOverItem.current) {
        console.log('equal');
        newList.splice(dragItem.current, 1, null);
      } else if (dragItem.current > dragOverItem.current) {
        console.log('more');
        newList.splice(dragItem.current, 1, dragOverItemValue);
        newList.splice(dragOverItem.current, 1, dragItemValue);
      } else {
        console.log('less');
        newList.splice(dragOverItem.current, 1, dragItemValue);
        newList.splice(dragItem.current, 1, dragOverItemValue);
      }
    }
    dragItem.current = null;
    dragOverItem.current = null;
    setList(newList);
  };

  return (
    <div className='items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <header>
        <h1 className='text-3xl'>나만의 트꾸</h1>
      </header>
      <div className='grid grid-cols-6 items-center justify-items-center min-w-screen w-80 p-4 mb-5 mt-10 bg-gray-50/30 rounded-md'>
        <TreeItem type='ball' onClick={() => addItem('ball')} isPointer />
        <TreeItem type='candy' onClick={() => addItem('candy')} isPointer />
        <TreeItem type='present' onClick={() => addItem('present')} isPointer />
        <TreeItem type='sock' onClick={() => addItem('sock')} isPointer />
        <TreeItem type='star' onClick={() => addItem('star')} isPointer />
        <div
          className='flex flex-col justify-center items-center ml-3 text-xs cursor-pointer'
          onClick={deleteItem}
        >
          <i className='fa-solid fa-rotate-right fa-2x text-gray-900'></i>
          초기화
        </div>
      </div>
      <div
        className="
      grid 
      justify-items-center
      items-center
      w-[320px]
      h-[560px]
      [&>*:nth-child(1)]:[grid-area:a]
      [&>*:nth-child(2)]:[grid-area:b]
      [&>*:nth-child(3)]:[grid-area:c]
      [&>*:nth-child(4)]:[grid-area:d]
      [&>*:nth-child(5)]:[grid-area:e]
      [&>*:nth-child(6)]:[grid-area:f]
      [&>*:nth-child(7)]:[grid-area:g]
      [&>*:nth-child(8)]:[grid-area:h]
      [&>*:nth-child(9)]:[grid-area:i]
      [&>*:nth-child(10)]:[grid-area:j]
      [&>*:nth-child(11)]:[grid-area:k]
      [&>*:nth-child(12)]:[grid-area:l]
      bg-[url('/empty_tree.png')]
      bg-contain
      bg-center
      bg-no-repeat
      "
        style={{
          gridTemplateAreas: `
          ". a a a ."
          ". b c c ."
          "d d e f ."
          "g h h i i"
          "j j k l ."
          ". . . . ."
        `,
        }}
      >
        {list &&
          list.map((item, idx) => (
            <div
              className='h-[40px] w-[40px]'
              key={idx}
              draggable
              onDragStart={(e) => dragStart(e, idx)}
              onDragEnter={(e) => dragEnter(e, idx)}
              onDragEnd={drop}
              onDragOver={(e) => e.preventDefault()}
            >
              <TreeItem type={item} />
            </div>
          ))}
      </div>
    </div>
  );
}
