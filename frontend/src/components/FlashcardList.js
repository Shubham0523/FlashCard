import React, { useState, useEffect } from "react";
import axiosInstance from "./axiosInstance";

const FlashcardList = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchFlashcards = async () => {
      const response = await axiosInstance.get("/api/flashcards");
      setFlashcards(response.data);
    };
    fetchFlashcards();
  }, []);

  const nextFlashcard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const prevFlashcard = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length
    );
  };

  if (flashcards.length === 0)
    return <div className="text-center text-2xl font-semibold">Loading...</div>;

  return (
    <div className="bg-gradient-to-r from-gray-200 to-white ">
      <h1 className="text-6xl font-bold text-center mb-8 pt-8">FlashCard Game</h1>
      <div className="min-h-screen  p-8 flex flex-col items-center ">
        <div className="bg-gradient-to-r from-orange-300 to-orange-400 p-10 rounded-lg shadow-md max-w-3xl w-full">
          <div className="cursor-pointer group perspective pb-16">
            <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 mb-10">
              <div className="text-4xl font-bold animate-hflip text-center mb-10 absolute backface-hidden w-full h-full text-slate-700">
                {flashcards[currentIndex].question}
              </div>
              <div className="absolute my-rotate-y-180 backface-hidden w-full h-full  text-3xl text-white font-bold text-center mb-6">
                {flashcards[currentIndex].answer}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4 mt-12">
            <button
              className="bg-red-500 text-white text-lg px-6 py-3 rounded-lg hover:bg-red-600 transition-all"
              onClick={prevFlashcard}
            >
              Previous
            </button>
            <button
              className="bg-blue-500 text-white text-lg px-6 py-3 rounded-lg hover:bg-blue-600 transition-all"
              onClick={nextFlashcard}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashcardList;
