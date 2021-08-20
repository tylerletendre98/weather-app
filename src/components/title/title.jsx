import "./title.css";

const Title = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-8">
            <div className="title-header">
              <h1>Weather App</h1>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </header>
  );
};

export default Title;
