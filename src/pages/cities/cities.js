import React, { Component } from "react";
import { connect } from "react-redux";
import { TabularData } from "../../components/TabularData";
import {
  addCity,
  deleteCity,
  getAllCities,
  shortlistCity,
} from "../../core/actions/cities";

class Cities extends Component {
  state = {
    searchValue: "",
    cities: [],
    showAddCity: false,
    city: "",
    district: "",
    state: "",
  };

  static getDerivedStateFromProps(props, state) {
    let searchValue = state.searchValue;
    let cities = props.isShortList ? [...props.shortList] : [...props.cities];
    if (searchValue && searchValue.trim()) {
      cities = cities.filter(
        ({ city, district, state }) =>
          city.toLowerCase().search(searchValue.toLowerCase()) > -1 ||
          district.toLowerCase().search(searchValue.toLowerCase()) > -1 ||
          state.toLowerCase().search(searchValue.toLowerCase()) > -1
      );
    }
    return {
      cities,
    };
  }

  componentDidMount() {
    this.props.getAllCities();
  }

  addCity = () => {};

  handleSearchChange = (e) => {
    let searchValue = e.target.value;
    this.setState({ ...this.state, searchValue });
  };

  handleCityChange = (e) => {
    let city = e.target.value;
    this.setState({ ...this.state, city });
  };

  handleDistrictChange = (event) => {
    console.log("district", event.target.value);
    this.setState({ ...this.state, district: event.target.value });
  };

  handleStateChange = (event) => {
    console.log("state", event.target.value);
    this.setState({ ...this.state, state: event.target.value });
  };

  toggleShowAddCity = () => {
    let showAddCity = !this.state.showAddCity;
    this.setState({ ...this.State, showAddCity });
  };

  render() {
    const { cities, city, district, state } = this.state;
    let districts = [...new Set(cities.map((city) => city.district))];
    districts.unshift("Select District");
    let states = [...new Set(cities.map((city) => city.state))];
    states.unshift("Select State");
    const { handleCityChange } = this;
    const { isShortList, deleteCity, shortlistCity, addCity } = this.props;
    return (
      <>
        {this.state.showAddCity ? (
          <div className="container">
            <div className="row all-cities-row">
              <div className="col s6">
                <h4>Add City</h4>
              </div>
              <div className="col s6">
                <button
                  onClick={this.toggleShowAddCity}
                  className="all-cities-btn btn right indigo waves-effect waves-light"
                >
                  All Cities
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col s4">
                <input
                  placeholder="City Name"
                  type="text"
                  className="new-city-input"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col s4">
                <div>
                  <select onChange={this.handleDistrictChange}>
                    {districts.map((district, index) => (
                      <option key={index} value={district}>
                        {district}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col s4">
                <select onChange={this.handleStateChange}>
                  {states.map((state, index) => {
                    return (
                      <option key={index} value={state}>
                        {state}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col s4"></div>
              <div className="col s4">
                <button
                  onClick={() =>
                    addCity({
                      id: cities.length + 1,
                      shortlistId: -1,
                      city: city,
                      district: district,
                      state: state,
                    })
                  }
                  className="add-new-city-btn btn right indigo waves-effect waves-light"
                >
                  Add New City
                </button>
              </div>
              <div className="col s4"></div>
            </div>
          </div>
        ) : (
          <div className="container">
            <div className="row">
              <div className="col s6">
                <h4>{isShortList ? "Short List" : "All Cities"}</h4>
              </div>
              {!isShortList && (
                <>
                  <div className="col s6">
                    <button
                      onClick={this.toggleShowAddCity}
                      className="add-new-city-btn btn right indigo waves-effect waves-light"
                    >
                      Add New City
                    </button>
                  </div>
                  {this.state.showAddCity ? (
                    ""
                  ) : (
                    <div className="search-box input-field">
                      <input
                        placeholder="Search"
                        type="text"
                        className="search-input"
                        onChange={(e) => this.handleSearchChange(e)}
                      />
                    </div>
                  )}
                </>
              )}
            </div>
            <TabularData
              isShortList={isShortList}
              cities={cities}
              deleteCity={(id) => deleteCity(id)}
              shortlistCity={(id) => shortlistCity(id)}
            />
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cities: state.cities,
    shortList: state.shortList,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getAllCities: () => dispatch(getAllCities()),
  deleteCity: (id) => dispatch(deleteCity(id)),
  shortlistCity: (id) => dispatch(shortlistCity(id)),
  addCity: (data) => dispatch(addCity(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
