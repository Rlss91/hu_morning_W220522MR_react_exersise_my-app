import { Fragment, useEffect, useRef, useState } from "react";
import axios from "axios";
import "./DynamicLoadPage.scss";
import ImageComponent from "components/Image.component";

let nextUrl = "https://rickandmortyapi.com/api/character";
let loading = false;
const DynamicLoadPage = () => {
  const [chars, setChars] = useState([]);
  const imgContainerRef = useRef();
  useEffect(() => {
    getNextChars();
  }, []);
  useEffect(() => {
    loading = false;
  }, [chars]);
  const getNextChars = () => {
    if (loading) {
      return;
    }
    loading = true;
    axios
      .get(nextUrl)
      .then(({ data }) => {
        // let newChars = JSON.parse(JSON.stringify(chars));
        let newCharsFromServer = new Array(data.results.length);
        for (let i = 0; i < data.results.length; i++) {
          newCharsFromServer[i] = {
            img: data.results[i].image,
            title: data.results[i].name,
            id: data.results[i].id,
          };
        }
        // setChars([...newChars, ...newCharsFromServer]);
        setChars((prevState) => [...prevState, ...newCharsFromServer]);
        nextUrl = data.info.next;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleNextClick = () => {
    getNextChars();
  };
  const handleWheel = () => {
    if (
      imgContainerRef.current.scrollTop >
      imgContainerRef.current.scrollTopMax / 2
    ) {
      getNextChars();
    }
  };
  return (
    <div onWheel={handleWheel} className="img-container" ref={imgContainerRef}>
      {chars.map((imgItem) => (
        <ImageComponent
          key={imgItem.id}
          img={imgItem.img}
          title={imgItem.title}
        />
      ))}
      <button onClick={handleNextClick}>next</button>
    </div>
  );
};
export default DynamicLoadPage;
