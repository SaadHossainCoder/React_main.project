import { useState, useCallback, useEffect } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let set = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) set += "123456789";
    if (charAllowed) set += "!@#$%&?/~";

    for (let i = 0; i <= length; i++) {
      const string = Math.floor(Math.random() * set.length + 1);
      pass += set.charAt(string);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed,passwordGenerator]);

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-slate-950 ">
      <div className="bg-gray-700 rounded-lg back-1">
        <div className="p-1 text-center text-white text-nowrap">
          <h1 className="pb-2 text-2xl ">Password Generator</h1>
          <div>
            <input
              className="w-5/6 px-4 py-2 mx-2 mt-4 text-sm bg-transparent border-2 border-white rounded-full focus:outline-none "
              type="text"
              placeholder="Enter a password length "
              readOnly="readOnly"
              value={password}
            />
            <button className="p-3 text-xs bg-blue-700 rounded-2xl">
              Copy
            </button>

            <div className="flex items-center justify-center m-4">
              <input
                className="w-full h-1"
                min={6}
                max={32}
                value={length}
                defaultValue="16"
                type="range"
                onChange={(e) => setLength(e.target.value)}
              />
              <label htmlFor="length" className="px-3">
                length: {length}
              </label>
            </div>

            <div className="flex items-center justify-center gap-2">
              {/* <input
                type="checkbox"
                name="characters"
                onChange={() => {
                  (prev) => !prev;
                }}
              />
              <label htmlFor="characters" className="mr-2 text-xs text-white">
                characters
              </label> */}

              <input
                type="checkbox"
                name="number"
                defaultChecked={numberAllowed}
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="number" className="mr-2 text-xs text-white">
                numbers
              </label>

              <input
                type="checkbox"
                name="special characters"
                defaultChecked={charAllowed}
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label
                htmlFor="special characters"
                className="mr-2 text-xs text-white"
              >
                special characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
