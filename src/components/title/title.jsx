import "./title.css";

const Title = () => {
  return (
    <header>
      <div className="container">
        <div class="row">
          <div class="col-2"></div>
          <div class="col-8">
            <div className="title-header">
              <h1>Weather App</h1>
            </div>
          </div>
          <div class="col-2"></div>
        </div>
      </div>
    </header>
  );
};

export default Title;
