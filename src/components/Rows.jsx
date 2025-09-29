import axios from "axios";
import Movie from "../components/Movie";
import { useState, useEffect, useRef } from "react";
import Slider from "./Slider";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Rows = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  // Create a ref to the slider
  const sliderRef = useRef(null);

  useEffect(() => {
    axios.get(fetchURL).then((res) => {
      setMovies(res.data.results);
    });
  }, [fetchURL]);

  // Slide left function
  const slideLeft = () => {
    sliderRef.current.scrollLeft -= 500; // adjust 500 for scroll amount
  };

  // Slide right function
  const slideRight = () => {
    sliderRef.current.scrollLeft += 500; // adjust 500 for scroll amount
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <FaChevronLeft
          onClick={slideLeft}
          className="absolute left-0 z-10 text-gray-300 opacity-10 hover:opacity-100 cursor-pointer hidden group-hover:block"
          size={40}
        />
        <Slider ref={sliderRef}>
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </Slider>
        <FaChevronRight
          onClick={slideRight}
          className="absolute right-0 z-10 text-gray-300 opacity-10 hover:opacity-100 cursor-pointer hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
};

export default Rows;
