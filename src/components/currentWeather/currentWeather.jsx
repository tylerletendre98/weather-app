import "./currentWeather.css";
const CurrentWeather = (props) => {
  console.log(props);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-8">
            <div className="title-header">
              <div className="weather-containter">
                <div className="location">
                  <h3>
                    {props.currentLocation.name},{props.currentLocation.region}
                  </h3>
                </div>
                <div className="location-conditions">
                  <p>
                    Sky Condition: {props.currentWeather.condition.text}
                    <img src={props.currentWeather.condition.icon} />
                  </p>
                  <p>Temperature: {props.currentWeather.temp_f}</p>
                  <p>Heat Index: {props.currentWeather.feelslike_f}</p>
                  <p>Winds: {props.currentWeather.wind_mph}</p>
                  <p>Wind direction: {props.currentWeather.cwind_dir}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};
export default CurrentWeather;
