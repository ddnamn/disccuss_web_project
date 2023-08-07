import React, { useState } from 'react';
import Card from './Card';

export default function CardList({ threads }) {
  console.log(threads)
  return (
    <div className="threads__list w-full flex flex-col justify-center items-center gap-[20px]">
      {threads.map((thread) => (
        <Card key={thread.id} {...thread} />
      ))}
    </div>
  );
}
