import React, { useEffect, useState } from "react";
import img1 from "./../../assets/images/See_Explanation._Clicking_on_the_picture_will_download_the_highest_resolution_version_available.jpg";
import img2 from "./../../assets/images/maxresdefault (1).jpg";
import img3 from "./../../assets/images/unnamed.jpg";
import img4 from "./../../assets/images/Tr1ZMMv.jpeg";
import img5 from "./../../assets/images/M74-Galaxy.jpg";
import { findIndex, isEqual } from "lodash";

const galaxyList = [
  {
    src: img1,
    name: "Galaxy 001-GDY",
    title: "The first of universy",
    description:
      "001-GDY is first galaxy of new universy. 001-GDY is first galaxy of new universy. 001-GDY is first galaxy of new universy.",
  },
  {
    src: img2,
    name: "Galaxy 002-GXZ",
    title: "The second of universy",
    description:
      "002-GXZ is first galaxy of new universy. 002-GXZ is first galaxy of new universy. 002-GXZ is first galaxy of new universy.",
  },
  {
    src: img3,
    name: "Galaxy 003-GDA",
    title: "The third of universy",
    description:
      "001-GDY is first galaxy of new universy. 001-GDY is first galaxy of new universy. 001-GDY is first galaxy of new universy.",
  },
  {
    src: img4,
    name: "Galaxy 004-GLY",
    title: "The forth of universy",
    description:
      "001-GDY is first galaxy of new universy. 001-GDY is first galaxy of new universy. 001-GDY is first galaxy of new universy.",
  },
  {
    src: img5,
    name: "Galaxy 005-GHX",
    title: "The five of universy",
    description:
      "001-GDY is first galaxy of new universy. 001-GDY is first galaxy of new universy. 001-GDY is first galaxy of new universy.",
  },
];

const Home = (props) => {
  const [selected, setSelected] = useState(galaxyList[0]);

  useEffect(() => {
    const changeSelected = setInterval(function () {
      let index = findIndex(galaxyList, (galaxy) => isEqual(galaxy, selected));
      let maxIndex = galaxyList.length - 1;
      if (index === maxIndex) {
        setSelected(galaxyList[0]);
      } else setSelected(galaxyList[index + 1]);
    }, 2000);
    return () => clearInterval(changeSelected);
  }, [selected]);
  
  return (
    <div className="home-container">
      <div className="main">
        <div className="top-content">
          <div className="main-title">
            <p>Just visit some beautiful galaxy</p>
          </div>
          <div className="main-content">
            <div className="galaxy-img">
              <img alt="fail" src={selected.src} />
            </div>
            <div className="galaxy-description">
              <p>{selected.name}</p>
              <p>{selected.title}</p>
              <p>{selected.description}</p>
              <button className="read-more">Read more</button>
            </div>
          </div>
        </div>
        <div className="bot-content">
          <div className="subtitle">
            <p>Top newest galaxy</p>
            <p>Click below image to see details</p>
          </div>
          <div className="img-list">
            {galaxyList.map((galaxy, index) => (
              <img
                ket={index}
                alt="fail"
                src={galaxy.src}
                onClick={() => setSelected(galaxy)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
