import "rc-time-picker/assets/index.css";

import React from "react";

import moment from "moment";

import TimePicker from "rc-time-picker";

const now = moment()
  .hour(14)
  .minute(30);

function onChange(value) {
  //console.log(value);
}

function disabledHours(start = 0, end = 5) {
  let openHour = [];
  let closedHours = [];
  for (let i = start; i <= end; i++) {
    openHour.push(i);
  }
  for (let i = 0; i < 24; i++) {
    if (!openHour.find(num => num === i)) {
      closedHours.push(i);
    }
  }
  return closedHours;
}

const TimePickercComponent = () => (
  <TimePicker
    defaultValue={now}
    onChange={onChange}
    disabledHours={disabledHours}
    showSecond={false}
    use12Hours
  />
);
export default TimePickercComponent;
