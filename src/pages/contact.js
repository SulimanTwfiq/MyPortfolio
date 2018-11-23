import React, { Component } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { DefaultCard } from "../components/Card";
import DatePicker from "../components/DatePicker";
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

export class contact extends Component {
  state = {
    FormRedirect: false,
    startDate: new Date()
  };
  render() {
    const { FormRedirect, startDate } = this.state;
    console.log(startDate);

    return (
      <Layout>
        <Container center>
          {FormRedirect ? (
            <p>بتواصل معك في أقرب وقت بأذن الله , شكراً لك </p>
          ) : (
            <>
              <h1>تواصل معي </h1>
              <StyldInfo>
                معلومات التواصل تجدها في أخر الصفحة
                <br /> أو قم بتعبئة هذا النموذج
              </StyldInfo>
              <DatePicker />
              <StyledForm onSubmit={() => this.setState({ FormRedirect: true })}>
                <label htmlFor="name">الأسم</label>
                <input type="text" required id="name" />

                <label htmlFor="time">وقت الحجز</label>
                <input type="text" required id="time" />

                <label htmlFor="msg">الرسالة</label>
                <textarea cols="30" type="text" required rows="5" id="msg" />
                <input type="submit" value="آرسال" />
              </StyledForm>
            </>
          )}
        </Container>
      </Layout>
    );
  }
}

export default contact;
