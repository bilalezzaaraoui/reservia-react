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

const HoursDatePicker = (props) => {
  const addOneDay = new Date();
  addOneDay.setDate(addOneDay.getDate() + 1);
  const [date, setDate] = useState(addOneDay);
  const [time, setTime] = useState("");

  useEffect(() => {
    if (formatDate(date).toString().length >= 3 && time.length >= 3) {
      props.onSaveDate({
        infoDate: formatDate(date),
        infoTime: time,
      });
    }
  }, [date, time]);

  return (
    <Layout>
      <div className="date-layout">
        <label htmlFor="arrive">Arrivée</label>
        <DatePicker
          dateFormat="dd/MM/yyyy"
          selected={date}
          minDate={addOneDay}
          onChange={(date) => {
            const newDate = formatDate(date);
            setDate(new Date(newDate));
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
