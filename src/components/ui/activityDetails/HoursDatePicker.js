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

const HoursDatePicker = (props) => {
  return (
    <Layout>
      <div>
        <label htmlFor="arrive">Arrivée</label>
        <input type="date" name="arrive" min={today} required />
      </div>
      <div>
        <label htmlFor="depart">Départ</label>
        <input
          type="time"
          name="depart"
          min="09:00:00"
          max="18:00:00"
          required
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

export default HoursDatePicker;
