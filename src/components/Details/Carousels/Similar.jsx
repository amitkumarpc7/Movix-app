import React from "react";
import Carousel from "../../Common/Carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

const Similar = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(`/${mediaType}/${id}/similar`);

    const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

    if(!data || !data?.results?.length>0){
        return(<></>)
    }
    
    return (
        <Carousel
            title={title}
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
            cls={"similar"}
        />
    );
};

export default Similar;