import { useEffect, useState } from "react";
export default function Card({
  index,

  heading,
  content,
  deleteClick,
  dblclick,
  keydown,
  keyup,
}) {
  const [showMore, setshowMore] = useState(true);
  const [textAreaChange, settextAreaChange] = useState("");
  const [showEdit, setshowEdit] = useState(false);

  // useEffect(() => {
  //   // setshowEdit(false)
  // }, []);

  // console.log("show edit: " + heading);

  const style =
    "w-full bg-white border-primary border rounded-md  h-44  transition-transform flex flex-col ease-in-out";
  return (
    <main className={`${style}`}>
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
      <div className="w-full h-full flex border  text-black px-3 overflow-y-auto ">
        {showEdit ? (
          <div
            className="w-full h-full flex  break-words"
            onDoubleClick={() => setshowEdit(!showEdit)}
          >
            <textarea
              value={textAreaChange}
              onKeyUp={keyup}
              onKeyDown={(e) => {
                // console.log("from keydown" + e.keyCode);
                if (e.keyCode === 13) {
                  // setshowEdit((prevState) => !prevState);
                  // console.log("keydown");
                }
              }}
              onChange={(e) => {
                // console.log(e);
                settextAreaChange(e.target.value);
              }}
              rows="20"
              cols="50"
              className=" bg-white break-words w-full h-fullborder"
            >
              {content}
            </textarea>
          </div>
        ) : (
          <div
            onDoubleClick={() => {
              settextAreaChange(content);
              setshowEdit(!showEdit);
            }}
            className="w-full h-full"
          >
            {/* showMore ? content?.slice(0, 200) : content */}
            {content.length < 200
              ? content
              : showMore
              ? content?.slice(0, 200)
              : content}
            <a
              className="ml-1 text-blue-400 cursor-pointer"
              onClick={() => setshowMore(!showMore)}
            >
              {/* {showMore ? "Show less" : "...Show More"} */}
              {content.length < 200 ? "." : showMore ? "Show More" : "Show Less"}
            </a>
          </div>
        )}
      </div>
    </main>
  );
}
