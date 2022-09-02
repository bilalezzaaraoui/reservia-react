import styled from "styled-components";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const addOneAnotherDay = require("../../../../../utils/function/addOneAnotherDay");
const formatDate = require("../../../../../utils/function/formatDate");
const parseDate = require("../../../../../utils/function/parseDate");
const todayDate = require("../../../../../utils/function/todayDate");
const dateDiff = require("../../../../../utils/function/dateDiff");

const DatePickerComps = (props) => {
  const [dateIn, setDateIn] = useState(addOneAnotherDay(todayDate(), 1));
  const [dateOut, setDateOut] = useState(addOneAnotherDay(dateIn, 1));

  useEffect(() => {
    if (dateIn >= dateOut) {
      setDateOut(addOneAnotherDay(dateIn, 1));
    }

    if (dateIn.toString().length > 3 && dateOut.toString().length > 3) {
      props.onSaveDaysNumber({
        enterDate: formatDate(dateIn),
        outDate: formatDate(dateOut),
        numberOfDays: dateDiff(
          parseDate(formatDate(dateIn)),
          parseDate(formatDate(dateOut))
        ),
      });
    } else {
      props.onSaveDaysNumber({});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateIn, dateOut]);

  return (
    <Layout>
      <div className="date-layout">
        <label htmlFor="arrive">Arrivée</label>
        <DatePicker
          dateFormat="dd/MM/yyyy"
          selected={dateIn}
          minDate={addOneAnotherDay(todayDate(), 1)}
          onChange={(date) => {
            const newDate = formatDate(date);
            setDateIn(new Date(newDate));

            if (dateIn >= dateOut) {
              setDateOut(addOneAnotherDay(newDate, 1));
            }
          }}
        />
      </div>
      <div className="date-layout">
        <label htmlFor="depart">Départ</label>
        <DatePicker
          dateFormat="dd/MM/yyyy"
          selected={dateIn >= dateOut ? addOneAnotherDay(dateIn, 1) : dateOut}
          minDate={addOneAnotherDay(dateIn, 1)}
          onChange={(date) => {
            const newDate = formatDate(date);
            setDateOut(new Date(newDate));
          }}
        />
      </div>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;

  .date-layout {
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 5px 10px;
    border-bottom: 1px solid #c9c9c9;

    &:nth-child(1) {
      border-right: 1px solid #c9c9c9;
    }

    label {
      font-size: 0.8rem;
      font-weight: bold;
    }

    input {
      width: 100%;
      border: none;
    }
  }

  .react-datepicker__day--disabled {
    background-color: transparent;
    font-weight: normal;
  }
`;

export default DatePickerComps;
