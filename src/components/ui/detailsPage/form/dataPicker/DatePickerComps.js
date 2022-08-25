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

const addOneDay = (date) => {
  const todaySplit = date.split("-");
  const dayFuture = +todaySplit[2] + 1 + "";
  const nextDay = [todaySplit[0], todaySplit[1], dayFuture].join("-");
  // console.log(nextDay);
  return nextDay;
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
  const [dateIn, setDateIn] = useState("");
  const [dateOut, setDateOut] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  // console.log(dateIn);
  console.log(dateOut);

  useEffect(() => {
    if (dateIn.length > 1 && dateOut.length > 1) {
      props.onSaveDaysNumber({
        enterDate: dateIn,
        outDate: dateOut,
        numberOfDays: datediff(parseDate(dateIn), parseDate(dateOut)),
      });
    } else {
      props.onSaveDaysNumber({});
    }
  }, [dateIn, dateOut]);

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

  return (
    <Layout>
      <div className="date-layout">
        <label htmlFor="arrive">Arrivée</label>
        {/* <input
          type="date"
          name="arrive"
          min={today}
          required
          value={dateIn}
          onChange={(e) => {
            setDateIn(e.target.value);
            setDateOut("");
          }}
        /> */}
        <DatePicker
          dateFormat="dd/MM/yyyy"
          selected={
            typeof dateIn === "string" && dateIn.length >= 1
              ? new Date(dateIn)
              : new Date(addOneDay(today))
          }
          minDate={new Date(addOneDay(today))}
          onChange={(date) => {
            const newDate = formatDate(date);
            setDateIn(newDate);
            setDateOut(addOneDay(newDate));
          }}
        />
      </div>
      <div className="date-layout">
        <label htmlFor="depart">Départ</label>
        {/* <input
          type="date"
          name="depart"
          min={dateIn.length > 1 ? addOneDay(dateIn) : today}
          required
          value={dateOut}
          onChange={(e) => {
            if (dateIn.length >= 1) {
              setDateOut(e.target.value);
            } else {
              setDateOut("");
              alert("Veuillez d'abord choisir une date d'arrivée.");
            }
          }}
        /> */}
        <DatePicker
          dateFormat="dd/MM/yyyy"
          selected={
            typeof dateOut === "string" && dateOut.length >= 1
              ? new Date(dateOut)
              : new Date(addOneDay(addOneDay(today)))
          }
          minDate={
            typeof dateIn === "string" && dateIn.length >= 1
              ? new Date(addOneDay(dateIn))
              : new Date(addOneDay(addOneDay(today)))
          }
          onChange={(date) => {
            const newDate = formatDate(date);
            setDateOut(newDate);
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
