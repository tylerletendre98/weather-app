const CurrentWeather = (props) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div class="col-2"></div>
          <div class="col-8">
            <div className="title-header">
              <div className="weather-containter">
                <div className="location">
                  <h3>
                    {props.currentWeather.location.name},
                    {props.currentWeather.location.region}
                    <img
                      src="//cdn.weatherapi.com/weather/64x64/day/116.png"
                      alt="condition image"
                    />
                  </h3>
                </div>
                <div className="location-conditions">
                  <p>temperature: {props.currentWeather.current.temp_f}</p>
                  <p>feels like: {props.currentWeather.current.feelslike_f}</p>
                  <p>Winds: {props.currentWeather.current.wind_mph}</p>
                  <p>Wind direction: {props.currentWeather.current.wind_dir}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-2"></div>
        </div>
      </div>
    </div>
  );
};
export default CurrentWeather;
