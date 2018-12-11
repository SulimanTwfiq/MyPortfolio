import "rc-time-picker/assets/index.css";
import React from "react";
import TimePicker from "rc-time-picker";
import moment from "moment";

const TimePickerComponent = ({ availableTime: { startTime, endTime }, timeOnChange }) => (
  <>
    <label>وقت الحجز</label>
    <p>
      <span>الأوقات المتاحة من الساعة </span>
      {startTime > 12 ? startTime - 12 + "مساء " : startTime + "صباحاً"}
    </p>
    <p>
      <span> إلى الساعة </span>
      {endTime > 12 ? endTime - 12 + "مساء " : endTime + "صباحاً "}
    </p>
    <TimePicker
      onChange={timeOnChange}
      disabledHours={() => Array.from(Array(24).keys()).filter(hour => !(hour >= startTime && hour <= endTime))}
      showSecond={false}
      format="h:m A"
      defaultValue={moment()
        .hour(startTime)
        .minute(0)}
      use12Hours
    />
  </>
);

export default TimePickerComponent;
