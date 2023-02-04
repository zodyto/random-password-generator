import React, { useState } from 'react';

function GenerateForm({ generate }) {
  const [passwordLength, setPasswordLength] = useState(8);
  const handleSubmit = (e) => {
    e.preventDefault();
    generate(passwordLength);
  }
  return (
    <form onSubmit={handleSubmit} className="generate-form">
    <div className="slider-input">
      <input 
        type="range" 
        className="slider" 
        value={passwordLength} 
        min="8" 
        max="20" 
        onChange={(e) => setPasswordLength(e.target.value)}
      />
      <p><span>Password length: </span>{passwordLength}</p>
    </div>
      <button className="glow-button" type="submit">Generate</button>
    </form>
  );
}

export default GenerateForm;