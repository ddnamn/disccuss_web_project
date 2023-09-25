import React, { useState } from "react";
import { RiCloseFill, RiCheckFill } from "react-icons/ri";
import { addThread } from "../redux/reducer/threadsSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

export default function NewThreadForm({ onClose }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    dispatch(addThread({ title, body, category }));
  };

  return (
    <div
      id="modal"
      className="bg-transparent backdrop-blur-md fixed top-0 left-0 bottom-0 right-0 grid place-items-center invisible opacity-0 transition ease-in-out duration-300 overflow-auto"
    >
      <div className="w-full sm:w-[600px]  py-7 px-6 rounded-xl bg-[#15191e]">
        {/* <button>X</button> */}
        <form onSubmit={onSubmitHandler}>
          <h1 className="text-3xl font-semibold mb-5">Create New Thread</h1>
          {/* TITLE */}
          <div className="flex flex-col gap-2 mb-4">
            <label className="font-medium" htmlFor="title">
              Your Title
            </label>
            <input
              required
              onChange={(event) => setTitle(event.target.value)}
              value={title}
              className="placeholder:font-semibold placeholder:text-gray-500 px-4 py-2  bg-transparent border-[1.5px] border-gray-400 rounded-[8px]"
              type="text"
              id="title"
              name="title"
            />
          </div>
          {/* BODY */}
          <div className="flex flex-col gap-2">
            <label className="font-medium">Description</label>
            <div
              required
              onInput={(event) => setBody(event.target.innerHTML)}
              value={body}
              className="placeholder:font-semibold placeholder:text-gray-500 px-4 py-3  bg-transparent border-[1.5px] border-gray-400 rounded-[8px] mb-7 min-h-[100px]"
              contentEditable
            />
          </div>
          <div className="flex justify-between align-items-center ">
            <label className="pt-1" htmlFor="category">
              Category
            </label>
            <input
              onChange={(e) => setCategory(e.target.value)}
              value={category}
              type="text"
              id="category"
              className="w-full ms-14 rounded-[8px] bg-transparent border-[1.5px] border-gray-400 px-4 py-2 mb-10"
            />
          </div>
          <div className="flex justify-end gap-5">
            <button
              type="button"
              onClick={onClose}
              className="bg-[#4a5563] hover:bg-[#545f6e] px-4 py-2 rounded-md font-bold flex justify-center align-items-center gap-1"
            >
              <i className="text-[24px] h-fit">
                <RiCloseFill />
              </i>
              <span>Cancel</span>
            </button>
            <button
              type="submit"
              className="bg-[#00ffa6e4] hover:bg-[#00ffa6f5] text-accent px-4 py-2 rounded-md font-bold flex justify-center align-items-center gap-1 "
            >
              <i className="text-[24px] h-fit">
                <RiCheckFill />
              </i>
              <span>Add New</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
