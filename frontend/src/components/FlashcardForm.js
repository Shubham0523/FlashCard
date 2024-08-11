import React, { useState, useEffect } from "react";

const FlashcardForm = ({
  onAddFlashcard,
  onUpdateFlashcard,
  editingFlashcard,
}) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    if (editingFlashcard) {
      setQuestion(editingFlashcard.question);
      setAnswer(editingFlashcard.answer);
    }
  }, [editingFlashcard]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingFlashcard) {
      onUpdateFlashcard({ ...editingFlashcard, question, answer });
    } else {
      onAddFlashcard({ question, answer });
    }
    setQuestion("");
    setAnswer("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">
          Question:
        </label>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter your question"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">
          Answer:
        </label>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter the answer"
        />
      </div>
      <button
        type="submit"
        className={`w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors`}
      >
        {editingFlashcard ? "Update" : "Add"} Flashcard
      </button>
    </form>
  );
};

export default FlashcardForm;
