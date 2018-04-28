//@flow

import React from "react";

type PickerProps = {
  options: Object,
  onChange: (e: HTMLSelectElement) => void
};

export const Picker = ({ options, onChange }: PickerProps) => {
  return (
    <span>
      <select onChange={e => onChange(e)}>
        <option defaultValue=" ">Pick Year</option>
        {options.map(year => (
          <option value={year} key={year}>
            {year}
          </option>
        ))}
      </select>
    </span>
  );
};
