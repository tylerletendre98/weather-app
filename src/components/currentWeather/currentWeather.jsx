const CurrentWeather = (props) => {
  console.log(props);
  return (
    <div>
      <h3>{props.currentWeather.location.name}</h3>
      <p>temperature: {props.currentWeather.current.temp_f}</p>
    </div>
  );
};
export default CurrentWeather;
