import "./hourlyForecast.css";

const HourlyForecast = (props) => {
  return (
    <div>
      <div className="hourly-forecast-title">
        <h3>Hourly Forecast</h3>
      </div>
      {props.hourlyForecast.map((hour) => {
        return (
          <div>
            <div className="hourly-conditions-container">
              <div className="hour-container">
                <h4>{hour.time}</h4>
                <p>
                  Sky Condition: {hour.condition.text}
                  <img src={hour.condition.icon} />
                </p>
                <p>Temperature: {hour.temp_f}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HourlyForecast;
