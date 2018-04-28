// @flow
import React from "react";
import { LaunchItem } from "./LaunchItem";

type Launch = {
  flight_number: number,
  launch_year: string,
  details: string
};

type Props = {
  launches: Array<Launch>
};

export const LaunchList = (props: Props) => {
  const { launches } = props;
  return (
    <div>
      <h1>{launches.length} Flights</h1>
      <ul>
        {launches
          .filter(launch => launch.details !== null)
          .map((launch, idx) => <LaunchItem launch={launch} key={idx} />)}
      </ul>
    </div>
  );
};
