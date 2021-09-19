import "./moonphase.css";

const MoonPhase = (props) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-9">
            <div>
              <div>
                <h3>Moon Infomation</h3>
              </div>
            </div>
            <div className="mooninfo-container">
              <div>
                <p>Moonrise: {props.moonInfo.moonrise}</p>
                <p>Moonset: {props.moonInfo.moonset}</p>
                <p>Moon phase: {props.moonInfo.moon_phase}</p>
                <p>Moon Illumination: {props.moonInfo.moon_illumination}</p>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};

export default MoonPhase;
