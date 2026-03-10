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
            "VITE_API_KEY",
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
