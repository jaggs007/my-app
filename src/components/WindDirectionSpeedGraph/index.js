import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const WindDirectionSpeedGraph = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);

    const rawDataUrl =
      "https://echarts.apache.org/examples/data/asset/data/wind-barb-hobart.json";

    fetch(rawDataUrl)
      .then((response) => response.json())
      .then((rawData) => {
        console.log({ rawData });
        const data = rawData.data.map((entry) => [
          entry.time,
          entry.windSpeed,
          entry.R,
          entry.waveHeight,
        ]);

        const dims = {
          time: 0,
          windSpeed: 1,
          R: 2,
          waveHeight: 3,
        };

        const renderArrow = (param, api) => {
          const point = api.coord([
            api.value(dims.time),
            api.value(dims.windSpeed),
          ]);

          const arrowLength = api.value(dims.windSpeed);
          const angle = (api.value(dims.R) / 180) * Math.PI;

          return {
            type: "line",
            shape: {
              x1: point[0],
              y1: point[1],
              x2: point[0] + arrowLength * Math.cos(angle),
              y2: point[1] + arrowLength * Math.sin(angle),
            },
            style: {
              stroke: "#555",
              lineWidth: 1,
            },
          };
        };

        const option = {
          title: {
            text: "Wind Direction and Speed",
            left: "center",
          },
          xAxis: {
            type: "time",
          },
          yAxis: {
            type: "value",
            name: "Wind Speed (m/s)",
          },
          series: [
            {
              type: "custom",
              renderItem: renderArrow,
              encode: {
                x: dims.time,
                y: dims.windSpeed,
              },
              data: data,
            },
          ],
        };

        myChart.setOption(option);
      });

    return () => {
      // Clean up when unmounting
      myChart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "500px" }} />;
};

export default WindDirectionSpeedGraph;
