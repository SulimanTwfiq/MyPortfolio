import React, { Component } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { DefaultCard } from "../components/Card";
import TimePicker from "../components/TimePicker";
import DatePicker from "../components/DatePicker";
import { graphql } from "gatsby";
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
  input,
  textarea {
    margin: 10px auto;
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
  FormRedirect,
  changeDate,
  date,
  time,
  days
}) => (
  <Container center>
    {FormRedirect ? (
      <p>سيتم التواصل معك في أقرب وقت بأذن الله , شكراً لك </p>
    ) : (
      <StyledForm onSubmit={() => this.setState({ FormRedirect: true })}>
        <h1>حجز موعد</h1>
        <label htmlFor="name">الأسم</label>
        <input type="text" required id="name" />
        <label htmlFor="time">وقت الحجز</label>
        <DatePicker days={days} />
        <TimePicker />
        <label htmlFor="msg">الرسالة</label>
        <textarea cols="30" type="text" required rows="5" id="msg" />
        <input type="submit" value="آرسال" />
      </StyledForm>
    )}
  </Container>
);

class Contact extends Component {
  state = {
    FormRedirect: false,
    date: new Date()
  };

  changeDate = newDate => this.setState({ date: newDate });
  render() {
    const { FormRedirect, date } = this.state;
    const { time, days } = this.props.data.markdownRemark.frontmatter;
    return (
      <Layout>
        <ContactCopmonent
          FormRedirect={FormRedirect}
          changeDate={this.changeDate}
          date={date}
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
