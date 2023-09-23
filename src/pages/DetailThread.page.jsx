import React from 'react'

export default function DetailThreadPage() {
  return (
    <section id='detail-page' className='bg-slate-400 border-2 border-white w-[50%] m-auto'>
      <header id='thread-header' className='bg-slate-600 w-[60%]'>
         <p id='thread-header_category'></p>
      </header>
      <div id='thread-content' className='bg-red-600 w-[60%]'>
         <h2>Halo! Selamat datang dan silakan perkenalkan diri kamu</h2>
         <div id='thread-content_body'></div>
      </div>
      <footer id='thread-footer'className='bg-green-600 w-[60%]'>
         <button></button>
         <button></button>
         <div id='owner-info'></div>
         <p></p>
      </footer>
      <div id='thread-comment'className='bg-blue-600 w-[60%]'>
         <div id='thread-comment_input'>
            <h3>Beri Komentar</h3>
            <form id='comment-input'>
               <div id='comment-input_field'></div>
               <button>Kirim</button>
            </form>
         </div>
         <div id='thread-comment_list'>
            <h3></h3>
            <div id='comments-list'>
               <div id='comment-item'>
                  <header id='comment-item_owner-header'>
                     <div id='comment-item_owner-info'>
                        <img src="" alt="" />
                        <p></p>
                     </div>
                     <p id='posted-at'></p>
                  </header>
                  <p></p>
                  <footer>
                     <button id='comment-upvote_button'></button>
                     <button id='comment-downvote_button'></button>
                  </footer>
               </div>
            </div>
         </div>
      </div>
    </section>
  )
}
