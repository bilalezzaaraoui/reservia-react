import styled from "styled-components";
import { useEffect, useState } from "react";

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
const todaySplit = today.split("-");
const dayFuture = +todaySplit[2] + 1 + "";
const nextDay = [todaySplit[0], todaySplit[1], dayFuture].join("-");

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

  useEffect(() => {
    if (dateIn.length > 1 && dateOut.length > 1) {
      props.onSaveDaysNumber(datediff(parseDate(dateIn), parseDate(dateOut)));
    }
  }, [dateIn, dateOut]);

  return (
    <Layout>
      <div>
        <label htmlFor="arrive">Arrivée</label>
        <input
          type="date"
          name="arrive"
          min={today}
          required
          value={dateIn}
          onChange={(e) => {
            setDateIn(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="depart">Départ</label>
        <input
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
        />
      </div>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;

  div {
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
      border: none;
    }
  }
`;

export default DatePickerComps;
