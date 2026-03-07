import React, { createContext, useContext, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { useResultContext } from "../contexts/ResultContextProfider";
const Search = () => {
  const [text, setText] = useState('');
  const { setTermSearch } = useResultContext();
  const [debounceValue] = useDebounce(text,300);

  useEffect(() => {
    if (debounceValue) (setTermSearch(debounceValue), [debounceValue]);
  });

  return (
    <div className="dark:text-black flex">
      <label htmlFor="search-in"></label>
      <input
        type="text"
        name="search-value"
        value={text}
        id="search-in"
        placeholder="Search on GALGO"
        className="border-1 w-[60vw] mx-[20vw] p-3 rounded-full mt-[20px] bg-gray-200 shadow-lg focus:border-[#52E3A8] focus:border-2 outline-none my-[10px] mr-0"
        onChange={(e) => setText(e.target.value)}
      />
      {text && (
        <button onClick={(e) => setText("")} className="cursor-pointer">
          ❌
        </button>
      )}
    </div>
  );
};

export default Search;
