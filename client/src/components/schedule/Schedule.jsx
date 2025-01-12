import React, { useState } from 'react';
import './Schedule.scss';

function Schedule({ id, title, imageSrc, altText, onEdit, onDelete }) {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [newImageSrc, setNewImageSrc] = useState(imageSrc);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setNewImageSrc(e.target.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleTitleSubmit = () => {
    onEdit(editedTitle, newImageSrc); 
    setIsEditingTitle(false); 
  };

  return (
    <div className="schedule">
      <div className="schedule-title">
        {isEditingTitle ? (
          <div className="editing-title">
            <input
              type="text"
              value={editedTitle}
              onChange={handleTitleChange}
              autoFocus
              className="edit-title-input"
            />
            <button onClick={handleTitleSubmit} className="submit-title-button">Ok</button>
          </div>
        ) : (
          <>
            <h2>{editedTitle}</h2> {}
            <button onClick={() => setIsEditingTitle(true)} className="edit-title-button">Edit Title</button>
          </>
        )}
      </div>

      <div className="schedule-image">
        <img src={newImageSrc} alt={altText} />
        <div className="edit-image">
          <input type="file" onChange={handleImageUpload} />
        </div>
      </div>

      <button onClick={() => onDelete(id)} className="delete-schedule-button">
        Delete
      </button>
    </div>
  );
}

export default Schedule;
