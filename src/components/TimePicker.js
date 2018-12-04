import "rc-time-picker/assets/index.css";

import React from "react";

import TimePicker from "rc-time-picker";

const disabledHours = (start, end) => {
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
};

const TimePickerComponent = ({ time, timeOnChange }) => (
  <TimePicker
    onChange={timeOnChange}
    disabledHours={() => disabledHours(time.startTime, time.endTime)}
    showSecond={false}
    format={"h:mm"}
    use12Hours
  />
);

export default TimePickerComponent;
