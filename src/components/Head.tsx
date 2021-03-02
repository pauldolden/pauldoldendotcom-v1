import React from "react";
import { Helmet } from "react-helmet";

const Head = () => {
  return (
    <Helmet>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Anaheim&family=DotGothic16&family=Source+Code+Pro:wght@200;300;400;500;600;700;900&display=swap"
        rel="stylesheet"
      ></link>
    </Helmet>
  );
};

export default Head;
