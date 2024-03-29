import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { windSpeedRawData } from "../../staticData";

const WindDirectionSpeedGraph = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);

    const directionMap = {};
    [
      "W",
      "WSW",
      "SW",
      "SSW",
      "S",
      "SSE",
      "SE",
      "ESE",
      "E",
      "ENE",
      "NE",
      "NNE",
      "N",
      "NNW",
      "NW",
      "WNW",
    ].forEach((name, index) => {
      directionMap[name] = (Math.PI / 8) * index;
    });
    const data = windSpeedRawData.map((entry) => [
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
      weatherIcon: 2,
      minTemp: 3,
      maxTemp: 4,
    };
    const arrowSize = 18;

    const renderArrow = (param, api) => {
      const point = api.coord([
        api.value(dims.time),
        api.value(dims.windSpeed),
      ]);
      return {
        type: "path",
        shape: {
          pathData: "M31 16l-15-15v9h-26v12h26v9z",
          x: -arrowSize / 2,
          y: -arrowSize / 2,
          width: arrowSize,
          height: arrowSize,
        },
        rotation: directionMap[api.value(dims.R)],
        position: point,
        style: api.style({
          stroke: "#555",
          lineWidth: 1,
        }),
      };
    };

    const option = {
      title: {
        text: "Wind Speed Data",
        left: "center",
      },
      tooltip: {
        trigger: "axis",
        formatter: (params) => {
          return [
            echarts.format.formatTime(
              "yyyy-MM-dd",
              params[0].value[dims.time]
            ) +
              " " +
              echarts.format.formatTime("hh:mm", params[0].value[dims.time]),
            "Wind speed: " + params[0].value[dims.windSpeed],
            "Wind Direction" + params[0].value[dims.R],
          ].join("<br>");
        },
      },
      grid: {
        top: 160,
        bottom: 125,
      },
      xAxis: {
        type: "time",
        maxInterval: 3600 * 1000 * 24,
        splitLine: {
          lineStyle: {
            color: "#ddd",
          },
        },
      },
      yAxis: [
        {
          name: "Wind Speed (knot)",
          nameLocation: "middle",
          nameGap: 35,
          axisLine: {
            lineStyle: {
              color: "#666",
            },
          },
          splitLine: {
            lineStyle: {
              color: "#ddd",
            },
          },
        },

        {
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: { show: false },
          splitLine: { show: false },
        },
      ],
      visualMap: {
        type: "piecewise",
        orient: "horizontal",
        left: "center",
        bottom: 10,
        pieces: [
          {
            gte: 17,
            color: "#18BF12",
            label: "Strong WInd（>=17 knots）",
          },
          {
            gte: 11,
            lt: 17,
            color: "#f4e9a3",
            label: "Stroke (verses 11 ~ 17)",
          },
          {
            lt: 11,
            color: "#D33C3E",
            label: "Breeze (less than 11 knots)",
          },
        ],
        seriesIndex: 1,
        dimension: 1,
      },
      dataZoom: [
        {
          type: "inside",
          xAxisIndex: 0,
          minSpan: 5,
        },
        {
          type: "slider",
          xAxisIndex: 0,
          minSpan: 5,
          bottom: 50,
        },
      ],
      series: [
        {
          type: "line",
          yAxisIndex: 1,
          showSymbol: false,
          emphasis: {
            scale: false,
          },
          symbolSize: 10,
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              global: false,
              colorStops: [
                {
                  offset: 0,
                  color: "rgba(88,160,253,1)",
                },
                {
                  offset: 0.5,
                  color: "rgba(88,160,253,0.7)",
                },
                {
                  offset: 1,
                  color: "rgba(88,160,253,0)",
                },
              ],
            },
          },
          lineStyle: {
            color: "rgba(88,160,253,1)",
          },
          itemStyle: {
            color: "rgba(88,160,253,1)",
          },
          encode: {
            x: dims.time,
            y: dims.waveHeight,
          },
          data: data,
          z: 2,
        },
        {
          type: "custom",
          renderItem: renderArrow,
          encode: {
            x: dims.time,
            y: dims.windSpeed,
          },
          data: data,
          z: 10,
        },
        {
          type: "line",
          symbol: "none",
          encode: {
            x: dims.time,
            y: dims.windSpeed,
          },
          lineStyle: {
            color: "#aaa",
            type: "dotted",
          },
          data: data,
          z: 1,
        },
        // {
        //   type: "custom",
        //   renderItem: renderWeather,
        //   data: weatherData,
        //   tooltip: {
        //     trigger: "item",
        //     formatter: function (param) {
        //       return (
        //         param.value[dims.time] +
        //         ": " +
        //         param.value[dims.minTemp] +
        //         " - " +
        //         param.value[dims.maxTemp] +
        //         "°"
        //       );
        //     },
        //   },
        //   yAxisIndex: 2,
        //   z: 11,
        // },
      ],
    };
    myChart.setOption(option);

    return () => {
      // Clean up when unmounting
      myChart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "500px" }} />;
};

export default WindDirectionSpeedGraph;

function getWindDirection(degrees: number): string {
  if (degrees <= 11.25 || degrees > 348.75) {
    return "N";
  } else if (degrees > 11.25 && degrees <= 33.75) {
    return "NNE";
  } else if (degrees > 33.75 && degrees <= 56.25) {
    return "NE";
  } else if (degrees > 56.25 && degrees <= 78.75) {
    return "ENE";
  } else if (degrees > 78.75 && degrees <= 101.25) {
    return "E";
  } else if (degrees > 101.25 && degrees <= 123.75) {
    return "ESE";
  } else if (degrees > 123.75 && degrees <= 146.25) {
    return "SE";
  } else if (degrees > 146.25 && degrees <= 168.75) {
    return "SSE";
  } else if (degrees > 168.75 && degrees <= 191.25) {
    return "S";
  } else if (degrees > 191.25 && degrees <= 213.75) {
    return "SSW";
  } else if (degrees > 213.75 && degrees <= 236.25) {
    return "SW";
  } else if (degrees > 236.25 && degrees <= 258.75) {
    return "WSW";
  } else if (degrees > 258.75 && degrees <= 281.25) {
    return "W";
  } else if (degrees > 281.25 && degrees <= 303.75) {
    return "WNW";
  } else if (degrees > 303.75 && degrees <= 326.25) {
    return "NW";
  } else if (degrees > 326.25 && degrees <= 348.75) {
    return "NNW";
  } else {
    return "";
  }
}
