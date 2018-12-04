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
  state = { selectedDay: undefined };

  handleDayClick = (day, modifiers = {}) => {
    if (modifiers.disabled) return;
    this.setState({ selectedDay: modifiers.selected ? undefined : day });
  };
  render() {
    // console.log(this.props.days);
    const DisabledDaysArray = Object.values(this.props.days).map((day, index) =>
      day === true ? index : false
    );
    console.log(DisabledDaysArray);
    const disabledDays = [
      { daysOfWeek: DisabledDaysArray },
      { before: new Date() }
    ];
    return (
      <>
        <DayPicker
          showOutsideDays
          selectedDays={this.state.selectedDay}
          disabledDays={disabledDays}
          onDayClick={this.handleDayClick}
          fromMonth={new Date()}
          localeUtils={MomentLocaleUtils}
          locale={"ar"}
        />
        <SelectedDateDiv>
          {this.state.selectedDay
            ? this.state.selectedDay.toLocaleDateString()
            : " اختار تاريخ الموعد"}
        </SelectedDateDiv>
      </>
    );
  }
}
