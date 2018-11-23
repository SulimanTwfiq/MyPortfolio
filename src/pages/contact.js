import React, { Component } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { DefaultCard } from "../components/Card";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import setMinutes from "date-fns/set_minutes";
import setHours from "date-fns/set_hours";
import getDay from "date-fns/get_day";
const Container = styled(DefaultCard)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  flex: 1;
  .react-datepicker{
    transform: scale(0.9);
    left: -65px;
    top: -37px;
}
  }
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
  AvailableDays = date => {
    const day = getDay(date);
    return day !== 1 && day !== 3 && day !== 5;
  };

  render() {
    const { FormRedirect, startDate } = this.state;
    console.log(startDate);

    return (
      <Layout>
        <Container center>
          {FormRedirect ? (
            <p>سيتم التواصل معك في أقرب وقت بأذن الله , شكراً لك </p>
          ) : (
            <>
              <h1>حجز موعد</h1>

              <StyledForm
                onSubmit={() => this.setState({ FormRedirect: true })}
              >
                <DatePicker
                  selected={startDate}
                  onChange={date => this.setState({ startDate: date })}
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
                />
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
