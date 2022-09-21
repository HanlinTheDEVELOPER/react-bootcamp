import React, { useContext } from "react";
import Image from "../Component/Image";

import { Context } from "../Context";
import getClass from "../Utils";

const Photos = () => {
  const { allPhotos } = useContext(Context);

  const elements = allPhotos.map((each, id) => (
    <Image key={id} img={each} className={getClass(id)} />
  ));
  return <main className="photos">{elements}</main>;
};

export default Photos;
