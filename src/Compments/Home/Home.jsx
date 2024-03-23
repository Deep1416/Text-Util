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
    <div className="text-center">
      <div>
        <h1>TextUtis - Word Counter, Charecter Counter, Remove Extra Space</h1>
        <div>
          <p>Enter Your Text Here:</p>
          <textarea
            className="bg-blue-500"
            name=""
            id=""
            cols="100"
            rows="10"
            value={text}
            ref={btnRef}
            onChange={(e) => {
              textValue(e);
            }}
          ></textarea>
        </div>
        <div className="flex gap-3 ml-60">
          <button
            className="bg-blue-500 py-1 px-4"
            onClick={() => {
              dispatch({ type: "upper" });
            }}
          >
            Convert Uppercase
          </button>
          <button
            className="bg-blue-500 py-1 px-4"
            onClick={() => {
              dispatch({ type: "lower" });
            }}
          >
            Convert Lowercase
          </button>
          <button
            className="bg-red-500 py-1 px-4"
            onClick={() => {
              dispatch({ type: "clear" });
            }}
          >
            Clear Text
          </button>
          <button className="bg-green-500 py-1 px-4" onClick={textCopy}>
            Copy To Clipboard
          </button>
          <button
            className="bg-blue-500 py-1 px-4"
            onClick={() => {
              dispatch({ type: "trim" });
            }}
          >
            Remove Extra Spaces
          </button>
        </div>
        <div className="mt-12">Summery Of Your Text</div>
        <div className="flex flex-col gap-6 mt-6 mb-5">
          <p>
            Nummber of words :{" "}
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }
          </p>
          <p>Number of charecters : {text.length}</p>
          <p>
            Reading Time:
            {0.008 *
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length}
          </p>
        </div>
      </div>
      <div>
        <h1>Preview Document</h1>
        <textarea
          className="bg-gray-500"
          name=""
          id=""
          cols="100"
          rows="10"
          value={text}
          readOnly
        ></textarea>
      </div>
    </div>
  );
}

export default Home;
