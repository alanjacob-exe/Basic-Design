import { useEffect, useState } from "react";
import Card from "./Components/card";

function App() {
  const [checked, setChecked] = useState(false);
  const [startIndex, setstartIndex] = useState(0);
  const [displayData, setdisplayData] = useState([]);
  const [currentPage, setcurrentPage] = useState(0);
  const togglestyle = "h-6 w-6 bg-white rounded-full my-auto";

  useEffect(() => {
    setcurrentPage(startIndex / 2);
    // handleToggleUpdate();
  }, [startIndex, displayData]);

  const handleForwardChange = () => {
    if (startIndex < dummydata.length) {
      setstartIndex((prevState) => prevState + 2);
      setdisplayData(
        dummydata.filter((value, index) => {
          if (index >= startIndex && index < startIndex + 2) {
            return value;
          }
        })
      );
    }
  };
  // console.log(currentPage)

  const handleBackwardsChange = () => {
    if (startIndex > 0) {
      setstartIndex((prevState) => prevState - 2);
      setdisplayData(
        dummydata.filter((value, index) => {
          if (index >= startIndex - 2 && index < startIndex) {
            return value;
          }
        })
      );
    }
  };

  const [dummydata, setDummyData] = useState([
    {
      heading: "1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales mi at tortor tincidunt ornare. Mauris ante lorem, pretium quis posuere vel, dignissim in magna. Donec vitae luctus diam. Nam sed pharetra augue, quis molestie nunc. Integer suscipit fermentum nisl, non mollis est condimentum a. Pellentesque neque neque, cursus at lacinia a, vestibulum eget libero. Cras eros urna, gravida id nisi non, rutrum sagittis sem. Nulla facilisi. Nam leo lorem, porttitor eget facilisis at, finibus eu est. Sed velit quam, tempus sit amet sodales quis, semper ut sapien",
    },
    {
      heading: "2",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).    ",
    },
    {
      heading: "3",
      description:
        "Cras dignissim gravida ligula at pharetra. Nullam fermentum maximus dui vel fringilla. Nulla suscipit turpis non justo varius, non tempus quam iaculis. Vestibulum dictum finibus nisl, ac condimentum lorem rhoncus nec. Nunc purus justo, aliquet ac dignissim eu, viverra a diam. Sed auctor vel purus vitae ullamcorper. In hac habitasse platea dictumst.",
    },
    {
      heading: "4 ",
      description:
        "Sed vitae viverra velit. Phasellus ante sem, imperdiet nec ante id, interdum euismod turpis. Aenean porta auctor velit sed vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec tincidunt ullamcorper neque, nec molestie sem auctor eu. Nunc suscipit tortor mollis semper placerat. Aliquam faucibus fermentum tempus. In sagittis fermentum odio, eget consectetur elit egestas non. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis vel urna sit amet massa rhoncus vulputate a sed elit.",
    },
    {
      heading: "5",
      description:
        "Nulla lorem lacus, vulputate eu justo vitae, consectetur blandit lacus. Pellentesque id lacus vitae mi consequat gravida. Donec maximus auctor mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus mi eros, condimentum et est sed, scelerisque lacinia diam. Morbi ut ornare quam. Aliquam tristique lectus neque, non pharetra enim efficitur sit amet. Morbi scelerisque venenatis ipsum, mattis pellentesque tellus eleifend nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin vel dictum sem, sed ornare ligula. Quisque at sodales neque. Integer quis varius velit.",
    },
    {
      heading: "6",
      description:
        "Proin consequat, magna eu sagittis luctus, enim ex placerat nisl, vulputate condimentum dui dolor at orci. Donec at eros leo. Duis sodales, metus eu ultricies fermentum, elit enim condimentum lectus, a tristique magna augue et dolor. Nulla quis facilisis magna. Nulla et eros posuere, mattis leo in, pretium justo. Maecenas consequat libero vestibulum diam ornare convallis. Vestibulum sodales nec mauris vitae vulputate. Cras pretium augue ac sodales cursus. Duis id dictum mi. Maecenas a mattis eros. Fusce felis leo, laoreet fermentum orci eget, ullamcorper dignissim leo. Nunc urna magna, tincidunt id nibh sed, pretium suscipit augue. Mauris id hendrerit augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus sollicitudin tincidunt pretium.",
    },
  ]);

  // console.log(displayData)

  const handleToggleChange = () => {
    setdisplayData((prevState) => [
      ...prevState,
      {
        heading: "added",
        description:
          "Cras dignissim gravida ligula at pharetra. Nullam fermentum maximus dui vel fringilla. Nulla suscipit turpis non justo varius, non tempus quam iaculis. Vestibulum dictum finibus nisl, ac condimentum lorem rhoncus nec. Nunc purus justo, aliquet ac dignissim eu, viverra a diam. Sed auctor vel purus vitae ullamcorper. In hac habitasse platea dictumst.",
      },
      {
        heading: "added",
        description:
          "Sed vitae viverra velit. Phasellus ante sem, imperdiet nec ante id, interdum euismod turpis. Aenean porta auctor velit sed vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec tincidunt ullamcorper neque, nec molestie sem auctor eu. Nunc suscipit tortor mollis semper placerat. Aliquam faucibus fermentum tempus. In sagittis fermentum odio, eget consectetur elit egestas non. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis vel urna sit amet massa rhoncus vulputate a sed elit.",
      },
    ]);
    console.log(displayData?.length);
  };

  // console.log([...displayData, ...dummydata.slice(2)]);

  const handleClick = () => {
    if (!checked) {
      handleToggleChange();
    }
    // checked === false ? {handleToggleChange(),handletogg }: setChecked(!checked);
    setChecked((prevState) => !prevState);
  };

  const handleDelete = () => {
    setDummyData([
      ...dummydata.filter((value, index) => index + 2 < dummydata.length),
    ]);
  };

  const handleToggleUpdate = () => {
    console.log("test");
    let k = [
      ...dummydata.filter((value, index) => {
        if (index + 1 <= currentPage * 2 - 2) return value;
      }),
      ...displayData,
      ...dummydata.filter((value, index) => {
        if (index + 1 > currentPage * 2) return value;
      }),
    ];
    // console.log(displayData)

    // setDummyData([...k]);
    // setDummyData(...k)

    // let k = [
    //   dummydata.filter((value, index) => {
    //     if (index + 1 > currentPage * 2 || index + 1 <= currentPage * 2 - 2)
    //       return value;
    //   }),
    // ];
    console.log(k);
    // setDummyData([...displayData, ...dummydata.slice(2)]);
  };

  const handlePop = (params) => {
    return displayData.filter((item, index) => index != params);
  };

  // const handleTextAreaChange = (e, idx) => {};

  const handleKey = (e, idx) => {
    console.log("from handlekey" + e.keyCode);
    if (e.keyCode == 13) {
      setDummyData((prevState) =>
        prevState.map((each, index) =>
          index == idx ? { ...each, description: e.target.value } : each
        )
      );
      console.log("Enter key pressed");
      // setshowEdit((prevState) => !prevState);
    }
    // console.log("show edit: "+showEdit)
  };

  // console.log(dummydata);

  return (
    <>
      <div
        data-theme="dark"
        className="w-screen bg-black h-screen flex flex-col"
      >
        <div className="h-[10%] px-4 flex justify-between">
          <div className="text-white my-auto text-xl font font-semibold">
            Basic Design
          </div>

          <div className=" my-auto ">
            <div className="w-16 overflow-hidden h-8  border rounded-full flex  bg-black  ">
              <div
                className={`${togglestyle} ${
                  checked
                    ? " translate-x-9 bg-purple-800"
                    : "bg-gray-400 ml-0.5"
                }`}
                onClick={() => {
                  handleClick();
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="w-full h-full    flex flex-col py-4   ">
          <div className="w-11/12 flex border mx-auto border-primary px-8 py-5 rounded-md lg:m-auto lg:h-full ">
            <div className="w-[5%] h-full  flex">
              <div className="m-auto h-12  " onClick={handleBackwardsChange}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-arrow-left stroke-white hover:fill-white transition ease-in-out"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  // stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z" />
                </svg>
              </div>
            </div>
            <div className="w-[90%] mx-auto h-full  flex p-2">
              hey
              <div className="m-auto flex">
                {displayData.map((value, index) => (
                  <div key={index} className="mr-2 w-full h-full">
                    <Card
                      index={index}
                      deleteClick={() => handleUpdate(index, currentPage)}
                      heading={value?.heading}
                      content={value?.description}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="w-[5%] h-full  flex">
              <div className="m-auto h-12" onClick={handleForwardChange}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-arrow-left stroke-white hover:fill-white transition ease-in-out"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  // stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z" />
                </svg>
              </div>
            </div>{" "}
          </div>
        </div>
        {/* <div className="w-1/2 h-1/2 border border-primary m-auto"></div> */}
      </div>
    </>
  );
}

export default App;
