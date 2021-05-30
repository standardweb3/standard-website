import React, { useEffect, useState, useRef, useMemo } from "react";
import { createUseStyles, useTheme } from "react-jss";

import polkakr from "assets/images/logos/wtppolkakr.png";
import polkabase from "assets/images/logos/wtppolkabase.png";
import bitblock from "assets/images/logos/wtpbitblock.png";
import a195 from "assets/images/logos/wtpa195.png";
import au21 from "assets/images/logos/wtpau21.png";
import blocksync from "assets/images/logos/wtpblocksync.png";
import crypto from "assets/images/logos/wtpcrypto.png";
import phoenix from "assets/images/logos/wtpphoenix.png";
import d64 from "assets/images/logos/wtpd64.png";
import dfg from "assets/images/logos/wtpdfg.png";
import link from "assets/images/logos/wtplink.png";
import lotus from "assets/images/logos/wtplotus.png";
import master from "assets/images/logos/wtpmaster.png";
import foursv from "assets/images/logos/wtp4sv.png";
import Image from "../Image";
// import classNames from "classnames";

// const useStyles = createUseStyles((Themes) => {
//   return {};
// });

const IMAGES = [polkabase, polkakr, lotus, link];

function Launch(props) {
  const [mousePos, setMousePos] = useState(null);
  const [index, setIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [prevImagesLen, setPrevImagesLen] = useState(0);
  const imagesRef = useRef(images);
  imagesRef.current = images;

  useEffect(() => {
    if (prevImagesLen <= images.length && images.length > 0) {
      setTimeout(() => {
        popImages();
      }, 3000);
    }

    if (index === IMAGES.length) {
      if (images.length === 0) {
        setIndex(0);
      }
    }
    setPrevImagesLen(images.length);
  }, [images]);

  useEffect(() => {
    if (index === IMAGES.length) {
      if (images.length !== 0) return;
    }
    if (mousePos === null) return;
    // setImages(images.map((item, index) => {}));

    index !== IMAGES.length &&
      setImages([
        ...images,
        { image: IMAGES[index], top: mousePos.y, left: mousePos.x },
      ]);

    setIndex(index + 1);
  }, [mousePos]);

  const popImages = () => {
    if (imagesRef.current.length === 0) return;
    const [_, ...rest] = imagesRef.current;
    setImages(rest);
  };

  const getMousePos = (ev) => {
    if (mousePos !== null) {
      const { clientX, clientY } = ev;
      const { x, y } = mousePos;
      const xdist = Math.abs(clientX - x);
      const ydist = Math.abs(clientY - y);
      const ddist = Math.sqrt(Math.pow(xdist, 2) + Math.pow(ydist, 2));
      if (xdist >= 100 || ydist >= 100 || ddist >= 100)
        setMousePos({ x: ev.clientX, y: ev.clientY });
    } else setMousePos({ x: ev.clientX, y: ev.clientY });
  };

  const renderImages = () => {};

  //   const _images = useMemo(() => {
  //     returnimages.map((elem) => <Image {...elem} />);
  //   }, images);

  //   const theme = useTheme();
  //   const classes = useStyles({ props, theme });

  return (
    <div
      className={{}}
      style={{ height: "500px", width: "100%", overflow: "hidden" }}
    >
      <main onMouseMove={getMousePos}>
        <div className="" style={{ position: "relative" }}>
          {mousePos !== null &&
            images.map((elem, index) => (
              <Image key={`${elem.top}-${elem.left}`} {...elem} />
            ))}
        </div>
      </main>
    </div>
  );
}

export default Launch;
