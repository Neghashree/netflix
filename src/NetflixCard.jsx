import React from "react";
import Cards from "./Cards";
import Data from "./Netflix";

function NetflixCard(){
    return(
        <>
        <span><h1 className="netflix-heading">NETFLIX SHOWS FOR YOU</h1></span>
          {Data.map((val) => {
          console.log(val);
          return(
            <Cards 
            showTitle = {val.showTitle}
            showName = {val.showName}
            showDescription = {val.showDescription}
            showPoster = {val.showPoster}
            showLink = {val.showLink}
            showRating = {val.showRating}
            showRatingLink = {val.showRatingLink}
            />
            )
           })}
        </>
      ) }

export default NetflixCard;