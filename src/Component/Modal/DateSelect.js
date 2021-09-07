import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const DateSelect = () => {
  const [startDate, setStartDate] = useState();
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showYearPicker
      dateFormat="yyyy"
      yearItemNumber={9}
      placeholderText="Click to select a date"
      isClearable
    />
  );
};
export default DateSelect;
