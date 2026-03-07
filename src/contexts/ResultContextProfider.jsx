import React, { createContext, useContext, useState } from "react";
const ResultContext = createContext();
const baseUrl = "https://google-search74.p.rapidapi.com/";
const ResultContextProvider = ({ children }) => {
  const [termSearch, setTermSearch] = useState('');
  const [Result, setResut] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getResult = async () => {
    setIsLoading(true);
    const responce = await fetch(
      `${baseUrl}?query=${termSearch}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "983915238fmsh0c3a41341a18ea6p12af53jsn9e9cddb56a86",
          "x-rapidapi-host": "google-search74.p.rapidapi.com",
        },
      },
    );
    const data = await responce.json();
    // console.log(data);
    setResut(data);
    setIsLoading(false);
  };
  return (
    <ResultContext.Provider
      value={{ getResult, termSearch, setTermSearch, Result, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};
export default ResultContextProvider;
export const useResultContext = () => useContext(ResultContext);
