import React from "react";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import setMinutes from "date-fns/setMinutes";
import setHours from "date-fns/setHours";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import getDay from "date-fns/getDay";

/* // import "react-datepicker/dist/react-datepicker.css";

import arSA from "date-fns/locale/ar-SA";
registerLocale("ar-SA", arSA); */

// CSS Modules, react-datepicker-cssmodules.css

class DatePickerComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  AvailableDays = date => {
    const day = getDay(date);
    return day !== 1 && day !== 3 && day !== 5;
  };
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
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

        /*         locale="ar-SA"
         */
      />
    );
  }
}
export default DatePickerComp;
