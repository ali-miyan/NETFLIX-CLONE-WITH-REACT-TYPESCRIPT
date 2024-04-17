import axios from "axios";
import { useEffect, useState } from "react";
import endpoints, { createImgUrl } from "../services/movieServices";
import { apiObj } from "../utils/netflixApi";


const Banner = () => {
  const [movie, setMovie] = useState<apiObj>();

  useEffect(() => {
    axios.get(endpoints.popular).then((res) => {
      const movies = res.data.results;

      const random = movies[Math.floor(Math.random() * movies.length)];

      console.log(random);

      setMovie(random);
    });
  }, []);

  if (!movie) {
    return <p>loading movies...</p>;
  }

  const trancuate = (str: string, length: number): string => {
    if (!str) return "";

    return str.length > length ? str.slice(0, length) + "...." : str;
  };

  const { title, backdrop_path, release_date, overview } = movie;

  return (
    <div className="w-full h-[550px] lg:h-[750px]">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] lg:h-[750px] bg-gradient-to-r from-black" />
        <img
          className="w-full h-[550px] lg:h-[750px] object-cover object-top"
          src={createImgUrl(backdrop_path,"original")}
          alt={title}
        />

        <div className="absolute w-full top-[20%] lg:top-[35%] p-4 md:p-8">
          <h1 className="text-3xl md:text-6xl font-bold">{title}</h1>
          <div className="mt-8 mb-4">
            <button className="capitalize border  border-gray-300 py-3 px-5 ml-4">
              play
            </button>
            <button className="capitalize border border-gray-300 py-3 ml-4 px-3">
              watch later
            </button>
          </div>
          <p className="text-gray-400 text-sm">{release_date}</p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {trancuate(overview, 170)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
