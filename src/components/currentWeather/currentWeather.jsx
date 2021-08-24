import "./currentWeather.css";
const CurrentWeather = (props) => {
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
                    {props.currentWeather.location.name},
                    {props.currentWeather.location.region}
                  </h3>
                </div>
                <div className="location-conditions">
                  <p>
                    Sky Condition: {props.currentWeather.current.condition.text}
                    <img src={props.currentWeather.current.condition.icon} />
                  </p>
                  <p>Temperature: {props.currentWeather.current.temp_f}</p>
                  <p>Heat Index: {props.currentWeather.current.feelslike_f}</p>
                  <p>Winds: {props.currentWeather.current.wind_mph}</p>
                  <p>Wind direction: {props.currentWeather.current.wind_dir}</p>
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
