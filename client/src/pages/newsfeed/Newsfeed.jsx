import React, { useState } from 'react';
import Newscard from '../../components/newscard/Newscard';
import './Newsfeed.scss';

function Newsfeed() {
  const [newsData, setNewsData] = useState([
    {
      title: "Deserunt aliquip dolor dolore enim magna ea irure excepteur consectetur deserunt.",
      text: "Consectetur enim aliqua laboris anim do velit eu ipsum reprehenderit officia. Esse proident cillum veniam dolor consectetur est aute fugiat id occaecat. Sunt dolor magna id commodo officia veniam laborum aliquip commodo.",
      date: "November 8, 2024",
    },
    {
      title: "Id in ex excepteur officia quis magna non reprehenderit fugiat.",
      text: "Labore commodo elit reprehenderit esse fugiat. Voluptate proident commodo labore culpa sit exercitation exercitation ad aute consequat laborum cillum veniam. Velit dolor laboris irure amet nulla magna irure voluptate enim velit. Consectetur cupidatat duis occaecat Lorem enim. Adipisicing eu ut occaecat eiusmod proident minim est officia. Sunt ipsum reprehenderit fugiat non. Consequat tempor magna adipisicing aute ex incididunt aliqua reprehenderit voluptate officia cupidatat labore eiusmod.",
      date: "December 12, 2024",
    },
    {
      title: "Reprehenderit aliquip mollit enim magna voluptate.",
      text: "Velit aliquip aute cillum aliquip. Sunt sit elit sunt eu aliqua reprehenderit cupidatat tempor labore ullamco esse velit dolore quis. Officia eiusmod excepteur occaecat esse nostrud labore qui.",
      date: "December 2, 2024",
    },
    {
      title: "Eu veniam commodo quis sint.",
      text: "Ut reprehenderit quis laborum ea incididunt ullamco eiusmod laborum eu culpa consequat ea exercitation. Amet dolor reprehenderit pariatur do eu cillum fugiat irure aute mollit. Exercitation culpa cillum Lorem minim eiusmod aute irure. Et culpa consectetur voluptate mollit ullamco adipisicing id. Anim consequat mollit officia laboris quis ea. Velit minim reprehenderit id occaecat amet non duis cupidatat consequat adipisicing excepteur fugiat. Ad amet ullamco laboris veniam officia Lorem eu.",
      date: "September 6, 2024",
    },
    {
      title: "Veniam qui proident duis sunt fugiat duis consequat eiusmod id.",
      text: "Cillum aliquip velit culpa officia enim mollit ipsum laboris commodo consequat consequat ex excepteur est. Elit sunt mollit duis nostrud cillum dolor. Non do consequat nisi ut in adipisicing anim fugiat officia.",
      date: "July 23, 2023",
    },
    {
      title: "Labore dolore reprehenderit velit minim id aliquip veniam.",
      text: "Sit labore esse sunt incididunt adipisicing est aliquip proident ullamco dolore est irure culpa adipisicing. Dolore tempor ex ad excepteur est laborum ullamco commodo ipsum aliquip laborum ut. Reprehenderit proident incididunt commodo et id irure exercitation. Fugiat dolor ullamco nulla in laboris cupidatat occaecat amet ullamco non laborum laborum consectetur duis. Labore nisi sunt sunt tempor est culpa. Non adipisicing id est aute voluptate ut nisi duis ut anim fugiat proident consequat. Laborum sint ad laboris consectetur pariatur proident nostrud.",
      date: "January 30, 2024",
    },
  ]);

  const handleDelete = (index) => {
    const newNewsData = [...newsData];
    newNewsData.splice(index, 1);
    setNewsData(newNewsData);
  };

  const handleEdit = (index, newTitle, newText, newDate) => {
    const newNewsData = [...newsData];
    newNewsData[index] = { ...newNewsData[index], title: newTitle, text: newText, date: newDate };
    setNewsData(newNewsData);
  };

  const sortedNewsData = newsData.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="newsfeed-container">
      <button
        className="add-news-btn"
        onClick={() =>
          setNewsData([
            ...newsData,
            { title: "New Title", text: "New text content", date: "January 1, 2025" },
          ])
        }
      >
        Add New Post
      </button>
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
