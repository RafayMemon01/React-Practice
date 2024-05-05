import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [passwordLength, setPasswordLength] = useState(8);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharAllowed, setIsCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNumberAllowed) str += "123456789";
    if (isCharAllowed) str += "@!#$%^&*_+~=?{}[]`";

    for (let i = 1; i <= passwordLength; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [passwordLength, isNumberAllowed, isCharAllowed, setPassword]);

  const passwordCopyToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current.setSelectionRange(0, 99);

    window.navigator.clipboard.writeText(password);
  },[password])
  useEffect(() => {
    passwordGenerator();
  }, [passwordLength, isNumberAllowed, isCharAllowed, passwordGenerator]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}

          />
          <button onClick={passwordCopyToClipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            copy
          </button>
        </div>
        <div className="flex flex-wrap text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={passwordLength}
              className="cursor-pointer"
              onChange={(e) => {
                setPasswordLength(e.target.value);
              }}
            />
            <label>Length: {passwordLength}</label>
          </div>
          <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={isNumberAllowed}
          id="numberInput"
          onChange={() => {
              setIsNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={isCharAllowed}
              id="characterInput"
              onChange={() => {
                  setIsCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>

        </div>
      </div>
    </>
  );
}

export default App;
