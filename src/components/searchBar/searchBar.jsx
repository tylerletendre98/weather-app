import { useState } from "react";

const Searchbar = (props) => {
  const [city, setCity] = useState("");

  const setCityName = (e) => {
    setCity(e.target.value);
  };

  const submit = () => {
    props.setCityName(city);
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-8">
            <div>
              <h4>Enter the name of your city</h4>
              <input type="text" name="" id="" onChange={setCityName} />
              <input type="submit" name="" id="" onSubmit={submit} />
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};
export default Searchbar;
