import React, { useState } from 'react';
import { FaUserCircle, FaRegThumbsUp, FaRegThumbsDown, FaRegCommentDots } from 'react-icons/fa';
import timeAgo from '../utils/index';

export default function Thread({
  title,
  body,
  category,
  createdAt,
  ownerId,
  upVotesBy,
  downVotesBy,
  totalComments,
}) {
  return (
    <div className="card w-full p-[15px] text-[0.85rem] font-normal cursor-default border-solid border-b-[1px]  border-[#c8d4de6b] transition ease duration-[200ms] bg-transparent hover:bg-[#15191e]">
      {/* header card */}
      <header className="card__header flex justify-between items-center">
        <div className="card__profile flex items-center">
          <FaUserCircle className="text-[2em] text-inherit" />
          <span className="card__owner-name text-[0.95em] pl-[10px] font-bold">{ownerId}</span>
        </div>
        <span className="card__created text-[0.9em]">{timeAgo(createdAt)}</span>
      </header>
      {/* body card */}
      <main className="card__body py-[10px]">
        <a href="#" className="card__title text-[1.15em] font-[700] no-underline text-inherit">
          {title}
        </a>
        <p className="card__desc pt-[10px] font-[0.95em]">{body}</p>
        <div className="card__category-container flex gap-[8px] mt-[20px]">
          <span className=" text-primary font-[700] text-[0.75em] rounded-[3.5px] py-[2px] px-[5.5px] border-solid border-transcript ">
            {`# ${category}`}
          </span>
        </div>
      </main>
      {/* footer card */}
      <footer className="card__footer pt-[8px] pl-[2px] flex gap-[20px]">
        <button className="flex items-center gap-[4px] text-inherit border-none bg-transparent cursor-pointer">
          <i className="text-[1.3em] transition ease duration-[100ms]">
            <FaRegThumbsUp />
          </i>
          <span className="text-[1em]">{upVotesBy.length}</span>
        </button>
        <button className="flex items-center gap-[4px] text-inherit border-none bg-transparent cursor-pointer">
          <i className="text-[1.3em] transition ease duration-[100ms]">
            <FaRegThumbsDown />
          </i>
          <span>{downVotesBy.length}</span>
        </button>
        <button className="flex items-center gap-[4px] text-inherit border-none bg-transparent cursor-pointer">
          <i className="text-[1.3em] transition ease duration-[100ms]">
            <FaRegCommentDots />
          </i>
          <span>{totalComments}</span>
        </button>
      </footer>
    </div>
  );
}
