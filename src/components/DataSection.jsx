import React, { useState } from 'react'

function DataSection({ randomPassword }) {
  const [copyText, setCopyText] = useState("Copy");
  const copy = () => {
    navigator.clipboard.writeText(randomPassword);
    setCopyText('Copied!');
    setTimeout(() => {
      setCopyText('Copy');
    }, 1000);
  }
  return (
    <div className="data-section">
      <div className="data-container">
        <p className="data">
          { randomPassword }
        </p>
        <button onClick={copy} className="copy-btn">{copyText}</button>
      </div>
    </div>
  )
}

export default DataSection