import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import Newscard from '../../components/newscard/Newscard';
import './Newsfeed.scss';

function Newsfeed() {
  const [newsData, setNewsData] = useState([]);
  const { currentUser } = useContext(AuthContext);

  const isAdmin = currentUser?.id === 1; // Check if the logged-in user is an admin


  // Fetch data from back-end when component mounts
  useEffect(() => {
    axios.get('http://localhost:8800/api/posts', { params: { authorId: 1 } })
      .then(response => {
        setNewsData(response.data);
      })
      .catch(error => {
        console.error("Error fetching news data:", error);
      });
  }, []);

  const handleAdd = () => {
    const newPost = {
      title: "New Title",
      text: "New text content",
      date: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD format
    };

    axios.post('http://localhost:8800/api/posts', newPost)
      .then(response => {
        setNewsData([...newsData, response.data]); // Add the new post to the state
      })
      .catch(error => {
        console.error("Error adding new post:", error);
      });
  };

  const handleDelete = (index) => {
    axios.delete(`http://localhost:8800/api/posts/${index}`)
      .then(() => {
        const newNewsData = [...newsData];
        newNewsData.splice(index, 1);
        setNewsData(newNewsData);
      })
      .catch(error => {
        console.error("Error deleting post:", error);
      });
  };

  const handleEdit = (index, newTitle, newText, newDate) => {
    const updatedPost = { title: newTitle, text: newText, date: newDate };

    axios.put(`http://localhost:8800/api/posts/${index}`, updatedPost)
      .then(() => {
        const newNewsData = [...newsData];
        newNewsData[index] = updatedPost;
        setNewsData(newNewsData);
      })
      .catch(error => {
        console.error("Error updating post:", error);
      });
  };

  const sortedNewsData = newsData.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="newsfeed-container">
      {isAdmin &&
        <button
          className="add-news-btn"
          onClick={handleAdd}>
          Add New Post
        </button>
      }
      <div className="news-cards-wrapper">
        {sortedNewsData.map((news, index) => (
          <Newscard
            key={index}
            title={news.title}
            text={news.text}
            date={news.date}
            onDelete={() => handleDelete(index)}
            onEdit={(newTitle, newText, newDate) => handleEdit(index, newTitle, newText, newDate)}
          />
        ))}
      </div>
    </div>
  );
}

export default Newsfeed;
