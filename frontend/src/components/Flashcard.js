import React, { useState } from 'react';

const Flashcard = ({ flashcard }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = ()=>{
        setIsFlipped(!isFlipped)
    }

    return (
        <div className="flashcard" onClick={handleFlip}>
            <div className={isFlipped ? 'back' : 'front'}>
                {isFlipped ? flashcard.answer : flashcard.question}
            </div>
        </div>
    );
};

export default Flashcard;