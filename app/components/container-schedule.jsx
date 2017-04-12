import React from 'react';
import { observer, inject } from 'mobx-react';

import '../styles/container-schedule.scss';

function ScheduleContainer() {
  if (this.props.NavigatorStore.selected === 'schedule') {
    const schedule = [
      {
        time: '4:30pm',
        text: 'Arrival, drinks and seating at tables'
      },
      {
        time: '5pm',
        text: 'Ceremony'
      },
      {
        time: '6pm',
        text: 'Start of Reception, Cake cutting'
      },
      {
        time: '6pm - 7:30pm',
        text: 'Dinner'
      },
      {
        time: '7pm',
        text: 'Wedding festivities'
      },
      {
        time: '7:30pm',
        text: 'Cake is served'
      },
      {
        time: '7:30pm - 11pm',
        text: 'Dancing'
      },
      {
        time: '9pm',
        text: 'Coffee Service'
      },
      {
        time: '11pm',
        text: 'Reception concludes'
      }
    ];


    return (
      <div id="container-schedule" className="container">
        <div className="title">Schedule</div>
        <div className="subnote">Subject to change</div>
        <div className="blur"></div>
        <div className="flex-column">
          {schedule.map((item) => {
            return (
              <div key={item.time} className="flex-row">
                <div className="internal time">{item.time}</div>
                <div className="internal text">{item.text}</div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }

  return null;
}


export default inject('NavigatorStore')(observer(ScheduleContainer));