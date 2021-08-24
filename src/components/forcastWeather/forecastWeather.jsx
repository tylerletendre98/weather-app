import "./forecastWeather.css";

const ForecastWeather = (props) => {
  return (
    <div>
      <div></div>
      <div className="container">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-8">
            <div className="forcastWeather-title">
              <h3>
                {props.forecastWeather.forecast.forecastday.length} day forcast
              </h3>
            </div>
            <div>
              {props.forecastWeather.forecast.forecastday.map((dayForecast) => {
                return (
                  <div className="forecast-container">
                    <div>
                      <h3>{dayForecast.date}</h3>
                    </div>
                    <div>
                      <div>
                        Condition: {dayForecast.day.condition.text}
                        <img src={dayForecast.day.condition.icon} alt="" />
                      </div>
                    </div>
                    <div>
                      <p>High temp: {dayForecast.day.maxtemp_f}</p>
                      <p>Low temp: {dayForecast.day.mintemp_f}</p>
                      <p>
                        Chance of rain: {dayForecast.day.daily_chance_of_rain}%
                      </p>
                      <p>Sunrise: {dayForecast.astro.sunrise}</p>
                      <p>Sunset: {dayForecast.astro.sunset}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-5"></div>
        </div>
      </div>
    </div>
  );
};

export default ForecastWeather;
