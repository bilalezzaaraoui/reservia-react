import { Fragment } from "react";
import { FaMoneyBillWave, FaChild, FaHeart, FaDog } from "react-icons/fa";
import styled from "styled-components";

const FilterList = ({ filter }) => {
  const stackImage = [
    { text: "money", image: <FaMoneyBillWave /> },
    { text: "family", image: <FaChild /> },
    { text: "love", image: <FaHeart /> },
    { text: "dog", image: <FaDog /> },
  ];

  return (
    <Fragment>
      {filter.map((element, index) => {
        const res = stackImage.find((item) => {
          if (item.text === element) {
            return item;
          }
        });

        if (res !== undefined) {
          return <div key={index}>{res.image}</div>;
        }
      })}
    </Fragment>
  );
};

export default FilterList;
