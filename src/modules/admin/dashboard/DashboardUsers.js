import React from 'react';

import {
  VictoryChart,
  VictoryStack,
  VictoryArea,
  VictoryLegend,
} from "victory";

export function DashboardUsers(props) {
  return (
    <div className="dashboard-users">
      <h2 className="title">Users</h2>
      <div className="dashboard-users-wrapper">
        <div className="chart">
          <VictoryChart
            width={300}
            height={300}
          >
            <VictoryStack
              colorScale={[
                "#CC3333",
                "#66FF33",
                "#FFCC00",
              ]}
            >
              {props.users.map((user, index) => (
                <VictoryArea
                  data={user}
                  key={index}
                />
              ))}
            </VictoryStack>
          </VictoryChart>
        </div>
        <div className="legend">
          <VictoryLegend
            orientation="vertical"
            data={[
              {name: "Operator", symbol: { fill: "#FFCC00" }},
              {name: "Manager", symbol: { fill: "#66FF33" }},
              {name: "Admin", symbol: { fill: "#CC3333" }},
            ]}
            width={100}
            height={300}
            y={50}
            style={{title: {fontSize: 20}}}
          />
        </div>
      </div>
    </div>
  );
}
