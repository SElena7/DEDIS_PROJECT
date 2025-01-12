import React, { useState } from 'react';
import './Newscard.scss';

function Newscard({ title, text, date, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newText, setNewText] = useState(text);
  const [newDate, setNewDate] = useState(date);

  const handleSave = () => {
    onEdit(newTitle, newText, newDate);
    setIsEditing(false);
  };

  return (
    <div className="newscard">
      {isEditing ? (
        <div className="newscard-edit">
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Edit Title"
            className="newscard-title-input"
          />
          <textarea
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            placeholder="Edit Text"
            className="newscard-text-input"
          />
          <input
            type="date"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
            className="newscard-date-input"
          />
          <button onClick={handleSave} className="save-btn">Save changes</button>
        </div>
      ) : (
        <div>
          <h3 className="newscard-title">{title}</h3>
          <p className="newscard-text">{text}</p>
          <div className="newscard-date">{date}</div>
          <div className="newscard-actions">
            <button onClick={() => setIsEditing(true)} className="edit-btn">Edit post</button>
            <button onClick={onDelete} className="delete-btn">Delete</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Newscard;
