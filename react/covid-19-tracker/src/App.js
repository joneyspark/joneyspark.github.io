import React, { useState, useEffect } from 'react';
import './App.css';
import {MenuItem, FormControl, Select, Card, CardContent} from '@material-ui/core';
import InfoBox from './component/InfoBox';
import Map from './component/Map';
import Table from './component/Table/Table';
import {sortData}  from './component/Util';
import LineGraph from './component/LineGraph';

function App() {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = "https://disease.sh/v3/covid-19/countries"; // site that doesn’t send Access-Control-*
  const allCountriesURL = "https://disease.sh/v3/covid-19/all";
  const [countires, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch(proxyurl + allCountriesURL)
    .then(res => res.json())
    .then(data => {
      setCountryInfo(data);
    })
  },[]);

  useEffect(()=>{
    const getCountriesData = async () => {
      await fetch(proxyurl + url)
      .then(res => res.json())
      .then(data => {
        const countires = data.map((country) => (
          {
            name: country.country,
            value: country.countryInfo.iso2
          }
        ));
          const sortedData = sortData(data);
          setTableData(sortedData);
          setCountries(countires);
      });

    };
    getCountriesData();
  }, []);

  const onCountryChange = async (e) =>{
    const countryCode = e.target.value;
    
    //const allCountriesURL = "https://disease.sh/v3/covid-19/all";
    const singleCountryURL = `https://disease.sh/v3/covid-19/countries/${countryCode}`
    
    const countryURL = countryCode === 'worldwide' ? allCountriesURL : singleCountryURL
    
    await fetch(proxyurl + countryURL)
    .then(res => res.json())
    .then(data => {

      setCountry(countryCode);
      setCountryInfo(data)
    });

  };

  console.log("COUNTRY INFO >>>> ", countryInfo);

  return (
    <div className="App">
    
      <div className="app__left">
        <div className="app__header">
          <h1>Covid 19 Tracker</h1>
            <FormControl className="app__dropown">
              <Select variant="outlined" onChange={onCountryChange} value={country}>
              <MenuItem value="worldwide">WorldWide</MenuItem>
                {
                  countires.map((country) => (
                    <MenuItem value={country.value}>{country.name}</MenuItem>
                  ))
                }
              </Select>
            </FormControl>
        </div>

        <div className="app__states">
          <InfoBox title="Corovirus Cases" total={countryInfo.cases} cases={countryInfo.todayCases}></InfoBox>
          <InfoBox title="Recoverd" total={countryInfo.recovered} cases={countryInfo.todayRecovered}></InfoBox>
          <InfoBox title="Death" total={countryInfo.deaths} cases={countryInfo.todayDeaths}></InfoBox>
        </div>

        <Map></Map>
      </div>
      <Card className="app__right">
        <CardContent>
          <h2>Live Casese by country</h2>
          <Table countries={tableData}></Table>
          <h1>I'm right Table</h1>
          <LineGraph></LineGraph>
        </CardContent>
      </Card>

    </div>
  );
}

export default App;
