import React, { useState, useEffect } from 'react';

import { Line } from 'react-chartjs-2';

import numeral from 'numeral';

const options = {
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    maintainAspectRatio: false,
    tooltips: {
      mode: "index",
      intersect: false,
      callbacks: {
        label: function (tooltipItem, data) {
          return numeral(tooltipItem.value).format("+0,0");
        },
      },
    },
    scales: {
      xAxes: [
        {
          type: "time",
          time: {
            format: "MM/DD/YY",
            tooltipFormat: "ll",
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            // Include a dollar sign in the ticks
            callback: function (value, index, values) {
              return numeral(value).format("0a");
            },
          },
        },
      ],
    },
  };


const buildChart = (data, casesType) => {
    let chartData = [];
    let lastDataPoint;
    for (let date in data.cases){
        if(lastDataPoint){
            let newDataPoint = {
                x: date,
                y: data[casesType][date] - lastDataPoint,
            };
            chartData.push(newDataPoint);
        }
        lastDataPoint = data[casesType][date];
        console.log("Date >>>", date);
    }
    return chartData;
};

const LineGraph = ({ casesType }) => {
    const [data, setData] = useState([]);

    const proxyURL = "https://cors-anywhere.herokuapp.com/";
    const historyURL = 'https://disease.sh/v3/covid-19/historical/all?lastdays=30';

    useEffect(()=>{
        fetch(proxyURL + historyURL)
        .then(res => res.json())
        .then(data => {
            const chartData = buildChart(data, 'cases');
            setData(chartData);
            console.log("Line Graph Data >>>",data);
        })
    },[casesType]);

    return (
        <div>
            I'm a Graph
        {data?.length > 0 && (
          <Line
            data={{
              datasets: [
                {
                  backgroundColor: "rgba(204, 16, 52, 0.5)",
                  borderColor: "#CC1034",
                  data: data,
                },
              ],
            }}
            options={options}
          />
        )}
      </div>
    );
};

export default LineGraph;