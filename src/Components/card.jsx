import { useState } from "react";
export default function Card({ index, heading, content, deleteClick }) {
  const [showMore, setshowMore] = useState(false);
  const style =
    "w-full bg-white border-primary border rounded-md  h-44  transition flex flex-col ease-in-out";
  return (
    <main className={index == 6 ? `${style} col-span-2 ` : style}>
      <div className="border h-10 w-full flex ">
        <div className="m-auto  text-black font-semibold text-md ">
          {heading}
        </div>
        <div className="my-auto cursor-pointer" onClick={deleteClick}>
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
      <div className="w-full h-full  border  text-black px-3 overflow-y-auto ">
        {!showMore ? content.slice(0, 200) : content}
        <a className="ml-1 text-blue-400 cursor-pointer" onClick={() => setshowMore(!showMore)}>
          {showMore ? "Show less" : "Show More"}
        </a>
      </div>
    </main>
  );
}
