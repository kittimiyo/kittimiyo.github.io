import React from 'react';
import { observer, inject } from 'mobx-react';

import '../styles/container-schedule.scss'

function ScheduleContainer() {
  if(this.props.NavigatorStore.selected === 'schedule'){
    return (
      <div id="container-schedule" className="container">
        <div className="title">Schedule</div>
        <div >Coming soon!</div>
      </div>
    );
  }

  return null;
}


export default inject('NavigatorStore')(observer(ScheduleContainer));