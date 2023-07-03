import { useState } from "react";
import Card from "./Components/card";

function App() {
  const [checked, setChecked] = useState(false);

  const [dummydata, setDummyData] = useState([
    {
      heading: "What is Lorem Ipsum?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales mi at tortor tincidunt ornare. Mauris ante lorem, pretium quis posuere vel, dignissim in magna. Donec vitae luctus diam. Nam sed pharetra augue, quis molestie nunc. Integer suscipit fermentum nisl, non mollis est condimentum a. Pellentesque neque neque, cursus at lacinia a, vestibulum eget libero. Cras eros urna, gravida id nisi non, rutrum sagittis sem. Nulla facilisi. Nam leo lorem, porttitor eget facilisis at, finibus eu est. Sed velit quam, tempus sit amet sodales quis, semper ut sapien",
    },
    {
      heading: "Why do we use it?",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).    ",
    },
    {
      heading: "Where does it come from?      ",
      description:
        "Cras dignissim gravida ligula at pharetra. Nullam fermentum maximus dui vel fringilla. Nulla suscipit turpis non justo varius, non tempus quam iaculis. Vestibulum dictum finibus nisl, ac condimentum lorem rhoncus nec. Nunc purus justo, aliquet ac dignissim eu, viverra a diam. Sed auctor vel purus vitae ullamcorper. In hac habitasse platea dictumst.",
    },
    {
      heading: "Where can I get some?      ",
      description:
        "Sed vitae viverra velit. Phasellus ante sem, imperdiet nec ante id, interdum euismod turpis. Aenean porta auctor velit sed vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec tincidunt ullamcorper neque, nec molestie sem auctor eu. Nunc suscipit tortor mollis semper placerat. Aliquam faucibus fermentum tempus. In sagittis fermentum odio, eget consectetur elit egestas non. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis vel urna sit amet massa rhoncus vulputate a sed elit.",
    },
    {
      heading: "What is Lorem Ipsum?",
      description:
        "Nulla lorem lacus, vulputate eu justo vitae, consectetur blandit lacus. Pellentesque id lacus vitae mi consequat gravida. Donec maximus auctor mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus mi eros, condimentum et est sed, scelerisque lacinia diam. Morbi ut ornare quam. Aliquam tristique lectus neque, non pharetra enim efficitur sit amet. Morbi scelerisque venenatis ipsum, mattis pellentesque tellus eleifend nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin vel dictum sem, sed ornare ligula. Quisque at sodales neque. Integer quis varius velit.",
    },
    {
      heading: "Why do we use it?",
      description:
        "Proin consequat, magna eu sagittis luctus, enim ex placerat nisl, vulputate condimentum dui dolor at orci. Donec at eros leo. Duis sodales, metus eu ultricies fermentum, elit enim condimentum lectus, a tristique magna augue et dolor. Nulla quis facilisis magna. Nulla et eros posuere, mattis leo in, pretium justo. Maecenas consequat libero vestibulum diam ornare convallis. Vestibulum sodales nec mauris vitae vulputate. Cras pretium augue ac sodales cursus. Duis id dictum mi. Maecenas a mattis eros. Fusce felis leo, laoreet fermentum orci eget, ullamcorper dignissim leo. Nunc urna magna, tincidunt id nibh sed, pretium suscipit augue. Mauris id hendrerit augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus sollicitudin tincidunt pretium.",
    },
  ]);

  const handleToggleChange = () => {
    setDummyData([
      ...dummydata,
      {
        heading: "Where does it come from?      ",
        description:
          "Cras dignissim gravida ligula at pharetra. Nullam fermentum maximus dui vel fringilla. Nulla suscipit turpis non justo varius, non tempus quam iaculis. Vestibulum dictum finibus nisl, ac condimentum lorem rhoncus nec. Nunc purus justo, aliquet ac dignissim eu, viverra a diam. Sed auctor vel purus vitae ullamcorper. In hac habitasse platea dictumst.",
      },
      {
        heading: "Where can I get some?      ",
        description:
          "Sed vitae viverra velit. Phasellus ante sem, imperdiet nec ante id, interdum euismod turpis. Aenean porta auctor velit sed vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec tincidunt ullamcorper neque, nec molestie sem auctor eu. Nunc suscipit tortor mollis semper placerat. Aliquam faucibus fermentum tempus. In sagittis fermentum odio, eget consectetur elit egestas non. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis vel urna sit amet massa rhoncus vulputate a sed elit.",
      },
    ]);
  };

  const handleClick = () => {
    checked === false ? handleToggleChange() : handleDelete();
    setChecked(!checked);
  };

  const handleDelete = () => {
    setDummyData([
      ...dummydata.filter((value, index) => index + 2 < dummydata.length),
    ]);
  };

  const handlePop = (params) => {
    return dummydata.filter((item, index) => index != params);
  };

  return (
    <>
      <div
        data-theme="dark"
        className="w-screen bg-black h-screen  flex flex-col"
      >
        <div className="h-[10%] px-4 flex justify-between">
          <div className="text-white my-auto text-xl font font-semibold">
            Basic Design
          </div>

          <div className="form-control my-auto ">
            <label className="cursor-pointer label">
              <input
                type="checkbox"
                onChange={handleClick}
                checked={checked}
                className="toggle toggle-xl toggle-primary"
              />
            </label>
          </div>
        </div>
        <div className="w-full h-full flex flex-col overflow-hidden p-4 lg:p-10 ">
          <div className="w-full lg:h-full border mx-auto lg:m-auto border-primary p-4 py-10 rounded-md  transition ease-in-out  ">
            <div className="w-full h-full overflow-y-auto ">
              <div className="grid-cols-3	grid gap-4 mb-4 transition ease-in-out ">
                {dummydata.map((value, index) => (
                  <Card
                    deleteClick={() => {
                      setDummyData([...handlePop(index)]);
                    }}
                    index={index}
                    key={index}
                    heading={value.heading}
                    content={value.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="w-1/2 h-1/2 border border-primary m-auto"></div> */}
      </div>
    </>
  );
}

export default App;
