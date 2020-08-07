import React from 'react';

import {
  VictoryPie,
  VictoryTooltip,
} from "victory";

const callColors = {
  "incoming": "#66FF33",
  "outgoing": "#99CCCC",
  "missing": "#CC3333",
}

const callActiveColors = {
  "incoming": "#66FF00",
  "outgoing": "#33CCCC",
  "missing": "#CC0033",
}

export function DashboardCalls(props) {
  return (
    <div className="dashboard-calls">
      <h2 className="title">Calls</h2>
      <VictoryPie
        labelComponent={<DashboardCallsLabel/>}
        data={props.calls}
        height={300}
        width={300}
        padding={0}
        style={{
          data: {
            fill: ({datum}) => callColors[datum.x],
          }
        }}
        events={[{
          target: "data",
          eventHandlers: {
            onMouseOver: () => {
              return [
                {
                  target: "data",
                  mutation: ({datum}) => ({style: {fill: callActiveColors[datum.x]}})
                }, {
                  target: "labels",
                  mutation: () => ({active: true})
                }
              ];
            },
            onMouseOut: () => {
              return [
                {
                  target: "data",
                  mutation: ({datum}) => ({style: {fill: callColors[datum.x]}})
                }, {
                  target: "labels",
                  mutation: () => ({active: false})
                }
              ];
            }
          }
        }]}
      />
    </div>
  );
}


class DashboardCallsLabel extends React.Component {
  render() {
    return (
      <g>
        <VictoryTooltip
          {...this.props}
          orientation="top"
          pointerLength={0}
          cornerRadius={75}
          flyoutWidth={150}
          flyoutHeight={150}
          x={150}
          y={225}
          style={{fontSize: '25px', fill: "#00415a"}}
          flyoutStyle={{
            fill: "#f0f2f5",
            stroke: "#f0f2f5"
          }}
          text={({datum}) => [datum.y, datum.x]}
        />
      </g>
    );
  }
}

DashboardCallsLabel.defaultEvents = VictoryTooltip.defaultEvents;