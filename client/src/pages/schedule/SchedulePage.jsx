import React, { useState } from 'react';
import Schedule from '../../components/schedule/Schedule';
import one from '../../assets/schedule/sch_1.png';
import two from '../../assets/schedule/sch_2.png';
import three from '../../assets/schedule/sch_3.png';

import './SchedulePage.scss';

function SchedulePage() {
  const [schedules, setSchedules] = useState([
    { id: 1, title: 'Schedule for 5-6 graders', imageSrc: one, altText: 'Image for 5-6 graders' },
    { id: 2, title: 'Schedule for 7-8 graders', imageSrc: two, altText: 'Image for 7-8 graders' },
    { id: 3, title: 'Schedule for 9-10 graders', imageSrc: three, altText: 'Image for 9-10 graders' },
  ]);

  const addSchedule = () => {
    const newSchedule = {
      id: Date.now(),
      title: 'New Schedule',
      imageSrc: '',
      altText: 'Image for new schedule',
    };
    setSchedules([newSchedule, ...schedules]);
  };

  const deleteSchedule = (id) => {
    setSchedules(schedules.filter((schedule) => schedule.id !== id));
  };

  const editSchedule = (id, newTitle, newImageSrc) => {
    setSchedules(
      schedules.map((schedule) =>
        schedule.id === id
          ? { ...schedule, title: newTitle || schedule.title, imageSrc: newImageSrc || schedule.imageSrc }
          : schedule
      )
    );
  };

  return (
    <div className="schedule-page">
      <h1 className="schedule-page-title">Schedules</h1>
      <button onClick={addSchedule} className="add-schedule-button">Add New Schedule</button>
      <div className="schedules-list">
        {schedules.map((schedule) => (
          <Schedule
            key={schedule.id}
            title={schedule.title}
            imageSrc={schedule.imageSrc}
            altText={schedule.altText}
            onEdit={(newTitle, newImageSrc) => editSchedule(schedule.id, newTitle, newImageSrc)}
            onDelete={() => deleteSchedule(schedule.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default SchedulePage;
