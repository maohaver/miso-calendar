import React from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; // only needs to be imported once
import { render }from 'react-dom';
import App from './components/app';

var today = new Date();
var minDate = Number(new Date()) - (24*60*60*1000) * 7; // One week before today

render(
  <InfiniteCalendar
    width={600}
    height={600}
    selectedDate={today}
    disabledDays={[0,6]}
    minDate={minDate}
    keyboardSupport={true}
  />,
  document.getElementById('app')
);
