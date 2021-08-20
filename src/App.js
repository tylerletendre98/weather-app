import { Component } from "react";
import "./App.css";
import axios from "axios";
import Title from "./components/title/title";
import APIKEY from "./key";
import data from "./data";
import CurrentWeather from "./components/currentWeather/currentWeather";
import Searchbar from "./components/searchBar/searchBar";

class App extends Component {
  state = {
    cityName: "",
  };
  // componentDidMount() {
  //   this.setState({ weather: data });
  // }
  // componentDidMount() {
  //   axios
  //     .get(
  //       `http://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${this.state.cityName}&aqi=no`
  //     )
  //     .then((res) => {
  //       const weather = res.data;
  //       this.setState({ weather: weather });
  //     });
  // }

  setCityName = (searchBarResults) => {
    this.setState({ cityName: searchBarResults });
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
        </div>
      );
    }
  }
}

export default App;
