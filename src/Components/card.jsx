export default function Card({ index, heading, content, deleteClick, style }) {
  return (
    <main
      className={
        index == 6
          ? "w-full bg-white border-primary border rounded-md overflow-hidden h-44 col-span-2 transition ease-in-out"
          : "w-full bg-white border-primary border rounded-md overflow-hidden h-44  transition ease-in-out"
      }
    >
      <div className="border h-10 w-full flex justify-between my-auto">
        <div className="m-auto  text-black font-semibold text-md">
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
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </div>
      </div>
      <div className="w-full  text-black px-3 ">{content}</div>
    </main>
  );
}
