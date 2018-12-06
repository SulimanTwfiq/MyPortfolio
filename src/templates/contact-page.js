import React, { Component } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { DefaultCard } from "../components/Card";
import TimePicker from "../components/TimePicker";
import DatePicker from "../components/DatePicker";
import Metatags from "../components/Metatags";
import Button from "../components/Button";
import DialogModal from "../components/DialogModal";
import { graphql } from "gatsby";
import TextField from "../components/TextField";

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
  dayOnChange,
  time,
  days,
  selectedDay,
  isTimeAndDateSelected,
  handleTextFieldChanges,
  isModalOpen,
  ModalOnChange
}) => {
  return (
    <Container center>
      <Metatags
        title={"حجز موعد"}
        description={" احجز موعدك مع الدكتور نزار فقية"}
      />

      <StyledForm>
        <h1>حجز موعد</h1>
        <TextField
          Forlabel={"الأسم"}
          ForHandleChange={handleTextFieldChanges}
        />

        <DatePicker
          days={days}
          dayOnChange={dayOnChange}
          selectedDay={selectedDay}
        />

        <TimePicker time={time} timeOnChange={timeOnChange} />
        <label>الرسالة</label>
        <textarea
          cols="30"
          name="msg"
          type="text"
          required
          rows="5"
          placeholder="اكتب معلومات عن الموعد او اي ملاحظة"
          onChange={handleTextFieldChanges}
        />
        <Button onClick={isTimeAndDateSelected}>أحجز</Button>
        {isModalOpen && (
          <DialogModal isModalOpen={isModalOpen} onModalChange={ModalOnChange}>
            <h2>خطأ</h2>
            <p>الرجاء قم بملئ جميع المعلومات</p>
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

  isTimeAndDateSelected = () => {
    const { selectedDay, selectedTime, msg, name } = this.state;
    if (!selectedTime || !selectedDay || !msg || !name) {
      this.setState({ isModalOpen: true });
    } else {
      const uri =
        "https://wa.me/966544710774?text=" +
        `
        *عيادة الدكتور نزار فقية*
      _حــــجـــز مــــوعــــد_ 
      ~~~~~~~~~~~~~~~
      ${name} : الأسم  
      ${selectedDay} : تاريخ الحجز 
      ${selectedTime} : وقت الحجز 
      - الرسالة  
     ${msg}
     ~~~~~~~~~~~~~~~
    سيتم التواصل معك في أقرب وقت ممكن , شكراً لك  
     `;
      const encdodedURI = encodeURI(uri);
      window.open(encdodedURI);
    }
  };

  handleTextFieldChanges = event =>
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });

  ModalOnChange = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  timeOnChange = value =>
    this.setState({ selectedTime: value.format("h:m A") });

  dayOnChange = (day, modifiers = {}) => {
    if (modifiers.disabled) return;
    this.setState({ selectedDay: modifiers.selected ? undefined : day });
  };

  render() {
    const { selectedDay, selectedTime, isModalOpen } = this.state;
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
