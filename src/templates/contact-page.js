import React, { Component } from "react";
import Layout from "./Layout";
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

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  button {
    margin: 10px auto;
    font-size: 1.2rem;
  }

  p {
    color: grey;
    font-size: 0.8rem;
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
  availableTime,
  days,
  selectedDay,
  isTimeAndDateSelected,
  handleTextFieldChanges,
  isModalOpen,
  ModalOnChange
}) => {
  return (
    <Container as="section" center>
      <Metatags title={"حجز موعد"} description={" احجز موعدك مع الدكتور نزار فقيه"} />

      <StyledForm>
        <h2>حجز موعد</h2>
        <TextField Forlabel={"الأسم"} ForHandleChange={handleTextFieldChanges} />

        <DatePicker days={days} dayOnChange={dayOnChange} selectedDay={selectedDay} />

        <TimePicker availableTime={availableTime} timeOnChange={timeOnChange} />
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
      const { phone } = this.props.data.markdownRemark.frontmatter;
      const CountryCode = "966";
              // `https://wa.me/${CountryCode}${phone}?text=` +
      const uri =
        `https://wa.me/${CountryCode}544710774?text=` +
        `
        *عيادة الدكتور نزار فقيه*
      _حــــجـــز مــــوعــــد_ 
      ~~~~~~~~~~~~~~~
      ${name} : الأسم  
      ${selectedDay.toLocaleDateString("en-US")} : تاريخ الحجز 
      ${selectedTime} : وقت الحجز 
      - الرسالة  
     ${msg}
     ~~~~~~~~~~~~~~~
    سيتم التواصل معك في أقرب وقت ممكن , شكراً لك  
     `;
      window.open(encodeURI(uri));
    }
  };

  handleTextFieldChanges = event => this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  ModalOnChange = () => this.setState({ isModalOpen: !this.state.isModalOpen });
  timeOnChange = value => this.setState({ selectedTime: value.format("h:m A") });
  dayOnChange = (day, modifiers = {}) => {
    if (modifiers.disabled) return;
    this.setState({ selectedDay: modifiers.selected ? undefined : day });
  };
  render() {
    const { isModalOpen, selectedDay } = this.state;
    const { availableTime, days } = this.props.data.markdownRemark.frontmatter;
    return (
      <Layout>
        <ContactCopmonent
          timeOnChange={this.timeOnChange}
          dayOnChange={this.dayOnChange}
          isTimeAndDateSelected={this.isTimeAndDateSelected}
          availableTime={availableTime}
          days={days}
          selectedDay={selectedDay && selectedDay.toLocaleDateString("en-US")}
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
        availableTime {
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
        phone
      }
    }
  }
`;

export default Contact;
