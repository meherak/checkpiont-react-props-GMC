import React, { useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import "./Modal.css";

const options = [
  { label: "Action", value: "Action" },
  { label: "Comedy", value: "Comedy" },
  { label: "Drama", value: "Drama" },
  { label: "Fantasy", value: "Fantasy" },
  { label: "Horror", value: "Horror" },
  { label: "Mystery", value: "Mystery" },
  { label: "Romance", value: "Romance" },
  { label: "Thriller", value: "Thriller" },
  { label: "Sci-Fi", value: "Sci-Fi" },
  { label: "Western", value: "Western", enabled: true },
];

const SelectMovieType = ({ getMovieType }) => {
  const [selected, setSelected] = useState([]);
  useEffect(() => {
    getMovieType(selected);
  });
  return (
    <div className="input-container ic2">
      <MultiSelect
        className="input"
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
    </div>
  );
};

export default SelectMovieType;
