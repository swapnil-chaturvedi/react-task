import React, { Component } from "react";

export class TabularData extends Component {
  render() {
    let { cities, deleteCity, shortlistCity, isShortList } = this.props;
    return (
      <table className="centered striped">
        <thead>
          <tr>
            <th>District</th>
            <th>City</th>
            <th>State</th>
            {isShortList ? "" : <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {cities.map((city, index) => {
            return (
              <tr key={index} className="row">
                <td>{city.city}</td>
                <td>{city.district}</td>
                <td>{city.state}</td>
                {isShortList ? (
                  ""
                ) : (
                  <td>
                    <button
                      onClick={(id) => shortlistCity(city.id)}
                      className="indigo btn-small waves-effect waves-light"
                    >
                      Shortlist
                    </button>
                    <button
                      onClick={(id) => deleteCity(city.id)}
                      className="indigo btn-small waves-effect waves-light"
                    >
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default TabularData;
