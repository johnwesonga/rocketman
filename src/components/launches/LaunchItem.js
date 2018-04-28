import React from "react";

export const LaunchItem = launch => {
  const { flight_number, details, launch_year } = launch.launch;
  return (
    <li key={flight_number}>
      {launch_year} - {details}
    </li>
  );
};
