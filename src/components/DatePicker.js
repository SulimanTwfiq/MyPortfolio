import React from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import MomentLocaleUtils from "react-day-picker/moment";
import "moment/locale/ar";
class DatePicker extends React.Component {
  render() {
    const { selectedDay, dayOnChange, days } = this.props;
    /*     const DaysInArabic = ["الأحد", "الأثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"].map(
      (day, index) => days[index] == true
    ); */
    console.log(selectedDay);
    const DisabledDaysArray = Object.values(days).map((day, index) => day === false && index);
    const disabledDays = [{ daysOfWeek: DisabledDaysArray }, { before: new Date() }];

    return (
      <>
        <label>موعد الحجز</label>
        {selectedDay && <span>{selectedDay}</span>}
        <DayPicker
          showOutsideDays
          selectedDays={selectedDay}
          disabledDays={disabledDays}
          onDayClick={dayOnChange}
          fromMonth={new Date()}
          localeUtils={MomentLocaleUtils}
          locale={"ar"}
        />
      </>
    );
  }
}

export default DatePicker;
