import React, { useState, useEffect } from "react";
import FlashcardForm from "./FlashcardForm";
import axiosInstance from "./axiosInstance";

const AdminDashboard = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [editingFlashcard, setEditingFlashcard] = useState(null);

  useEffect(() => {
    const fetchFlashcards = async () => {
      const response = await axiosInstance.get("/api/flashcards");
      setFlashcards(response.data);
    };
    fetchFlashcards();
  }, [flashcards]);

  const addFlashcard = async (newFlashcard) => {
    const response = await axiosInstance.post("/api/flashcards", newFlashcard);
    console.log("New Flashcard Response:", response.data); // Log the response
    setFlashcards([...flashcards, response.data]);
  };

  const updateFlashcard = async (updatedFlashcard) => {
    const response = await axiosInstance.put(
      `/api/flashcards/${updatedFlashcard.id}`,
      updatedFlashcard
    );
    setFlashcards(
      flashcards.map((flashcard) =>
        flashcard.id === updatedFlashcard.id ? response.data : flashcard
      )
    );
    setEditingFlashcard(null);
  };

  const deleteFlashcard = async (id) => {
    await axiosInstance.delete(`/api/flashcards/${id}`);
    setFlashcards(flashcards.filter((flashcard) => flashcard.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-4xl font-bold mb-6 text-center">Admin Dashboard</h2>
      <div className="p-8 bg-white rounded-xl shadow-lg mb-8 max-w-md mx-auto transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <FlashcardForm
          onAddFlashcard={addFlashcard}
          onUpdateFlashcard={updateFlashcard}
          editingFlashcard={editingFlashcard}
        />
      </div>
      <ul className="space-y-4">
        {flashcards.map((flashcard) => (
            <li
            key={flashcard.id}
            className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between"
            >
            <span>{flashcard.question}</span>
            <div>
              <button
                className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600"
                onClick={() => setEditingFlashcard(flashcard)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                onClick={() => deleteFlashcard(flashcard.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
