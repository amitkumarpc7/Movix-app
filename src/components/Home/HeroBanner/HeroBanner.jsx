import React, { useEffect, useState } from "react";
import "./HeroBanner.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../Common/lazyLoadImage/Img.jsx";
import ContentWrapper from "../../Common/ContentWrapper/ContentWrapper.jsx";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);

  // Getting data and loading from useFetch
  const { data, loading } = useFetch("/movie/upcoming");

  // useEffect
  useEffect(() => {
    if (data) {
      const index = Math.floor(Math.random() * 20);
      const bg = url.backdrop + data?.results[index]?.backdrop_path;
      bg && setBackground(bg);
    }
  }, [data]);

  // Function searchQueryHandler
  function searchQueryHandler(e,btnClick) {
    if ((e.key === "Enter" || btnClick) && query.trim().length > 0) {
      navigate(`/search/${query}`);
    }
  }

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop_img">
          <Img src={background} />
        </div>
      )}
      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Millions of movies, tv shows and people to discover. Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
              placeholder="Search for movie or tv show ..."
            />
            <button onClick={(e)=>searchQueryHandler(e,true)}>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
