import React, { useState, useEffect } from 'react';

const LineGraph = () => {
    const [data, setData] = useState([]);
    const proxyURL = "https://cors-anywhere.herokuapp.com/";
    const historyURL = 'https://disease.sh/v3/covid-19/historical/all?lastdays=30';

    useEffect(()=>{
        fetch(proxyURL + historyURL)
        .then(res => res.json())
        .then(data => {
            const chartData = [];
            let lastDataPoint;

            data.cases.forEach(date => {
                if(lastDataPoint){
                    const newDataPoint = {
                        x: date,
                        y: date['cases']
                    }
                }
            })
            console.log(data);
        })
    },[]);
    return (
        <div>
            I'm line graph
        </div>
    );
};

export default LineGraph;