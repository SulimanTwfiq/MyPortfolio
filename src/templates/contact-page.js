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
  selectedDay,
  isTimeAndDateSelected,
  isModalOpen,
  msg,
  name,
  ModalOnChange,
  handleTextFieldChanges
}) => {
  console.log(selectedTime);
  const uri =
    "https://wa.me/966544710774?text=" +
    `
    *عيادة الدكتور نزار فقية*
  _حــــجـــز مــــوعــــد_ 
  ~~~~~~~~~~~~~~~
   - الأسم 
${name}
   - تاريخ الحجز 
  ${selectedDay}
  - وقت الحجز 
 ${selectedTime}
  - الرسالة  
 ${msg}
 ~~~~~~~~~~~~~~~
سيتم التواصل معك في أقرب وقت ممكن , شكراً لك  
 `;
  const encdodedURI = encodeURI(uri);
  return (
    <Container center>
      <StyledForm>
        <h1>حجز موعد</h1>
        <label>الأسم</label>
        <input type="text" name="name" required id="name" onChange={handleTextFieldChanges} />
        <DatePicker days={days} dayOnChange={dayOnChange} selectedDay={selectedDay} />

        <TimePicker time={time} timeOnChange={timeOnChange} />
        <label>الرسالة</label>
        <textarea cols="30" name="msg" type="text" required rows="5" id="msg" onChange={handleTextFieldChanges} />
        <Button onClick={() => isTimeAndDateSelected(encdodedURI)}>أحجز</Button>
        {isModalOpen && (
          <DialogModal isModalOpen={isModalOpen} onModalChange={ModalOnChange}>
            <p>املئ جميع الفراغات</p>
          </DialogModal>
        )}
      </StyledForm>
    </Container>
  );
};

class Contact extends Component {
  state = {
    selectedTime: undefined,
    selectedDay: undefined,
    name: null,
    msg: null,
    isModalOpen: false
  };

  handleTextFieldChanges = event => {
    console.log(event.currentTarget.value);
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };
  isTimeAndDateSelected = encdodedURI => {
    const { selectedDay, selectedTime } = this.state;
    if (!selectedTime || !selectedDay) {
      this.setState({ isModalOpen: true });
    } else {
      window.open(encdodedURI);
    }
  };

  ModalOnChange = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  timeOnChange = value => this.setState({ selectedTime: value.format("h:m A") });

  dayOnChange = (day, modifiers = {}) => {
    if (modifiers.disabled) return;
    this.setState({ selectedDay: modifiers.selected ? undefined : day });
  };

  render() {
    const { selectedDay, selectedTime, isModalOpen, name, msg } = this.state;
    const { time, days } = this.props.data.markdownRemark.frontmatter;
    return (
      <Layout>
        <ContactCopmonent
          timeOnChange={this.timeOnChange}
          dayOnChange={this.dayOnChange}
          isTimeAndDateSelected={this.isTimeAndDateSelected}
          selectedDay={selectedDay && selectedDay.toLocaleDateString("en-US")}
          selectedTime={selectedTime}
          time={time}
          days={days}
          isModalOpen={isModalOpen}
          ModalOnChange={this.ModalOnChange}
          name={name}
          msg={msg}
          handleTextFieldChanges={this.handleTextFieldChanges}
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
