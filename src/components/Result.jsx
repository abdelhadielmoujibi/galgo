import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { useResultContext } from "../contexts/ResultContextProfider";
import Loading from "./Loading";
const ResultFunctin = () => {
  const { getResult, termSearch, setTermSearch, Result, isLoading } =
    useResultContext();
  const location = useLocation();
  useEffect(() => {
    if(termSearch){
      
       getResult();
    }
   }, [termSearch]);

  if (isLoading) return <Loading />;
  console.log(location.pathname);
  console.log(Result);

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {Result?.results?.map(({ url, title }, index) => (
            <div key={index} className="md:w-2/5 md:w-full">
              <a href={url} target="_blank" rel="noreferrer">
                <p className="text-sm">
                  {url.length > 30 ? url.substring(0, 30) : url}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
            </div>
          ))}
        </div>
      );
    case "/images":
      return "image";
    case "/news":
      return "news";
    case "/videos":
      return "videos";

    default:
      return "ERROR!";
  }
};

export default ResultFunctin;
