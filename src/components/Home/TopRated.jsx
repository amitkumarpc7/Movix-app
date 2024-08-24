import React, { useState } from "react";
import ContentWrapper from "../Common/ContentWrapper/ContentWrapper";
import SwitchTabs from "../Common/SwitchTabs/SwitchTabs";
import useFetch from "../../hooks/useFetch";
import Carousel from "../Common/Carousel/Carousel";

const TopRated = () => {
    const [endpoint,setEndpoint]=useState("movie");
    const {data,loading}=useFetch(`/${endpoint}/top_rated`);


  //Function onTabChange
  function onTabChange(tab) {
    setEndpoint(tab==="Movies"? "movie":"tv");
  }

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Top Rated</span>
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint}/>
    </div>
  );
};

export default TopRated;
