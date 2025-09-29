import React, { useState, useEffect, useRef } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { UserAuth } from '../context/AuthContext'
import { db } from '../../firebase'
import { updateDoc, doc, onSnapshot } from 'firebase/firestore'
import Slider from "./Slider";
import { AiOutlineClose } from "react-icons/ai";

const SavedShows = () => {
    const [movies, setMovies] = useState([])
    const { user } = UserAuth()

   // Create a ref to the slider
    const sliderRef = useRef(null);

  // Slide left function
  const slideLeft = () => {
    sliderRef.current.scrollLeft -= 500; // adjust 500 for scroll amount
  };

  // Slide right function
  const slideRight = () => {
    sliderRef.current.scrollLeft += 500; // adjust 500 for scroll amount
    };
    
    useEffect(() => {
      if (!user?.email) return; // don’t run if user is null

      const docRef = doc(db, "users", user.email);

      const unsubscribe = onSnapshot(docRef, (docSnap) => {
        if (docSnap.exists()) {
          setMovies(docSnap.data()?.savedShows || []);
        }
      });

      // cleanup listener when component unmounts
      return () => unsubscribe();
    }, [user?.email]);

    const movieRef = doc(db, 'users', `${user?.email}`)
    const deleteShow = async (passedId) => {
        try {
            const result = movies.filter((item) => item.id !== passedId);
            await updateDoc(movieRef, {
                savedShows: result
            });
        } catch (e) {
            console.log(e);
            
        }
    }

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">My Shows</h2>
      <div className="relative flex items-center group">
        <FaChevronLeft
          onClick={slideLeft}
          className="absolute left-0 z-10 text-gray-300 opacity-10 hover:opacity-100 cursor-pointer hidden group-hover:block"
          size={40}
        />
        <Slider ref={sliderRef}>
          {movies.map((item, id) => (
            <div key={id} className="w-[160px] sm:w-[240px] lg:w[280px] inline-block cursor-pointer relative p-2">
              <img
                className="w-full h-auto block"
                src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                alt={item?.title}
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                <p className="whitespace-normal text-xs md:text-xs font-bold flex justify-center items-center h-full">
                  {item?.title ||
                    item?.name ||
                    item?.original_title ||
                    item?.original_name}
                </p>
                <p onClick={()=>deleteShow(item.id)} className="absolute text-gray-300 top-4 right-4"><AiOutlineClose /></p>      
              </div>
            </div>
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
}

export default SavedShows
