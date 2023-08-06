import React from 'react';
import { FaUserCircle, FaRegThumbsUp, FaRegThumbsDown, FaRegCommentDots } from 'react-icons/fa';
import timeAgo from '../utils/index';
import { useParams } from 'react-router-dom';
// "detailThread": {
//   "id": "thread-1",
//   "title": "Thread Pertama",
//   "body": "Ini adalah thread pertama",
//   "category": "General",
//   "createdAt": "2021-06-21T07:00:00.000Z",
//   "owner": {
//     "id": "users-1",
//     "name": "John Doe",
//     "avatar": "https://generated-image-url.jpg"
//   },
//   "upVotesBy": [],
//   "downVotesBy": [],
//   "comments": [
//     {
//       "id": "comment-1",
//       "content": "Ini adalah komentar pertama",
//       "createdAt": "2021-06-21T07:00:00.000Z",
//       "owner": {
//         "id": "users-1",
//         "name": "John Doe",
//         "avatar": "https://generated-image-url.jpg"
//       },
//       "upVotesBy": [],
//       "downVotesBy": []
//     }
//   ]
// }
export default function DetailThreadPage() {
  return (
    <div id="wrapper-page" className="max-w-[800px] w-[100%] m-auto">
      <div className="cardd w-full p-[15px] text-[1.2rem] font-normal mt-5">
        {/* header card */}
        <header className="card__header flex justify-between items-center">
          <div className="card__profile flex items-center">
            <FaUserCircle className="text-[1.5em] text-inherit" />
            <span className="card__owner-name text-[0.85em] pl-[10px] font-semibold">
              Bejo Supardi
            </span>
          </div>
          <span className="card__created text-[0.75em]">Yesterday</span>
        </header>
        {/* body card */}
        <main className="card__body py-[10px]">
          <h1 className="card__title text-[1.5em] font-[600] no-underline text-inherit">
            Tuhan Mengapa Aku Berbeda{' '}
          </h1>
          <p className="pt-[10px] text-[0.95em] font-normal">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi dolores recusandae
            exercitationem eaque sed magni porro ea dolorum quos id voluptas sunt, quisquam
            excepturi beatae consectetur dolorem assumenda laborum sit? Eum quisquam nesciunt Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Eligendi dolores recusandae
            exercitationem eaque sed magni porro ea dolorum quos id voluptas sunt, quisquam
            excepturi beatae consectetur dolorem assumenda laborum sit? Eum quisquam nesciunt
            <br />
            <br />
            Architecto, laborum nostrum, nulla id odio perspiciatis sed minima ab dolore? Amet fuga
            maxime assumenda, quod laboriosam adipisci cumque vero! Dolores eveniet ipsum unde,
            repellendus reiciendis nisi. architecto, laborum nostrum, nulla id odio perspiciatis sed
            minima ab dolore? Amet fuga maxime assumenda, quod laboriosam adipisci cumque vero!
            Dolores eveniet ipsum unde, repellendus reiciendis nisi.
            <br /> <br />
            Daftar Film Favoritku : <br />
            - Aing Teh Macan <br />
            - SiPutih Dari Goa Hantu <br />
            - Amzing Spiderwoman <br />
            - Aku Lebih Suka Makan <br />
            - Batwoman <br />
            - Maze Runer <br />
            - Fast and Furious 2 <br />
          </p>
          <div className="card__category-container flex gap-[8px] mt-[20px]">
            <span className="bg-transcript text-primary font-[700] text-[0.65em] rounded-[3.5px] py-[2px] px-[5.5px] border-solid border-transcript ">
              # Curhat
            </span>
          </div>
        </main>
        {/* footer card */}
        <footer className="card__footer pt-[8px] pl-[2px] flex gap-[20px]">
          <button className="flex items-center gap-[4px] text-inherit border-none bg-transparent cursor-pointer">
            <i className="text-[.9em] transition ease duration-[100ms]">
              <FaRegThumbsUp />
            </i>
            <span className="text-[.75em]">90</span>
          </button>
          <button className="flex items-center gap-[4px] text-inherit border-none bg-transparent cursor-pointer">
            <i className="text-[.9em] transition ease duration-[100ms]">
              <FaRegThumbsDown />
            </i>
            <span className="text-[.75em]">2</span>
          </button>
          <button className="flex items-center gap-[4px] text-inherit border-none bg-transparent cursor-pointer">
            <i className="text-[.9em] transition ease duration-[100ms]">
              <FaRegCommentDots />
            </i>
            <span className="text-[.75em]">128</span>
          </button>
        </footer>
        <div
          id="form-comment"
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="mt-8"
        >
          <label htmlFor="comment" className="text-[1.25rem] font-semibold">
            Beri Komentar
          </label>
          <textarea
            name="comment"
            id="comment"
            cols="100"
            rows="6"
            className="resize-none text-[1rem] my-3 max-[800px] w-[100%] p-4 border-solid bg-transparent border-[1.5px] border-transcript rounded-md"
          ></textarea>
          <button className="block w-[100%] bg-[#9cadb8] text-primary text-[1rem] font-semibold p-[5px] rounded-[3.5px] hover:bg-transcript duration-[.2s]">
            Kirim
          </button>
        </div>
        <div id="comments-container" className="mt-5 font-semibold">
          <p>Komentar (1)</p>
          <div
            id="comment-item"
            className="w-full py-[15px] text-[.9rem] font-normal border-solid border-b-[1px]  border-[#d2dce46b] "
          >
            <header className="card__header flex justify-between items-center">
              <div className="card__profile flex items-center">
                <FaUserCircle className="text-[1.5em] text-inherit" />
                <span className="card__owner-name text-[0.85em] pl-[10px] font-semibold">
                  Bejo Supardi
                </span>
              </div>
              <span className="card__created text-[0.8em]">Yesterday</span>
            </header>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam beatae praesentium
              incidunt dignissimos nostrum, adipisci ad distinctio dolor eum ex explicabo nisi
              deserunt doloribus dolorum itaque consequuntur delectus aliquam nihil.
            </p>
            <footer className="card__footer pt-[8px] pl-[2px] flex gap-[20px]">
              <button className="flex items-center gap-[4px] text-inherit border-none bg-transparent cursor-pointer">
                <i className="text-[1em] transition ease duration-[100ms]">
                  <FaRegThumbsUp />
                </i>
                <span className="text-[.85em]">90</span>
              </button>
              <button className="flex items-center gap-[4px] text-inherit border-none bg-transparent cursor-pointer">
                <i className="text-[1em] transition ease duration-[100ms]">
                  <FaRegThumbsDown />
                </i>
                <span className="text-[.85em]">2</span>
              </button>
            </footer>
          </div>
          <div
            id="comment-item"
            className="w-full py-[15px] text-[.9rem] font-normal border-solid border-b-[1px]  border-[#d2dce46b] "
          >
            <header className="card__header flex justify-between items-center">
              <div className="card__profile flex items-center">
                <FaUserCircle className="text-[1.5em] text-inherit" />
                <span className="card__owner-name text-[0.85em] pl-[10px] font-semibold">
                  Bejo Supardi
                </span>
              </div>
              <span className="card__created text-[0.8em]">Yesterday</span>
            </header>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam beatae praesentium
              incidunt dignissimos nostrum, adipisci ad distinctio dolor eum ex explicabo nisi
              deserunt doloribus dolorum itaque consequuntur delectus aliquam nihil.
            </p>
            <footer className="card__footer pt-[8px] pl-[2px] flex gap-[20px]">
              <button className="flex items-center gap-[4px] text-inherit border-none bg-transparent cursor-pointer">
                <i className="text-[1em] transition ease duration-[100ms]">
                  <FaRegThumbsUp />
                </i>
                <span className="text-[.85em]">90</span>
              </button>
              <button className="flex items-center gap-[4px] text-inherit border-none bg-transparent cursor-pointer">
                <i className="text-[1em] transition ease duration-[100ms]">
                  <FaRegThumbsDown />
                </i>
                <span className="text-[.85em]">2</span>
              </button>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
