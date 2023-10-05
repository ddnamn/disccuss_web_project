import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { fetchDetailThread, replyThread } from "../redux/reducer/detailThreadSlice";
import timeAgo from "../utils";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import parser from "html-react-parser";

const DetailThreadPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { entities: detailThread, status } = useSelector((state) => state.detailThread);
  const { token } = useSelector((state) => state.authUser);
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const contentRef = useRef();

  useEffect(() => {
    dispatch(fetchDetailThread(id));
  }, []);

  useEffect(() => {
    if (status === "fail") navigate("/");
  }, [status]);

  const onReply = () => {
    if (token === null) return alert("Log In Dulu Ngab 😡");

    dispatch(replyThread({ id, content }));

    setContent("");
    contentRef.current.innerHTML = "";
  };

  const options = {
    repalce: (domNode) => {
      if (domNode.type === "tag" && domNode.name === "br") {
        return <br />;
      }
    },
  };

  return (
    detailThread && (
      <div className="w-2/3 m-auto p-3">
        {/* Section Detail Tweet */}
        <section className="border border-emerald-300 rounded-md p-3">
          <h2>{detailThread.title}</h2>
          <p>{detailThread.category}</p>
          <p>{timeAgo(detailThread.createdAt)}</p>
          <h3>
            <span>
              <img src={detailThread.owner.avatar} alt="avatar" width="30" />
            </span>
            <span>{detailThread.owner.name}</span>
          </h3>
          <div>{parser(detailThread.body, options)}</div>
          <span>
            <FaThumbsUp /> {detailThread.upVotesBy.length}{" "}
          </span>
          <span>
            <FaThumbsDown /> {detailThread.downVotesBy.length}{" "}
          </span>
        </section>
        {/* Section Form to Reply Tweet */}
        <section className="border border-yellow-200 rounded-md mt-3 p-3">
          <h2>Beri Komentar !</h2>
          <div
            ref={contentRef}
            required
            contentEditable
            onInput={(event) => setContent(event.target.innerHTML)}
            className="placeholder:font-semibold placeholder:text-gray-500 px-4 py-3 text-black bg-gray-300 border-[1.5px] border-gray-400 rounded-[8px] mb-2 min-h-[100px]"
          />
          <button onClick={onReply} className="w-full p-3 bg-emerald-300 text-blue-900">
            Balas
          </button>
        </section>
        {/* Section Comment List*/}
        <section className="border border-pink-300 rounded-md mt-3 p-3 flex flex-col gap-2">
          <p>
            <strong>{detailThread.comments.length} Komentar</strong>
          </p>
          <ul className="flex flex-col gap-3">
            {detailThread.comments.map((c) => {
              return (
                <div className="bg-orange-700 rounded-md p-3" key={c.id}>
                  <p>
                    <img src={c.owner.avatar} width="30" alt="avatar" />
                    <span>{c.owner.name} </span>
                  </p>
                  <p>{timeAgo(c.createdAt)}</p>
                  <div>{parser(c.content, options)} </div>
                  <p>
                    <span>
                      <FaThumbsUp /> {c.upVotesBy.length}
                    </span>
                    <span>
                      <FaThumbsDown /> {c.downVotesBy.length}
                    </span>
                  </p>
                </div>
              );
            })}
          </ul>
        </section>
      </div>
    )
  );
};

export default DetailThreadPage;
