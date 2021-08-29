import "./hourlyForecast.css";

const HourlyForecast = (props) => {
  return (
    <div>
      {props.hourlyForecast.map((hour) => {
        return (
          <div>
            <div className="hourly-conditions-container">
              <div className="hour-container">
                <p>{hour.time}</p>
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
