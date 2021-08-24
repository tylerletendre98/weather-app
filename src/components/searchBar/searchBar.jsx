import "./searchBar.css";
import { useState } from "react";

const Searchbar = (props) => {
  const [city, setCity] = useState("");

  const setCityName = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(city);
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
              <form action="" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name=""
                  id="searchBoxText"
                  onChange={setCityName}
                  placeholder="Please enter the name of your city"
                />
                <input type="submit" name="" id="" />
              </form>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};
export default Searchbar;
