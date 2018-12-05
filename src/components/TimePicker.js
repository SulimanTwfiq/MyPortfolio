import "rc-time-picker/assets/index.css";

import React from "react";

import TimePicker from "rc-time-picker";
import moment from "moment";

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
  <>
    <label>وقت الحجز</label>
    <p>
      <span>الأوقات المتاحة من الساعة </span>
      {time.startTime > 12 ? time.startTime - 12 + "مساء " : time.startTime + "صباحاً"}
    </p>
    <p>
      <span> إلى الساعة </span>
      {time.endTime > 12 ? time.endTime - 12 + "مساء " : time.endTime + "صباحاً "}
    </p>
    <TimePicker
      onChange={timeOnChange}
      disabledHours={() => disabledHours(time.startTime, time.endTime)}
      showSecond={false}
      format="h:m A"
      defaultValue={moment()
        .hour(time.startTime)
        .minute(0)}
      use12Hours
    />
  </>
);

export default TimePickerComponent;
