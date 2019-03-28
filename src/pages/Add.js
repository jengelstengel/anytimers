import React from "react";
import { Link } from "react-router-dom";

class Add extends React.Component {
  render() {
    return (
      <div>
        <div className="update">
          <div className="cross">
            <h1>Add an anytimer</h1>
            <Link to="/">
              <i className="fas fa-times"></i>
            </Link>
          </div>
      <img src="https:///via.placeholder.com/100.jpg" alt="placeholder" />
      <div className="add">
        <div className="amount">
          <div className="minus">
            <i className="fas fa-minus"></i>
          </div>
          <div className="number">
            <p id="addValue">0</p>
          </div>
          <div className="plus">
            <i className="fas fa-plus"></i>
          </div>
        </div>
        <div className="anytime_from">
          <p>Anytimer from</p>
        </div>
        <select className="dropdown" name="">
          <option value="BLANK">Pick a name</option>
          <option value="$USER">Boyen de Leeuw</option>
          <option value="$USER">Daan Heijnen</option>
          <option value="$USER">Tijs Ots</option>
        </select>
        <div className="anytime_to">
          <p>Anytimer to</p>
        </div>
        <select className="dropdown" name="">
          <option value="BLANK">Pick a name</option>
          <option value="$USER_SELF">Twan Mulder (Self)</option>
          <option value="$USER">Boyen de Leeuw</option>
          <option value="$USER">Daan Heijnen</option>
          <option value="$USER">Tijs Ots</option>
        </select>
        <div className="description">
          <p>Description</p>
          <form id="description_form" className="" action="index.html" method="">
            <input placeholder="Type here" type="text" name=""/>
            <input value="Add anytimer" type="submit" className="submit-button"></input>
          </form>
        </div>
      </div>
    </div>
      </div>
    )
  }
}

export default Add;