import React from 'react';

import {
  VictoryBar,
  VictoryChart,
} from "victory";

const goodsColors = {
  "tv": "#FFCC00",
  "laptop": "#66FF33",
  "microwave": "#CC3333",
  "fridge": "#99CCCC",
}

export function DashboardGoods(props) {
  return (
    <div className="dashboard-goods">
      <h2 className="title">Goods</h2>
      <VictoryChart
        domainPadding={15}
      >
        <VictoryBar
          data={props.goods}
          style={{
            data: {
              fill: ({datum}) => goodsColors[datum.x],
            }
          }}
        />
      </VictoryChart>
    </div>
  );
}
