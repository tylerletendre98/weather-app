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

class App extends Component {
  state = {
    cityName: "",
  };
  componentDidMount() {
    this.setState({ weather: data });
    this.setState({ forecastWeatherData: forecastWeatherData });
  }
  // componentDidMount() {
  //   axios
  //     .get(
  //       `http://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=pawtucket&aqi=no`
  //     )
  //     .then((res) => {
  //       const weather = res.data;
  //       this.setState({ weather: weather });
  //     });
  // }

  // componentDidUpdate() {
  //   if (this.state.cityName != "") {
  //     axios
  //       .get(
  //         `http://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${this.state.cityName}&aqi=no`
  //       )
  //       .then((res) => {
  //         const weather = res.data;
  //         this.setState({ weather: weather });
  //       });
  //   }
  // }

  setCityName = (searchBarResults) => {
    console.log(searchBarResults);
    this.setState({ cityName: searchBarResults });
    console.log(this.state.cityName);
  };

  render() {
    if (this.state.weather === undefined) {
      return (
        <div>
          <Searchbar />
        </div>
      );
    } else {
      return (
        <div className="App">
          <Title />
          <Searchbar setCityName={this.setCityName} />
          <CurrentWeather currentWeather={this.state.weather} />
          <ForecastWeather />
        </div>
      );
    }
  }
}

export default App;
