import React from "react";
import { Helmet } from "react-helmet";

interface HeadProps {
  title: String;
}

const Head: React.FC<HeadProps> = (props) => {
  return (
    <Helmet>
      <title>dolden.dev | {props.title} </title>
      <meta
        name="description"
        content="Paul Dolden: A Full-Stack Web Developer in Essex, UK"
      ></meta>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Anaheim&family=DotGothic16&family=Source+Code+Pro:wght@200;300;400;500;600;700;900&display=swap"
        rel="stylesheet"
      ></link>
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨‍💻</text></svg>"
      />
    </Helmet>
  );
};

export default Head;
