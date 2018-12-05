import React, { Component } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { DefaultCard } from "../components/Card";
import TimePicker from "../components/TimePicker";
import DatePicker from "../components/DatePicker";
import Button from "../components/Button";
import DialogModal from "../components/DialogModal";
import { graphql } from "gatsby";
const Container = styled(DefaultCard)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  button {
    margin: 10px auto;
    font-size: 1.2rem;
  }
  input,
  textarea {
    margin: 10px auto;

    width: 220px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid brown;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.18);
  }

  p {
    color: grey;
  }
  .DayPicker {
    &-wrapper {
      background-color: white;
      border: 2px rgba(0, 0, 0, 0.3) solid;
      padding-bottom: 0;
      button {
        padding: 5px;
      }
    }
    &-Month {
      margin: 0;
    }
  }
`;
export const ContactCopmonent = ({
  timeOnChange,
  selectedTime,
  time,
  days,
  dayOnChange,
  selectedDay
}) => {
  const url =
    "https://wa.me/966544710774?text=" +
    `
  *موعد حجز * 
  وقت الحجز
  ${selectedDay}
 تاريخ الحجز
 ${selectedTime}
 `;
  return (
    <Container center>
      <StyledForm>
        <h1>حجز موعد</h1>
        <p>
          <span> حجز المواعيد من الساعة </span>
          {time.startTime > 12
            ? time.startTime - 12 + "مساء "
            : time.startTime + "صباحاً"}
        </p>
        <p>
          <span> إلى الساعة </span>
          {time.endTime > 12
            ? time.endTime - 12 + "مساء "
            : time.endTime + "صباحاً "}
        </p>
        <label htmlFor="name">الأسم</label>
        <input type="text" required id="name" />
        <DatePicker days={days} dayOnChange={dayOnChange} />
        <label htmlFor="time">وقت الحجز</label>
        <TimePicker time={time} timeOnChange={timeOnChange} />
        <label htmlFor="msg">الرسالة</label>
        <textarea cols="30" type="text" required rows="5" id="msg" />
        <Button
          onClick={() => !selectedDay && !selectedTime && <DialogModal />}
        >
          <a href={url}>احجز</a>
        </Button>
      </StyledForm>
    </Container>
  );
};

class Contact extends Component {
  state = {
    selectedTime: undefined,
    selectedDay: undefined
  };
  /* 
  isTimeAndDateSelected = () => {
    if (!selectedTime && !selectedDay) {
    }
  }; */
  timeOnChange = value =>
    this.setState({ selectedTime: value.format("hh:mm") });
  dayOnChange = (day, modifiers = {}) => {
    if (modifiers.disabled) return;
    this.setState({ selectedDay: modifiers.selected ? undefined : day });
  };

  render() {
    const { selectedDay, selectedTime } = this.state;
    const { time, days } = this.props.data.markdownRemark.frontmatter;

    return (
      <Layout>
        <ContactCopmonent
          timeOnChange={this.timeOnChange}
          dayOnChange={this.dayOnChange}
          selectedDay={selectedDay && selectedDay.toLocaleDateString("en-US")}
          selectedTime={selectedTime}
          time={time}
          days={days}
        />
      </Layout>
    );
  }
}

export const ContactPageQuery = graphql`
  query ContactPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }) {
      frontmatter {
        time {
          endTime
          startTime
        }
        days {
          sun
          mon
          tue
          wed
          thu
          fri
          sat
        }
      }
    }
  }
`;

export default Contact;
