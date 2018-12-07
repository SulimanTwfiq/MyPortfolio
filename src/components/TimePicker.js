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

const TimePickerComponent = ({ availableTime, timeOnChange }) => (
  <>
    <label>وقت الحجز</label>
    <p>
      <span>الأوقات المتاحة من الساعة </span>
      {availableTime.startTime > 12 ? availableTime.startTime - 12 + "مساء " : availableTime.startTime + "صباحاً"}
    </p>
    <p>
      <span> إلى الساعة </span>
      {availableTime.endTime > 12 ? availableTime.endTime - 12 + "مساء " : availableTime.endTime + "صباحاً "}
    </p>
    <TimePicker
      onChange={timeOnChange}
      disabledHours={() => disabledHours(availableTime.startTime, availableTime.endTime)}
      showSecond={false}
      format="h:m A"
      defaultValue={moment()
        .hour(availableTime.startTime)
        .minute(0)}
      use12Hours
    />
  </>
);

export default TimePickerComponent;
