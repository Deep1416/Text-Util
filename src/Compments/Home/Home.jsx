import { useRef } from "react";

function Home({ text, dispatch }) {
  const textValue = (e) => {
    dispatch({
      type: "text",
      payload: e.target.value,
    });
  };

  const btnRef = useRef(null);

  const textCopy = () => {
    btnRef.current?.select();
    btnRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(text);
  };

  //   const numberOfChar = text++;

  return (
    <div className="  my-12 mx-24 px-3">
      <div>
        <h1 className="text-[40px] text-center font-medium mb-2">TextUtis - Word Counter, Charecter Counter, Remove Extra Space</h1>
        <div>
          <p className="text-[22px] font-semibold mb-2 mt-2">Enter Your Text Here:</p>
          <textarea
            className="bg-white text-lg font-normal text-black px-2 py-3 mb-4 rounded-md"
            name=""
            id=""
            cols="133"
            rows="7"
            value={text}
            ref={btnRef}
            onChange={(e) => {
              textValue(e);
            }}
          ></textarea>
        </div>
        <div className="flex gap-3  text-white">
          <button
            className="bg-[#0d6efd] border-[#0d6efd] border py-2 px-4 rounded-md opacity-60"
            onClick={() => {
              dispatch({ type: "upper" });
            }}
          >
            Convert Uppercase
          </button>
          <button
            className="bg-[#0d6efd] border-[#0d6efd] border py-2 px-4 rounded-md opacity-60"
            onClick={() => {
              dispatch({ type: "lower" });
            }}
          >
            Convert Lowercase
          </button>
          <button
            className=" bg-[#dc3545] border-[#dc3545] border py-2 px-4 rounded-md opacity-60"
            onClick={() => {
              dispatch({ type: "clear" });
            }}
          >
            Clear Text
          </button>
          <button className="bg-[#198754] border-[#198754] border py-2 px-4 rounded-md opacity-60" onClick={textCopy}>
            Copy To Clipboard
          </button>
          <button
            className="bg-[#0d6efd] border-[#0d6efd] border py-2 px-4 rounded-md opacity-60"
            onClick={() => {
              dispatch({ type: "trim" });
            }}
          >
            Remove Extra Spaces
          </button>
        </div>
        <div className="mt-12 mb-2 text-3xl text-black font-semibold">Summery Of Your Text</div>
        <div className="flex flex-col gap-6 mt-6 mb-5 text-black font-medium text-lg">
          <p >
            Nummber of words :{" "}
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }
          </p>
          <p>Number of charecters : {text.length}</p>
          <p>
            Reading Time :
            {0.008 *
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length}
          </p>
        </div>
        <div>
        <h1 className="text-xl font-medium text-center mb-4">Preview Document</h1>
        <textarea
          className="bg-white text-lg font-normal text-black px-2 py-3 mb-4 rounded-md"
          name=""
          id=""
          cols="133"
          rows="5"
          value={text}
          readOnly
        ></textarea>
      </div>
      </div>
      
    </div>
  );
}

export default Home;
