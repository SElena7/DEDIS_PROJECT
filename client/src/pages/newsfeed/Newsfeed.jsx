import React from 'react';
import Newscard from '../../components/newscard/Newscard';
import './Newsfeed.scss';

function Newsfeed() {
  const newsData = [
    { title: "Deserunt aliquip dolor dolore enim magna ea irure excepteur consectetur deserunt.", 
        text: "Consectetur enim aliqua laboris anim do velit eu ipsum reprehenderit officia. Esse proident cillum veniam dolor consectetur est aute fugiat id occaecat. Sunt dolor magna id commodo officia veniam laborum aliquip commodo.",
        date: "December 11, 2024" },
    { title: "Id in ex excepteur officia quis magna non reprehenderit fugiat.", 
        text: "Labore commodo elit reprehenderit esse fugiat. Voluptate proident commodo labore culpa sit exercitation exercitation ad aute consequat laborum cillum veniam. Velit dolor laboris irure amet nulla magna irure voluptate enim velit. Consectetur cupidatat duis occaecat Lorem enim. Adipisicing eu ut occaecat eiusmod proident minim est officia. Sunt ipsum reprehenderit fugiat non. Consequat tempor magna adipisicing aute ex incididunt aliqua reprehenderit voluptate officia cupidatat labore eiusmod.", 
        date: "December 12, 2024" },
    { title: "Reprehenderit aliquip mollit enim magna voluptate.", 
        text: "Velit aliquip aute cillum aliquip. Sunt sit elit sunt eu aliqua reprehenderit cupidatat tempor labore ullamco esse velit dolore quis. Officia eiusmod excepteur occaecat esse nostrud labore qui.", 
        date: "December 13, 2024" },
    { title: "Eu veniam commodo quis sint.", 
        text: "Ut reprehenderit quis laborum ea incididunt ullamco eiusmod laborum eu culpa consequat ea exercitation. Amet dolor reprehenderit pariatur do eu cillum fugiat irure aute mollit. Exercitation culpa cillum Lorem minim eiusmod aute irure. Et culpa consectetur voluptate mollit ullamco adipisicing id. Anim consequat mollit officia laboris quis ea. Velit minim reprehenderit id occaecat amet non duis cupidatat consequat adipisicing excepteur fugiat. Ad amet ullamco laboris veniam officia Lorem eu.", 
        date: "December 14, 2024" }
  ];

  return (
    <div className="newsfeed-container">
      {newsData.map((news, index) => (
        <Newscard
          key={index}
          title={news.title}
          text={news.text}
          date={news.date}
        />
      ))}
    </div>
  );
}

export default Newsfeed;
