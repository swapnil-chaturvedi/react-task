import { shortlistCity } from "../actions/cities";
import { FETCH_CITIES } from "../actions/cities/citiesType";
import { SHORTLIST_CITY } from "../actions/cities/citiesType";
import { DELETE_CITY } from "../actions/cities/citiesType";
import { ADD_CITY } from "../actions/cities/citiesType";

const initState = {
  cities: [],
  shortList: [],
};

const citiesReducer = (state = { ...initState }, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_CITIES: {
      return {
        ...state,
        // cities: [payload],    //  Commented api data since getting CORS error
        cities: dummyData,
      };
    }

    case ADD_CITY: {
      let copyCities = [...state.cities];
      copyCities.push(payload);
      return {
        ...state,
        cities: [...copyCities],
      };
    }

    case DELETE_CITY: {
      let copyCities = [...state.cities];
      let copyShortlistCities = [...state.shortList];
      let newCities = copyCities.filter((city) => {
        return city.id !== payload;
      });
      let newShortList = copyShortlistCities.filter((city) => {
        return city.id !== payload;
      });

      return {
        ...state,
        cities: [...newCities],
        shortList: [...newShortList],
      };
    }

    case SHORTLIST_CITY: {
      console.log("city", payload);
      console.log("before", state.shortList);
      let copyCities = [...state.cities];
      let shortListCity = copyCities.filter((city) => {
        console.log(city.id, ",", payload);
        return city.id === payload;
      });
      console.log("shortListCity", shortListCity);
      return {
        ...state,
        shortList: [...state.shortList, ...shortListCity],
      };
    }

    default:
      return state;
  }
};

const dummyData = [
  {
    id: 1,
    shortListId: -1,
    city: "Thane",
    district: "Thane",
    state: "Maharashtra",
  },
  {
    id: 2,
    shortListId: -1,
    city: "Dombivli",
    district: "Thane",
    state: "Maharashtra",
  },
  {
    id: 3,
    shortListId: -1,
    city: "Kalyan",
    district: "Thane",
    state: "Maharashtra",
  },
  {
    id: 4,
    shortListId: -1,
    city: "Kalhar",
    district: "Thane",
    state: "Maharashtra",
  },
  {
    id: 5,
    shortListId: -1,
    city: "Nandgaon",
    district: "Nashik",
    state: "Maharashtra",
  },
  {
    id: 6,
    shortListId: -1,
    city: "Chiplun",
    district: "Ratnagiri",
    state: "Maharashtra",
  },
  {
    id: 7,
    shortListId: -1,
    city: "Khed",
    district: "Ratnagiri",
    state: "Maharashtra",
  },
  {
    id: 8,
    shortListId: -1,
    city: "Dholka",
    district: "Ahmedabad",
    state: "Gujarat",
  },
  {
    id: 9,
    shortListId: -1,
    city: "Bareja",
    district: "Ahmedabad",
    state: "Gujarat",
  },
  {
    id: 10,
    shortListId: -1,
    city: "Agra Cantonment",
    district: "Agra",
    state: "Uttar Pradesh",
  },
  {
    id: 11,
    shortListId: -1,
    city: "Fatehbad",
    district: "Agra",
    state: "Uttar Pradesh",
  },
  {
    id: 12,
    shortListId: -1,
    city: "Lucknow Cantonment",
    district: "Lucknow",
    state: "Uttar Pradesh",
  },
  {
    id: 13,
    shortListId: -1,
    city: "Nagram",
    district: "Lucknow",
    state: "Uttar Pradesh",
  },
  {
    id: 14,
    shortListId: -1,
    city: "Annur",
    district: "Coimbatore",
    state: "Tamil Nadu",
  },
  {
    id: 15,
    shortListId: -1,
    city: "Arasur",
    district: "Coimbatore",
    state: "Tamil Nadu",
  },
  {
    id: 16,
    shortListId: -1,
    city: "Chennai",
    district: "Chennai",
    state: "Tmail Nadu",
  },
  {
    id: 17,
    shortListId: -1,
    city: "Konark",
    district: "Puri",
    state: "Orissa",
  },
  {
    id: 18,
    shortListId: -1,
    city: "Puri",
    district: "Puri",
    state: "Orissa",
  },
  {
    id: 19,
    shortListId: -1,
    city: "Danara",
    district: "Angul",
    state: "Orissa",
  },
  {
    id: 20,
    shortListId: -1,
    city: "Jorada",
    district: "Angul",
    state: "Orissa",
  },
];

export default citiesReducer;
