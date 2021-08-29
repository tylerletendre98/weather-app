import { Component } from "react";
import "./App.css";
import axios from "axios";
import Title from "./components/title/title";
import APIKEY from "./key";
import data from "./data";
import forecastWeatherData from "./forecastWeatherData";
import CurrentWeather from "./components/currentWeather/currentWeather";
import Searchbar from "./components/searchBar/searchBar";
import ForecastWeather from "./components/forcastWeather/forecastWeather";
import HourlyForecast from "./components/hourlyForecast/hourlyForecast";

class App extends Component {
  state = {};
  componentDidMount() {
    this.setState({ weather: data });
    this.setState({ forecastWeatherData: forecastWeatherData });
  }
  // componentDidMount() {
  //   axios
  //     .get(
  //       `http://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=pawtucket&days=6&aqi=no&alerts=no`
  //     )
  //     .then((res) => {
  //       const forecastWeather = res.data;
  //       this.setState({ forecastWeatherData: forecastWeather });
  //     });
  // }

  setCityName = (searchBarResults) => {
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=${searchBarResults}&days=6&aqi=no&alerts=no`
      )
      .then((res) => {
        const forecastWeather = res.data;
        this.setState({ forecastWeatherData: forecastWeather });
        console.log(this.state.forecastWeatherData);
      });
  };

  render() {
    if (this.state.forecastWeatherData === undefined) {
      return (
        <div>
          <Searchbar />
        </div>
      );
    } else {
      return (
        <div className="App">
          <div className="container">
            <div className="row">
              <div className="col-2">
                <div>
                  <HourlyForecast />
                </div>
              </div>
              <div className="col-8">
                <Title />
                <Searchbar setCityName={this.setCityName} />
                <CurrentWeather
                  currentWeather={this.state.forecastWeatherData.current}
                  currentLocation={this.state.forecastWeatherData.location}
                />
                <ForecastWeather
                  forecastWeather={this.state.forecastWeatherData}
                />
              </div>
              <div className="col-2"></div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
