import { Component } from "react";
import "./App.css";
// import axios from "axios";
import Title from "./components/title/title";
import APIKEY from "./key";
import data from "./data";
import CurrentWeather from "./components/currentWeather/currentWeather";

class App extends Component {
  state = {};
  componentDidMount() {
    this.setState({ weather: data });
  }
  // componentDidMount() {
  //   axios
  //     .get(
  //       `http://api.weatherapi.com/v1/current.json?key={APIKEY}&q=boston&aqi=no`
  //     )
  //     .then((res) => {
  //       const weather = res.data;
  //       this.setState({ weather });
  //       console.log(this.state.weather);
  //     });
  // }
  render() {
    if (this.state.weather === undefined) {
      return <div></div>;
    } else {
      return (
        <div className="App">
          <Title />
          <CurrentWeather currentWeather={this.state.weather} />
        </div>
      );
    }
  }
}

export default App;
