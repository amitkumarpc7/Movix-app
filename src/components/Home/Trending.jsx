import React, { useState } from "react";
import ContentWrapper from "../Common/ContentWrapper/ContentWrapper";
import SwitchTabs from "../Common/SwitchTabs/SwitchTabs";
import useFetch from "../../hooks/useFetch";
import Carousel from "../Common/Carousel/Carousel";

const Trending = () => {
    const [endpoint,setEndpoint]=useState("day");
    const {data,loading}=useFetch(`/trending/all/${endpoint}`);


  //Function onTabChange
  function onTabChange(tab) {
    setEndpoint(tab==="Day"? "day":"week");
  }

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default Trending;
