import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardList from "../components/CardList";
import { TbPencilPlus, TbPlus } from "react-icons/tb";

import { fetchThreads, upVoteAsync, downVoteAsync } from "../redux/reducer/threadsSlice";
import { fetchUsers } from "../redux/reducer/usersSlice";
import { setCategories } from "../redux/reducer/categoriesSlice";

export default function ThreadPage() {
  const dispatch = useDispatch();
  const authUser = useSelector((states) => states.authUser || {});
  const users = useSelector((states) => states.users.entities) || [];
  const threads = useSelector((states) => states.threads.entities) || [];
  const categories = useSelector((state) => state.categories.entities) || [];
  const [category, setCategory] = useState("");
  const threadList = threads.map((th) => {
    return {
      ...th,
      profile: authUser.profile,
      owner: users.find((user) => user.id === th.ownerId) || {},
    };
  });

  useEffect(() => {
    dispatch(fetchThreads());
    dispatch(fetchUsers());
  }, []);

  useEffect(() => {
    dispatch(setCategories(threads));
  }, [threads]);

  const createDisccussHandler = () => {
    alert("open createDisccuss.page");
  };

  const onCategoryHandler = ({ target }) => {
    setCategory(target.innerText);
  };

  const onVoteUpHandler = (threadId) => {
    dispatch(upVoteAsync(threadId));
  };

  const onVoteDownHandler = (threadId) => {
    dispatch(downVoteAsync(threadId));
  };

  return (
    <>
      <div className="threads__container max-w-[800px] w-[100%] m-auto bg-primary text-transcript py-[1rem]">
        {/* HEADER */}
        <header className="threads__header p-[10px] font-medium">
          <h2 className="text-sm mb-[8px]">Kategori Popular</h2>
          <div className="category-container flex gap-[15px] text-[0.75rem]">
            {categories.map((category) => (
              <button
                key={category}
                onClick={onCategoryHandler}
                className="bg-transparent border-solid border-transcript border-[1.35px] text-inherit py-[3px] px-[7px] rounded-[7px] cursor-pointer"
              >
                {category}
              </button>
            ))}
          </div>
          <h1 className="text-[1.7rem] font-bold mt-[20px]">Diskusi tersedia</h1>
        </header>
        {/* {LIST} */}
        <CardList
          threads={threadList.filter((t) => t.category.includes(category))}
          onVoteUp={onVoteUpHandler}
          onVoteDown={onVoteDownHandler}
        />

        <button
          onClick={createDisccussHandler}
          className="add-button fixed bottom-[3rem] right-[3rem] flex justify-center items-center bg-transcript p-1 rounded-[30%] hover:scale-[1.1] duration-[0.2s] ease"
        >
          <TbPencilPlus className="text-[2.25rem] text-accent" id="pencil" />
        </button>
      </div>
    </>
  );
}
