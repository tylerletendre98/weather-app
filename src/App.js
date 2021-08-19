import { Component } from "react";
import "./App.css";
// import axios from "axios";
import Title from "./components/title/title";
import APIKEY from "./key";

class App extends Component {
  state = {
    weather: {},
  };
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
    return (
      <div className="App">
        <Title />
      </div>
    );
  }
}

export default App;
