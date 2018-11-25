import React, { Component } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { DefaultCard } from "../components/Card";
import Flatpickr from "react-flatpickr";
require("flatpickr/dist/themes/dark.css");
const Container = styled(DefaultCard)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  flex: 1;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 10px;
  margin: 0 auto;
  input,
  textarea {
    width: 220px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid brown;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.18);
  }
  input[type="submit"] {
    width: 150px;
    margin: 10px auto;
  }
`;
const StyldInfo = styled.p`
  color: #026b67;
  font-size: 0.9rem;
  line-height: 1.2;
`;

export const ContactCopmonent = ({ FormRedirect, changeDate, date }) => (
  <Container center>
    {console.log(changeDate)}
    {FormRedirect ? (
      <p>سيتم التواصل معك في أقرب وقت بأذن الله , شكراً لك </p>
    ) : (
      <>
        <h1>حجز موعد</h1>
        <StyledForm onSubmit={() => this.setState({ FormRedirect: true })}>
          <label htmlFor="name">الأسم</label>
          <input type="text" required id="name" />
          <label htmlFor="time">وقت الحجز</label>

          <Flatpickr
            data-enable-time
            value={date}
            onChange={date => {
              /*    console.log("before  " + date);
              console.log(changeDate(date));
              console.log("after   " + date); */
            }}
            options={{
              minDate: "today",
              time_24hr: false,
              minTime: "17:00",
              maxTime: "20:00",
              disable: [
                function(date) {
                  // return true to disable
                  return date.getDay() === 5 || date.getDay() === 6;
                }
              ]
            }}
            required
          />

          <label htmlFor="msg">الرسالة</label>
          <textarea cols="30" type="text" required rows="5" id="msg" />
          <input type="submit" value="آرسال" />
        </StyledForm>
      </>
    )}
  </Container>
);

export class Contact extends Component {
  state = {
    FormRedirect: false,
    date: new Date()
  };

  changeDate = newDate => this.setState({ date: newDate });
  render() {
    const { FormRedirect, date } = this.state;
    return (
      <Layout>
        <ContactCopmonent
          FormRedirect={FormRedirect}
          changeDate={this.changeDate}
          date={date}
        />
      </Layout>
    );
  }
}

export default Contact;
