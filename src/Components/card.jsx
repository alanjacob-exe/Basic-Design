import { useState } from "react";
export default function Card({ onChange, heading, content, deleteClick }) {
  const [showMore, setshowMore] = useState(true); // to check if the show more button should be displayed
  const [showEdit, setshowEdit] = useState(false); // to check if text area should be visble

  return (
    <main className="w-full bg-white border-primary border rounded-md overflow-hidden focus:ring-2 focus:ring-primary h-44  transition-transform flex flex-col ease-in-out">
      <div className="border h-10 w-full flex ">
        <div className="m-auto  text-black font-semibold text-md ">
          {heading}
        </div>
        <div className="my-auto cursor-pointer mr-2 " onClick={deleteClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-share hover:stroke-red-500 transition ease-in-out"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#000000"
            fill="red"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </div>
      </div>
      <div className="w-full h-full flex border  text-black px-3 overflow-y-auto ">
        {showEdit ? ( //
          <div className="w-full h-full flex  break-words">
            <textarea
              value={content}
              onChange={onChange}
              onBlur={() => setshowEdit(false)}
              className=" bg-white break-words w-full h-full border"
            />
          </div>
        ) : (
          <div onClick={() => setshowEdit(true)} className="w-full h-full">
            {/* showMore ? content?.slice(0, 200) : content */}
            {showMore ? content?.slice(0, 200) : content}
            <a
              className="ml-1 text-blue-400 cursor-pointer"
              onClick={() => setshowMore(!showMore)}
            >
              {/* {showMore ? "Show less" : "...Show More"} */}
              {content?.length < 200
                ? "."
                : showMore
                ? "Show More"
                : "Show Less"}
            </a>
          </div>
        )}
      </div>
    </main>
  );
}
