import { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    weather: {},
  };
  componentDidMount() {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=ff08d92b69ae4c3bbe3213850211708&q=boston&aqi=no`
      )
      .then((res) => {
        const weather = res.data;
        this.setState({ weather });
        console.log(this.state.weather);
      });
  }
  render() {
    return (
      <div className="App">
        <h1>Weather App</h1>
      </div>
    );
  }
}

export default App;
