import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import setMinutes from "date-fns/set_minutes";
import setHours from "date-fns/set_hours";
import getDay from "date-fns/get_day";

class DatePickerComp extends React.Component {
  AvailableDays = date => {
    const day = getDay(date);
    return day !== 1 && day !== 3 && day !== 5;
  };
  state = {
    startDate: new Date()
  };

  render() {
    const { startDate } = this.state;

    return (
      <DatePicker
        selected={startDate}
        onChange={date => this.setState({ startDate: date })}
        placeholderText="أختر تاريخ و وقت الحجز"
        showTimeSelect
        showMonthDropdown
        minDate={new Date()}
        timeIntervals={30}
        dateFormat="yyyy/MM/dd h:mm aa"
        minTime={setHours(setMinutes(new Date(), 0), 5)}
        maxTime={setHours(setMinutes(new Date(), 0), 8)}
        todayButton={"اليوم"}
        timeCaption="الوقت"
        filterDate={this.AvailableDays}
      />
    );
  }
}
export default DatePickerComp;
