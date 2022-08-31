import styled from "styled-components";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
const yyyy = today.getFullYear();

if (dd < 10) {
  dd = "0" + dd;
}
if (mm < 10) {
  mm = "0" + mm;
}

today = `${yyyy}-${mm}-${dd}`;

const formatDate = (date) => {
  let month = (date.getMonth() + 1).toString();
  let day = date.getDate().toString();
  const year = date.getFullYear();
  if (month.length < 2) {
    month = "0" + month;
  }
  if (day.length < 2) {
    day = "0" + day;
  }
  return [year, month, day].join("-");
};

const addOneAnotherDay = (date, numberOfDays) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numberOfDays);
  return newDate;
};

function parseDate(str) {
  let mdy = str.split("-");
  mdy = [mdy[1], mdy[2], mdy[0]];
  return new Date(mdy[2], mdy[0] - 1, mdy[1]);
}

function datediff(first, second) {
  return Math.round((second - first) / (1000 * 60 * 60 * 24));
}

const DatePickerComps = (props) => {
  const [dateIn, setDateIn] = useState(addOneAnotherDay(today, 1));
  const [dateOut, setDateOut] = useState(addOneAnotherDay(dateIn, 1));

  useEffect(() => {
    if (dateIn >= dateOut) {
      setDateOut(addOneAnotherDay(dateIn, 1));
    }

    if (dateIn.toString().length > 3 && dateOut.toString().length > 3) {
      props.onSaveDaysNumber({
        enterDate: formatDate(dateIn),
        outDate: formatDate(dateOut),
        numberOfDays: datediff(
          parseDate(formatDate(dateIn)),
          parseDate(formatDate(dateOut))
        ),
      });
    } else {
      props.onSaveDaysNumber({});
    }
  }, [dateIn, dateOut]);

  return (
    <Layout>
      <div className="date-layout">
        <label htmlFor="arrive">Arrivée</label>
        <DatePicker
          dateFormat="dd/MM/yyyy"
          selected={dateIn}
          minDate={addOneAnotherDay(today, 1)}
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
