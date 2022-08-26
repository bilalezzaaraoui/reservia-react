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
  return nextDay;
};

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

const HoursDatePicker = (props) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  console.log(date);
  console.log(time);

  useEffect(() => {
    if (date.length >= 3 && time.length >= 3) {
      props.onSaveDate({
        infoDate: date,
        infoTime: time,
      });
    }
  }, [date, time]);

  useEffect(() => {
    setDate(addOneDay(today));
  }, []);

  return (
    <Layout>
      <div className="date-layout">
        <label htmlFor="arrive">Arrivée</label>
        <DatePicker
          dateFormat="dd/MM/yyyy"
          selected={
            typeof date === "string" && date.length >= 1
              ? new Date(date)
              : new Date(addOneDay(today))
          }
          minDate={new Date(addOneDay(today))}
          onChange={(date) => {
            const newDate = formatDate(date);
            setDate(newDate);
          }}
        />
      </div>
      <div className="date-layout">
        <label htmlFor="depart">Départ</label>
        <input
          type="time"
          name="depart"
          min="09:00:00"
          max="18:00:00"
          onChange={(e) => setTime(e.target.value)}
          required
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

export default HoursDatePicker;
