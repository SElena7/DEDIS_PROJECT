import React from 'react';
import './Newscard.scss';

function Newscard({ title, text, date }) {
  return (
    <div className="newscard">
      <h3 className="newscard-title">{title}</h3>
      <p className="newscard-text">{text}</p>
      <div className="newscard-date">{date}</div>
    </div>
  );
}

export default Newscard;
