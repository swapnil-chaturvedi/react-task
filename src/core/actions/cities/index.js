// import axios from "axios";
import { FETCH_CITIES } from "./citiesType";
import { SHORTLIST_CITY } from "./citiesType";
import { DELETE_CITY } from "./citiesType";
import { ADD_CITY } from "./citiesType";

export function getAllCities(params, dispatch) {
  return { type: FETCH_CITIES };
}

export function addCity(data) {
  return { type: ADD_CITY, payload: data };
}

export function deleteCity(cityId) {
  return { type: DELETE_CITY, payload: cityId };
}

export function shortlistCity(cityId) {
  return { type: SHORTLIST_CITY, payload: cityId };
}

//fetch cities API call

// export const fetchCities = async (data,disptch) => {
//   try {
//     const res = await axios.get(
//       "https://next.json-generator.com/api/json/get/EJX4SGwfK"
//     );
// dispatch({
//   type: FETCH_CITIES_SUCCESS,
//   payload: res.data,
// });
//   } catch (e) {
//     dispatch({
//       type: FETCH_CITIES_FAIL,
//       payload: res.data,
//     });
//   }
// };
