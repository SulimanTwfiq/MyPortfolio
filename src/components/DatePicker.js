import React from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import styled from "styled-components";
import MomentLocaleUtils from "react-day-picker/moment";

// Make sure moment.js has the required locale data
import "moment/locale/ar";
const SelectedDateDiv = styled.div`
  background-color: #b2b2b2;
  color: white;
`;
export default class DatePicker extends React.Component {
  render() {
    const DisabledDaysArray = Object.values(this.props.days).map(
      (day, index) => day === false && index
    );
    const disabledDays = [
      { daysOfWeek: DisabledDaysArray },
      { before: new Date() }
    ];
    return (
      <>
        <DayPicker
          showOutsideDays
          selectedDays={this.props.selectedDay}
          disabledDays={disabledDays}
          onDayClick={this.props.dayOnChange}
          fromMonth={new Date()}
          localeUtils={MomentLocaleUtils}
          locale={"ar"}
        />
        <SelectedDateDiv>
          {this.props.selectedDay
            ? this.props.selectedDay.toLocaleDateString()
            : " اختار تاريخ الموعد"}
        </SelectedDateDiv>
      </>
    );
  }
}
