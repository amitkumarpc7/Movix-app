import React, { useState } from "react";
import ContentWrapper from "../Common/ContentWrapper/ContentWrapper";
import SwitchTabs from "../Common/SwitchTabs/SwitchTabs";
import useFetch from "../../hooks/useFetch";
import Carousel from "../Common/Carousel/Carousel";

const Popular = () => {
    const [endpoint,setEndpoint]=useState("movie");
    const {data,loading}=useFetch(`/${endpoint}/popular`);


  //Function onTabChange
  function onTabChange(tab) {
    setEndpoint(tab==="Movies"? "movie":"tv");
  }

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Whats's Popular</span>
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint}/>
    </div>
  );
};

export default Popular;
